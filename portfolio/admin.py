from django.contrib import admin
from portfolio.models import ProjectPortfolio, Hashtag, ProjectTransEn, ProjectTransIt, TechBlog


@admin.register(Hashtag)
class HashtagAdmin(admin.ModelAdmin):
    pass


@admin.register(ProjectPortfolio)
class AdminPortfolio(admin.ModelAdmin):
    filter_horizontal = ['hashtags', 'blocks']

@admin.register(TechBlog)
class AdminTech(admin.ModelAdmin):
    pass

@admin.register(ProjectTransEn)
class AdminEn(admin.ModelAdmin):
    pass

@admin.register(ProjectTransIt)
class AdminDe(admin.ModelAdmin):
    pass

# Register your models here.
