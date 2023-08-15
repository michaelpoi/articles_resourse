from django.urls import path
from portfolio import views

# All urls for portfolio app
urlpatterns = [
    path('', views.portfolio, name='portfolio'),  # main portfolio page
    path('<uuid:project_id>/',views.project_page, name='project'),
    path('<uuid:project_id>/like/', views.like_control, name='like_project')
]
