import uuid

from django.db import models


class Article(models.Model):
    article_id = models.UUIDField(default=uuid.uuid4, editable=False, null=False, primary_key=True)
    title = models.CharField(max_length=255)
    text = models.TextField()
    pub_date = models.DateTimeField(auto_now=True)
    likes = models.IntegerField(default=0)
    images = models.ImageField(upload_to='images/')

    class Meta:
        db_table = 'articles'




# Create your models here.
