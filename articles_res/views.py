from django.http import HttpResponse, Http404
from django.shortcuts import render, redirect

from art_overview.models import Article
from articles_res.trans_utils import get_translation_article, get_translation_project, get_translation_offer
from portfolio.models import ProjectPortfolio
from webcontrol.models import WebManager


def get_main_page_context(lang_code='ua'):
    context = {}
    articles = Article.objects.filter(is_published=True).order_by('-likes')[:3]
    projects = ProjectPortfolio.objects.order_by('-likes')[:3]
    controller = WebManager.objects.first()
    if lang_code != 'ua':
        for project in projects:
            project = get_translation_project(project, lang_code)
        for article in articles:
            article = get_translation_article(article, lang_code)
        controller.first_offer = get_translation_offer(controller.first_offer, lang_code)
        controller.second_offer = get_translation_offer(controller.second_offer, lang_code)
        controller.third_offer = get_translation_offer(controller.third_offer, lang_code)
    context['articles'] = articles
    if len(projects) >= 0:
        main_project = projects[0]
        secondary_projects = projects[1:3]
        context['main_project'] = main_project
        context['secondary_projects'] = secondary_projects
    context['controller'] = controller
    return context


def main_page(request):
    context = get_main_page_context()
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


def set_lang(request, lang_code):
    request.session['user_lang'] = lang_code
    print(request.session['user_lang'])
    return redirect('main')


def main_page_trans(request, lang_code):
    response = None
    context = get_main_page_context(lang_code)
    if lang_code == 'en':
        response = render(request, 'en/landing.html',context=context)
        response.set_cookie('user_lang', 'en')
    if lang_code == 'it':
        response = render(request, 'it/landing.html',context=context)
        response.set_cookie('user_lang', 'it')
    if response is None:
        raise Http404("Not found")
    return response


def cookie_page(request):
    return render(request,'articles_res/cookie.html')


def cookie_trans(request,lang_code):
    if lang_code == 'en':
        return render(request,'en/coockie_en.html')
    if lang_code == 'it':
        return render(request, 'it/coockie_it.html')
    raise Http404("Not found")