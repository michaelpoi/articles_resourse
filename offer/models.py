import uuid

from django.db import models
from ckeditor.fields import RichTextField
from django.urls import reverse


class PhotoAlbum(models.Model):
    image = models.ImageField(upload_to='images/')
    caption = models.CharField(max_length=63, primary_key=True)

    class Meta:
        db_table = "photo_album"


class Offer(models.Model):
    offer_id = models.UUIDField(default=uuid.uuid4, primary_key=True, editable=False, null=False)
    pub_date = models.DateTimeField(auto_now=True)
    title = models.CharField(max_length=255)
    intro = RichTextField()
    text_field_1 = models.CharField(max_length=255)
    text_field_2 = models.CharField(max_length=255)
    text_field_3 = models.CharField(max_length=255)
    duration = models.CharField(max_length=63)
    footer = RichTextField()
    images = models.ManyToManyField(PhotoAlbum)
    discount = models.IntegerField(default=0)

    class Meta:
        db_table = 'offers'
# Create your models here.