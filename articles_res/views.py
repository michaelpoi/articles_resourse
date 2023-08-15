from django.http import HttpResponse
from django.shortcuts import render

from art_overview.models import Article
from portfolio.models import ProjectPortfolio
from webcontrol.models import WebManager


def main_page(request):
    context = {}
    articles = Article.objects.order_by('-likes')[:3]
    context['articles'] = articles
    projects = ProjectPortfolio.objects.order_by('-likes')[:3]
    if len(projects) >= 0:
        main_project = projects[0]
        secondary_projects = projects[1:3]
        context['main_project'] = main_project
        context['secondary_projects'] = secondary_projects
    controller = WebManager.objects.first()
    context['controller'] = controller
    return render(request, 'articles_res/landing.html', context=context)


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
