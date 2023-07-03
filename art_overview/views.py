from django.http import HttpResponse
from django.shortcuts import render, get_object_or_404
from requests.forms import RequestForm
from art_overview.models import Article


def blog(request):
    form = RequestForm()
    articles = Article.objects.order_by('-likes')[:10]
    return render(request, 'blog/blog.html', {'articles': articles, 'form': form})


# Create your views here.
def article(request, article_id):
    art = get_object_or_404(Article, article_id=article_id)
    return render(request, 'blog/article.html', {'article': art})
