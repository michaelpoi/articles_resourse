import uuid
from ckeditor.fields import RichTextField

from django.db import models
from django.urls import reverse


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
    duration = models.CharField(max_length=20)
    hashtags = models.ManyToManyField(Hashtag, blank=True)
    image = models.ImageField(upload_to='images/')

    def get_absolute_url(self):
        return reverse('project', args=[str(self.project_id)])

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
        return f"Portfolio -- {self.title}"

    class Meta:
        db_table = 'portfolio'


# Create your models here.



