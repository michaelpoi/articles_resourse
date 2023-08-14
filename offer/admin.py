from django.contrib import admin

from offer.models import Offer


@admin.register(Offer)
class OfferAdmin(admin.ModelAdmin):
    pass
# Register your models here.
