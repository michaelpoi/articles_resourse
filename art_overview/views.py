from django.core.paginator import Paginator
from django.http import HttpResponse
from django.shortcuts import render, get_object_or_404
from requests.forms import RequestForm
from art_overview.models import Article


def blog(request):
    context = {}
    articles = Article.objects.order_by('-likes').filter(is_published=True).all()
    slider_articles = articles[:3]
    context['slider_articles'] = slider_articles
    cards_articles = articles[3:]
    p = Paginator(cards_articles,6)
    page = request.GET.get('page')
    cards = p.get_page(page)
    context['cards'] = cards
    return render(request, 'blog/blog.html', context=context)


# Create your views here.
def article(request, article_id):
    art = get_object_or_404(Article, article_id=article_id)
    return render(request, 'blog/blog1.html', {'article': art})
