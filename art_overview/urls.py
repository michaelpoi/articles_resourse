from django.urls import path

from art_overview import views

urlpatterns = [
    path('', views.blog, name='blog')
]
