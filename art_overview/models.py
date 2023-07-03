import uuid

from django.db import models
from ckeditor.fields import RichTextField

class Article(models.Model):
    article_id = models.UUIDField(default=uuid.uuid4, editable=False, null=False, primary_key=True)
    title = models.CharField(max_length=255)
    text = RichTextField(blank=True,null=True)
    pub_date = models.DateTimeField(auto_now=True)
    likes = models.IntegerField(default=0)
    images = models.ImageField(upload_to='images/')
    def __str__(self):
        return self.title
    class Meta:
        db_table = 'articles'




# Create your models here.
