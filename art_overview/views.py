from django.http import HttpResponse
from django.shortcuts import render
from requests.forms import RequestForm
from art_overview.models import Article


def blog(request):
    form = RequestForm()
    articles = Article.objects.order_by('-likes')[:10]
    return render(request, 'blog/blog.html', {'articles':articles, 'form':form})
# Create your views here.
