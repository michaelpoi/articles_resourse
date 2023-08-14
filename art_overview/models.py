import random
import uuid

from django.db import models
from ckeditor.fields import RichTextField
from django.urls import reverse


class Article(models.Model):
    article_id = models.UUIDField(default=uuid.uuid4, editable=False, null=False, primary_key=True)
    title = models.CharField(max_length=255)
    text = RichTextField(blank=True, null=True)
    pub_date = models.DateTimeField(auto_now=True)
    likes = models.IntegerField(default=0)
    image_main = models.ImageField(upload_to='images/')
    is_published = models.BooleanField(null=False)
    image_secondary = models.ImageField(upload_to='images/')

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('article', args=[str(self.article_id)])

    class Meta:
        db_table = 'articles'


# Create your models here.

class Code(models.Model):
    code = models.CharField(max_length=6, primary_key=True)
    articles = models.ManyToManyField(Article)

    class Meta:
        db_table = 'codes'
