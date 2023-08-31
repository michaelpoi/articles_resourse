import datetime

from django.http import JsonResponse, HttpResponse, Http404
from django.shortcuts import render, get_object_or_404, redirect
from django.urls import reverse
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponseNotFound
from articles_res.trans_utils import get_translation_project
from portfolio.models import ProjectPortfolio, ProjectTransEn, ProjectTransIt


# Create your views here.

# Portfolio homepage view
def get_portfolio_context(lang_code='ua'):
    context = {}
    projects = ProjectPortfolio.objects.order_by('-likes').all()
    if lang_code != 'ua':
        for project in projects:
            project = get_translation_project(project, lang_code)
    slider_projects = projects[:3]
    cards_projects = projects[3:]
    context['slider_projects'] = slider_projects
    context['cards_projects'] = cards_projects
    return context


def portfolio(request):
    context = get_portfolio_context()
    return render(request, 'portfolio/portfolio.html', context)


def project_page(request, project_id):
    project = get_object_or_404(ProjectPortfolio, project_id=project_id)
    response = render(request, 'portfolio/port__1.html', {'project': project})
    if not is_watched(request, project_id):
        project.watch()
        exp = datetime.datetime.now() + datetime.timedelta(days=7)
        response.set_cookie(str(project_id), "watched",expires=exp)
    return response


def is_liked(request, project_id):
    project_id = str(project_id)
    if (project_id + "_l") in request.COOKIES:
        return True
    return False


def is_watched(request, project_id):
    project_id = str(project_id)
    if project_id in request.COOKIES or request.COOKIES.get('allowCookies') == 'false':
        return True
    return False


def like_control(request, project_id):
    project_id = str(project_id)
    project = get_object_or_404(ProjectPortfolio, project_id=project_id)
    response = JsonResponse({'likes': project.likes})
    if request.COOKIES.get('allowCookies') == 'true':
        if is_liked(request, project_id):
            project.unlike()
            response.delete_cookie(project_id + "_l")
        else:
            exp = datetime.datetime.now() + datetime.timedelta(days=30)
            project.like()
            response.set_cookie(project_id + "_l", "liked", expires=exp)
    return response


@csrf_exempt
def like_project(request):
    if request.method == "POST":
        project_id = request.POST.get('project_id')
        return like_control(request, project_id)


def is_reposted(request, project_id):
    project_id = str(project_id)
    if (project_id + "_r") in request.COOKIES or request.COOKIES.get('allowCookies') == 'false':
        return True
    return False


def repost_control(request, project_id):
    project_id = str(project_id)
    project = get_object_or_404(ProjectPortfolio, project_id=project_id)
    response = JsonResponse({'reposts': project.reposts})
    if not is_reposted(request, project_id):
        project.repost()
        exp = datetime.datetime.now() + datetime.timedelta(days=30)
        response.set_cookie(project_id + "_r", "reposted", expires=exp)
    return response


@csrf_exempt
def repost_project(request):
    if request.method == "POST":
        project_id = request.POST.get('project_id')
        return repost_control(request, project_id)


def portfolio_trans(request, lang_code):
    response = None
    context = get_portfolio_context(lang_code)
    if lang_code == 'en':
        response = render(request, 'en/portfolio.html', context=context)
        response.set_cookie('user_lang', 'en')
    if lang_code == 'it':
        response = render(request, 'it/portfolio.html', context=context)
        response.set_cookie('user_lang', 'it')
    if response is None:
        raise Http404("Not found")
    return response


def project_trans(request, lang_code, project_id):
    response = None
    project = get_object_or_404(ProjectPortfolio, project_id=project_id)
    if not is_watched(request,project_id):
        project.watch()
    project = get_translation_project(project, lang_code)
    if lang_code == 'en':
        response = render(request, 'en/port__1.html', {'project': project})
        response.set_cookie('user_lang', 'en')
    if lang_code == 'it':
        response = render(request, 'it/port__1.html', {'project': project})
        response.set_cookie('user_lang', 'it')
    if not is_watched(request,project_id):
        exp = datetime.datetime.now() + datetime.timedelta(days=7)
        response.set_cookie(str(project_id),"watched", expires=exp)
    if response is None:
        raise Http404("Not found")
    return response
