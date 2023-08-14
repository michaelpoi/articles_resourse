from django.contrib import admin
from webcontrol.models import WebManager

@admin.register(WebManager)
class ManagerAdmin(admin.ModelAdmin):
    def has_add_permission(self, request):
        return False

    def has_delete_permission(self, request, obj=None):
        return False
# Register your models here.
