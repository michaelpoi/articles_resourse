"""
URL configuration for articles_res project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include

from portfolio import urls as port_urls
from art_overview import urls as blog_urls
from articles_res import views
from art_overview import views as blog_views
from portfolio import views as port_views

urlpatterns = [
                  path("admin/", admin.site.urls),
                  path('', views.main_page, name='main'),
                  path('blog/', include(blog_urls),),
                  path('portfolio/', include(port_urls),),
                  path('cookie/', views.cookie_page, name='cookie'),
                  path('set_lang/<str:lang_code>/', views.set_lang, name="set_lang"),
                  path('<str:lang_code>/', views.main_page_trans, name='main_trans'),
                  path('<str:lang_code>/blog/', blog_views.blog_trans, name='blog_trans'),
                  path('<str:lang_code>/portfolio/',port_views.portfolio_trans, name='portfolio_trans'),
                  path('<str:lang_code>/blog/article/<uuid:article_id>/', blog_views.article_trans,name='article_trans'),
                  path('<str:lang_code>/portfolio/<uuid:project_id>/',port_views.project_trans,name='project_trans'),
                  path('<str:lang_code>/cookie/', views.cookie_trans, name='cookie_trans')
              ] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

handler404 = 'articles_res.views.error_404'
handler500 = 'articles_res.views.error_500'
