from django.contrib import admin
from art_overview.models import Article


class Admin(admin.ModelAdmin):
    pass


admin.site.register(Article, Admin)
# Register your models here.
