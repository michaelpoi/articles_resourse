from django.core.paginator import Paginator
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, get_object_or_404
from requests.forms import RequestForm
from art_overview.models import Article
from django.views.decorators.csrf import csrf_exempt


def blog(request):
    context = {}
    articles = Article.objects.order_by('-likes').filter(is_published=True).all()
    slider_articles = articles[:3]
    context['slider_articles'] = slider_articles
    cards_articles = articles[3:]
    p = Paginator(cards_articles, 6)
    page = request.GET.get('page')
    cards = p.get_page(page)
    context['cards'] = cards
    return render(request, 'blog/blog.html', context=context)


# Create your views here.
def article(request, article_id):
    art = get_object_or_404(Article, article_id=article_id)
    return render(request, 'blog/blog1.html', {'article': art})


def is_liked(request, article_id):
    article_id = str(article_id)
    if 'liked' == request.COOKIES.get(article_id):
        return True
    return False


def like_control(request, article_id):
    article_id = str(article_id)
    article = get_object_or_404(Article, article_id=article_id)
    response = JsonResponse({'likes': article.likes})
    if is_liked(request, article_id):
        article.unlike()
        response.delete_cookie(article_id)
    else:
        article.like()
        response.set_cookie(article_id, "liked")
    return response


@csrf_exempt
def like_article(request):
    if request.method == 'POST':
        article_id = request.POST.get('article_id')
        return like_control(request, article_id)
