from django.shortcuts import render

from art_overview.models import Article


def main_page(request):
    articles = Article.objects.order_by('-likes')[:10]
    return render(request, 'articles_res/landing.html',{"articles":articles})
