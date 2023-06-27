from django.contrib import admin

from requests.models import Request, Service


class Admin(admin.ModelAdmin):
    pass


admin.site.register(Request, Admin)
admin.site.register(Service, Admin)
# Register your models here.
