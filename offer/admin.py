from django.contrib import admin

from offer.models import Offer,PhotoAlbum

@admin.register(PhotoAlbum)
class AlbumAdmin(admin.ModelAdmin):
    pass
@admin.register(Offer)
class OfferAdmin(admin.ModelAdmin):
    filter_horizontal = ['images']
# Register your models here.
