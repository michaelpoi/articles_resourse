from django.contrib import admin
from portfolio.models import ProjectPortfolio, Hashtag, ProjectTransEn, ProjectTransDe


@admin.register(Hashtag)
class HashtagAdmin(admin.ModelAdmin):
    pass


@admin.register(ProjectPortfolio)
class AdminPortfolio(admin.ModelAdmin):
    filter_horizontal = ['hashtags']

@admin.register(ProjectTransEn)
class AdminEn(admin.ModelAdmin):
    pass

@admin.register(ProjectTransDe)
class AdminDe(admin.ModelAdmin):
    pass

# Register your models here.
