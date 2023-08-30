import datetime

from django.core.paginator import Paginator
from django.db.models import Q
from django.http import HttpResponse, JsonResponse, Http404
from django.shortcuts import render, get_object_or_404
from django.utils.datastructures import MultiValueDictKeyError

from articles_res.trans_utils import get_translation_article
from requests.forms import RequestForm
from art_overview.models import Article, ArticleTransIt, ArticleTransEn
from django.views.decorators.csrf import csrf_exempt


def blog(request):
    context = get_blog_context(request)
    return render(request, 'blog/blog.html', context=context)


def get_blog_context(request, lang_code='ua'):
    context = {}
    articles = Article.objects.order_by('-likes').filter(is_published=True).all()
    if lang_code != 'ua':
        for art in articles:
            art = get_translation_article(art, lang_code)
    slider_articles = articles[:3]
    context['slider_articles'] = slider_articles
    cards_articles = articles[3:]
    p = Paginator(cards_articles, 6)
    page = request.GET.get('page')
    cards = p.get_page(page)
    context['cards'] = cards
    return context


# Create your views here.
def article(request, article_id):
    art = get_object_or_404(Article, article_id=article_id)
    response = render(request, 'blog/blog1.html', {'article': art})
    if not is_watched(request, article_id):
        art.watch()
        exp = datetime.datetime.now() + datetime.timedelta(days=7)
        response.set_cookie(str(article_id), "watched", expires=exp)
    return response


def is_liked(request, article_id):
    article_id = str(article_id)
    if (article_id + "_l") in request.COOKIES:
        return True
    return False


def like_control(request, article_id):
    article_id = str(article_id)
    article = get_object_or_404(Article, article_id=article_id)
    response = JsonResponse({'likes': article.likes})
    if is_liked(request, article_id):
        article.unlike()
        response.delete_cookie(article_id + "_l")
    else:
        article.like()
        exp = datetime.datetime.now() + datetime.timedelta(days=30)
        response.set_cookie(article_id + "_l", "liked", expires=exp)
    return response


@csrf_exempt
def like_article(request):
    if request.method == 'POST':
        article_id = request.POST.get('article_id')
        return like_control(request, article_id)


def is_watched(request, article_id):
    article_id = str(article_id)
    if article_id in request.COOKIES:
        return True
    return False


def is_reposted(request, article_id):
    article_id = str(article_id)
    if (article_id + "_r") in request.COOKIES:
        return True
    return False


def repost_control(request, article_id):
    article_id = str(article_id)
    article = get_object_or_404(Article, article_id=article_id)
    response = JsonResponse({'reposts': article.reposts})
    if not is_reposted(request, article_id):
        article.repost()
        exp = datetime.datetime.now() + datetime.timedelta(days=30)
        response.set_cookie(article_id + "_r", "reposted", expires=exp)
    return response


@csrf_exempt
def repost_article(request):
    if request.method == "POST":
        article_id = request.POST.get('article_id')
        return repost_control(request, article_id)


def blog_trans(request, lang_code):
    response = None
    context = get_blog_context(request, lang_code)
    if lang_code == 'en':
        response = render(request, 'en/blog.html', context=context)
        response.set_cookie('user_lang', 'en')
    if lang_code == 'it':
        response = render(request, 'it/blog.html', context=context)
        response.set_cookie('user_lang', 'it')
    if response is None:
        raise Http404("Not found")
    return response


def article_trans(request, lang_code, article_id):
    art = get_object_or_404(Article, article_id=article_id)
    if not is_watched(request, article_id):
        art.watch()
    trans_art = get_translation_article(art, lang_code)
    print(art == trans_art)
    response = None
    if lang_code == 'en':
        response = render(request, 'en/blog1.html', {'article': trans_art})
        response.set_cookie('user_lang', 'en')
    if lang_code == 'it':
        response = render(request, 'it/blog1.html', {'article': trans_art})
        response.set_cookie('user_lang', 'it')
    if response is None:
        raise Http404("Not found")
    if not is_watched(request, article_id):
        exp = datetime.datetime.now() + datetime.timedelta(days=7)
        response.set_cookie(str(article_id), "watched", expires=exp)

    return response

@csrf_exempt
def search(request):
    try:
        searched = request.GET['searched']
    except MultiValueDictKeyError:
        raise Http404('not found')
    articles = Article.objects.filter(Q(title__contains=searched)).order_by('-likes').all()
    p = Paginator(articles, 6)
    page = request.GET.get('page')
    cards = p.get_page(page)
    return render(request, 'blog/search.html', {'cards': cards})


@csrf_exempt
def search_trans(request, lang_code):
    try:
        searched = request.GET['searched']
    except MultiValueDictKeyError:
        raise Http404("Not found")
    match lang_code:
        case 'en':
            articles = Article.objects.filter(translation_en__title__contains=searched).all()
            for article in articles:
                article = get_translation_article(article,'en')
        case 'it':
            articles = Article.objects.filter(translation_de__title__contains=searched).all()
            for article in articles:
                article = get_translation_article(article, 'it')
        case _:
            raise Http404("Not found")

    p = Paginator(articles,6)
    page = request.GET.get('page')
    cards = p.get_page(page)
    return render(request, f"{lang_code}/search.html", {'cards':cards})

