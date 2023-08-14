import uuid
from ckeditor.fields import RichTextField

from django.db import models


class Hashtag(models.Model):
    hashtag_id = models.AutoField(primary_key=True)
    value = models.CharField(max_length=20)

    def __str__(self):
        return f"#{self.value}"

    class Meta:
        db_table = 'hashtags'


class ProjectPortfolio(models.Model):
    project_id = models.UUIDField(default=uuid.uuid4, editable=False, null=False, primary_key=True)
    title = models.CharField(max_length=255)
    desc = RichTextField(blank=True, null=True)
    pub_date = models.DateTimeField(auto_now=True)
    likes = models.IntegerField(default=0)
    views = models.IntegerField(default=0)
    reposts = models.IntegerField(default=0)
    link = models.URLField(blank=True)
    style = models.CharField(max_length=255)
    type = models.CharField(max_length=255)
    duration = models.DurationField()
    hashtags = models.ManyToManyField(Hashtag, blank=True)

    def like(self):
        self.likes += 1

    def __str__(self):
        return f"Portfolio -- {self.title}"

    class Meta:
        db_table = 'portfolio'


# Create your models here.



