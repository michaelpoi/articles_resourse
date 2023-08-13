from django.http import HttpResponse
from django.shortcuts import render

from art_overview.models import Article


def main_page(request):
    articles = Article.objects.order_by('-likes')[:10]
    return render(request, 'articles_res/landing.html', {"articles": articles})


def error_404(request, exception):
    context = {
        'code': '404',
        'message': 'Щось пішло не так',
        'solution': 'Схоже ця сторінка переїхала'
    }
    return render(request, 'error/error.html', status=404, context=context)


def error_500(request):
    context = {
        'code': '500',
        'message': 'Схоже що сервер відпочиває',
        'solution': 'Зверніться трохи пізніше'
    }
    return render(request, 'error/error.html', status=404, context=context)
