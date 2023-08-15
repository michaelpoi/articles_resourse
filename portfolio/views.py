from django.shortcuts import render, get_object_or_404, redirect
from portfolio.models import ProjectPortfolio


# Create your views here.

# Portfolio homepage view
def portfolio(request):
    projects = ProjectPortfolio.objects.order_by('-likes').all()
    slider_projects = projects[:3]
    cards_projects = projects[3:]

    return render(request, 'portfolio/portfolio.html', {'slider_projects': slider_projects,
                                                        'cards_projects': cards_projects})


def project_page(request, project_id):
    project = get_object_or_404(ProjectPortfolio, project_id=project_id)
    return render(request, 'portfolio/port__1.html', {'project': project})


def is_liked(request, project_id):
    project_id = str(project_id)
    if 'liked' == request.COOKIES.get(project_id):
        return True
    return False


def like_control(request, project_id):
    project_id = str(project_id)
    project = get_object_or_404(ProjectPortfolio, project_id=project_id)
    response = redirect('main')
    if is_liked(request,project_id):
        project.unlike()
        response.delete_cookie(project_id)
    else:
        response.set_cookie(project_id, "liked")
    return response

