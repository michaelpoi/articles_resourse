from django.shortcuts import render, get_object_or_404
from portfolio.models import ProjectPortfolio
# Create your views here.

# Portfolio homepage view
def portfolio(request):
    projects = ProjectPortfolio.objects.order_by('-likes').all()
    slider_projects = projects[:3]
    cards_projects = projects[3:]

    return render(request,'portfolio/portfolio.html', {'slider_projects':slider_projects,
                                                       'cards_projects':cards_projects})


def project_page(request, project_id):
    project = get_object_or_404(ProjectPortfolio, project_id=project_id)
    return render(request, 'portfolio/port__1.html', {'project':project})