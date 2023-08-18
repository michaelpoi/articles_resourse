from django.urls import path
from portfolio import views

# All urls for portfolio app
urlpatterns = [
    path('', views.portfolio, name='portfolio'),  # main portfolio page
    path('<uuid:project_id>/',views.project_page, name='project'),
    path('like_project/', views.like_project, name='project_like'),
    path('repost_project/', views.repost_project, name='repost_project')
]
