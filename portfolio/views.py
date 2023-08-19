from django.http import JsonResponse, HttpResponse
from django.shortcuts import render, get_object_or_404, redirect
from django.urls import reverse
from django.views.decorators.csrf import csrf_exempt
from portfolio.models import ProjectPortfolio, ProjectTransEn, ProjectTransDe


# Create your views here.

# Portfolio homepage view
def portfolio(request):
    projects = ProjectPortfolio.objects.order_by('-likes').all()
    for project in projects:
        project = get_translation_project(request,project)
    slider_projects = projects[:3]
    cards_projects = projects[3:]

    return render(request, 'portfolio/portfolio.html', {'slider_projects': slider_projects,
                                                        'cards_projects': cards_projects})


def project_page(request, project_id):
    project = get_object_or_404(ProjectPortfolio, project_id=project_id)
    project = get_translation_project(request,project)
    response = render(request, 'portfolio/port__1.html', {'project': project})
    if not is_watched(request, project_id):
        project.watch()
        response.set_cookie(str(project_id), "watched")
    return response


def is_liked(request, project_id):
    project_id = str(project_id)
    if (project_id + "_l") in request.COOKIES:
        return True
    return False


def is_watched(request, project_id):
    project_id = str(project_id)
    if project_id in request.COOKIES and 'watched' == request.COOKIES.get(project_id):
        return True
    return False


def like_control(request, project_id):
    project_id = str(project_id)
    project = get_object_or_404(ProjectPortfolio, project_id=project_id)
    response = JsonResponse({'likes': project.likes})
    if is_liked(request, project_id):
        project.unlike()
        response.delete_cookie(project_id + "_l")
    else:
        project.like()
        response.set_cookie(project_id + "_l", "liked")
    return response


@csrf_exempt
def like_project(request):
    if request.method == "POST":
        project_id = request.POST.get('project_id')
        return like_control(request, project_id)


def is_reposted(request, project_id):
    project_id = str(project_id)
    if (project_id + "_r") in request.COOKIES:
        return True
    return False


def repost_control(request, project_id):
    project_id = str(project_id)
    project = get_object_or_404(ProjectPortfolio, project_id=project_id)
    response = JsonResponse({'reposts': project.reposts})
    if not is_reposted(request, project_id):
        project.repost()
        response.set_cookie(project_id + "_r", "reposted")
    return response


@csrf_exempt
def repost_project(request):
    if request.method == "POST":
        project_id = request.POST.get('project_id')
        return repost_control(request, project_id)


def get_translation_project(request, project):
    lang_code = request.session['user_lang']
    project_id = project.project_id
    match lang_code:
        case 'en':
            try:
                trans = ProjectTransEn.objects.get(project_id=project_id)
            except:
                return project
        case 'de':
            try:
                trans = ProjectTransDe.objects.get(project_id=project_id)
            except:
                return project
        case 'ua':
            return project
    project.desc = trans.desc
    project.title = trans.title
    project.style = trans.style
    project.type = trans.type
    return project
