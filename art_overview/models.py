import random
import uuid

from django.db import models
from ckeditor.fields import RichTextField
from django.urls import reverse

from portfolio.models import Hashtag


class Article(models.Model):
    article_id = models.UUIDField(default=uuid.uuid4, editable=False, null=False, primary_key=True)
    title = models.CharField(max_length=255)
    text = RichTextField(blank=True, null=True)
    footer_text = RichTextField(blank=True, default="This is a default footer")
    bottom_text = RichTextField(default="This is a default bottom text")
    pub_date = models.DateTimeField(auto_now=True)
    likes = models.IntegerField(default=0)
    views = models.PositiveIntegerField(default=0)
    reposts = models.PositiveIntegerField(default=0)
    image_main = models.ImageField(upload_to='images/')
    is_published = models.BooleanField(null=False)
    image_secondary = models.ImageField(upload_to='images/')
    hashtags = models.ManyToManyField(Hashtag, blank=True)

    def like(self):
        self.likes += 1
        self.save()

    def unlike(self):
        self.likes -= 1
        self.save()

    def watch(self):
        self.views += 1
        self.save()

    def repost(self):
        self.reposts += 1
        self.save()

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('article', args=[str(self.article_id)])

    class Meta:
        db_table = 'articles'


class ArticleTransEn(models.Model):
    article_id = models.ForeignKey(Article, on_delete=models.CASCADE, related_name='translation_en',primary_key=True)
    title = models.CharField(max_length=255)
    text = RichTextField()
    footer_text = RichTextField()
    bottom_text = RichTextField(default="<p>default bottom text</p>")


    def __str__(self):
        return self.title

    class Meta:
        db_table = 'articles_en'


class ArticleTransIt(models.Model):
    article_id = models.ForeignKey(Article, on_delete=models.CASCADE, related_name='translation_de',primary_key=True)
    title = models.CharField(max_length=255)
    text = RichTextField()
    footer_text = RichTextField()
    bottom_text = RichTextField(default="<p>default bottom text</p>")

    def __str__(self):
        return self.title
    class Meta:
        db_table = 'articles_it'


# Create your models here.

class Code(models.Model):
    code = models.CharField(max_length=6, primary_key=True)
    articles = models.ManyToManyField(Article)

    class Meta:
        db_table = 'codes'
