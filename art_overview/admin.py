from django.contrib import admin
from art_overview.models import Article, Code, ArticleTransEn, ArticleTransIt


class Admin(admin.ModelAdmin):
    search_fields = ['title']
    list_filter = ('is_published',)
    # ordering = ['-likes']
    list_display = ['title', 'pub_date', 'likes', 'is_published']
    filter_horizontal = ['hashtags']


admin.site.register(Article, Admin)


@admin.register(ArticleTransEn)
class TransEnAdmin(admin.ModelAdmin):
    search_fields = ['title']



@admin.register(ArticleTransIt)
class TransDeAdmin(admin.ModelAdmin):
    search_fields = ['title']


# Register your models here.


@admin.register(Code)
class CodeAdmin(admin.ModelAdmin):
    filter_horizontal = ['articles']
