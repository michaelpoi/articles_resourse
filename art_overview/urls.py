from django.urls import path

from art_overview import views

urlpatterns = [
    path('', views.blog, name='blog'),
    path('article/<uuid:article_id>/', views.article, name='article')
]
