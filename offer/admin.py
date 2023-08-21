from django.contrib import admin

from offer.models import Offer,PhotoAlbum, OfferTransEn,OfferTransIt

@admin.register(PhotoAlbum)
class AlbumAdmin(admin.ModelAdmin):
    pass
@admin.register(Offer)
class OfferAdmin(admin.ModelAdmin):
    filter_horizontal = ['images']

@admin.register(OfferTransEn)
class AdminEn(admin.ModelAdmin):
    pass

@admin.register(OfferTransIt)
class AdminDe(admin.ModelAdmin):
    pass
# Register your models here.
