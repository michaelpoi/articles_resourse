from django.http import HttpResponse
from django.shortcuts import render

from art_overview.models import Article


def blog(request):
    articles = Article.objects.order_by('-likes')[:10]
    return render(request, 'blog/blog.html', {'articles':articles})
# Create your views here.
