from django.urls import path

from art_overview import views

urlpatterns = [
    path('', views.blog, name='blog'),
    path('article/<uuid:article_id>/', views.article, name='article'),
    path('like_article/', views.like_article, name='like_article'),
    path('repost_article/', views.repost_article, name='repost_article')
]
