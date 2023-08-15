from django.contrib import admin
from art_overview.models import Article, Code


class Admin(admin.ModelAdmin):
   search_fields = ['title']
   list_filter = ('is_published',)
   #ordering = ['-likes']
   list_display = ['title','pub_date','likes','is_published']
   filter_horizontal = ['hashtags']


admin.site.register(Article, Admin)


# Register your models here.


@admin.register(Code)
class CodeAdmin(admin.ModelAdmin):
    filter_horizontal = ['articles']
