from django.contrib import admin
from portfolio.models import ProjectPortfolio,Hashtag


@admin.register(Hashtag)
class HashtagAdmin(admin.ModelAdmin):
    pass


@admin.register(ProjectPortfolio)
class AdminPortfolio(admin.ModelAdmin):
    filter_horizontal = ['hashtags']

# Register your models here.
