import uuid
from ckeditor.fields import RichTextField

from django.db import models
from django.urls import reverse


class Hashtag(models.Model):
    hashtag_id = models.AutoField(primary_key=True)
    value = models.CharField(max_length=20)
    value_en = models.CharField(max_length=20, blank=True)
    value_it = models.CharField(max_length=20, blank=True)

    def __str__(self):
        return f"#{self.value}"

    class Meta:
        db_table = 'hashtags'


class TechBlog(models.Model):
    id = models.AutoField(primary_key = True)
    title = models.CharField(max_length=63)
    tech1 = models.CharField(max_length=63)
    tech2 = models.CharField(max_length=63)
    tech3 = models.CharField(max_length=63, null=True)
    tech4 = models.CharField(max_length=63, null=True)


class ProjectPortfolio(models.Model):
    project_id = models.UUIDField(default=uuid.uuid4, editable=False, null=False, primary_key=True)
    title = models.CharField(max_length=255)
    desc = RichTextField(blank=True, null=True)
    pub_date = models.DateTimeField(auto_now=True)
    likes = models.IntegerField(default=0)
    views = models.IntegerField(default=0)
    reposts = models.IntegerField(default=0)
    hashtags = models.ManyToManyField(Hashtag, blank=True)
    blocks = models.ManyToManyField(TechBlog)
    image = models.ImageField(upload_to='images/')
    story_image_1 = models.ImageField(upload_to='images/', default='images/horizontal.jpg')
    story_image_2 = models.ImageField(upload_to='images/', default='images/1.png')
    value_image = models.ImageField(upload_to='images/', default='images/1.png')
    key_image_1 = models.ImageField(upload_to='images/', default='images/1.png')
    key_image_2 = models.ImageField(upload_to='images/', default='images/1.png')
    challenge_image = models.ImageField(upload_to='images/', default='images/1.png')
    our_work_1 = models.ImageField(upload_to='images/', default='images/1.png')
    our_work_2 = models.ImageField(upload_to='images/', default='images/1.png')
    story = RichTextField(
        default='<p>Default story. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, temporibus possimus! In quos, architecto sed illum quo ipsa sit harum sunt animi. Rem molestiae esse ut nostrum! Aspernatur, iste enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae mollitia sint iste odit, corrupti cumque illum sunt minus repudiandae alias, eum quas. Ipsa pariatur animi consequatur! Minus molestias corporis natus.</p>')
    challenge = RichTextField(
        default='<p>Default challenge. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, temporibus possimus! In quos, architecto sed illum quo ipsa sit harum sunt animi. Rem molestiae esse ut nostrum! Aspernatur, iste enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae mollitia sint iste odit, corrupti cumque illum sunt minus repudiandae alias, eum quas. Ipsa pariatur animi consequatur! Minus molestias corporis natus.</p>')
    our_work = RichTextField(
        default='<p>What we have done. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, temporibus possimus! In quos, architecto sed illum quo ipsa sit harum sunt animi. Rem molestiae esse ut nostrum! Aspernatur, iste enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae mollitia sint iste odit, corrupti cumque illum sunt minus repudiandae alias, eum quas. Ipsa pariatur animi consequatur! Minus molestias corporis natus.</p>')
    value = RichTextField(
        default='<p>Default value. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, temporibus possimus! In quos, architecto sed illum quo ipsa sit harum sunt animi. Rem molestiae esse ut nostrum! Aspernatur, iste enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae mollitia sint iste odit, corrupti cumque illum sunt minus repudiandae alias, eum quas. Ipsa pariatur animi consequatur! Minus molestias corporis natus.</p>')
    result = RichTextField(
        default='<p>Default result. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, temporibus possimus! In quos, architecto sed illum quo ipsa sit harum sunt animi. Rem molestiae esse ut nostrum! Aspernatur, iste enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae mollitia sint iste odit, corrupti cumque illum sunt minus repudiandae alias, eum quas. Ipsa pariatur animi consequatur! Minus molestias corporis natus.</p>')
    scope_list = RichTextField(default='<ul><li>List example, add bullets bellow</li></ul>')
    timeframe_list = RichTextField(default='<ul><li>List example, add bullets bellow</li></ul>')
    involvement_list = RichTextField(default='<ul><li>List example, add bullets bellow</li></ul>')
    result_short = RichTextField(default='<p>This is the default short result</p>')

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
        return self.title

    class Meta:
        db_table = 'portfolio'


# Create your models here.
class ProjectTransEn(models.Model):
    project_id = models.ForeignKey(ProjectPortfolio, on_delete=models.CASCADE, primary_key=True)
    title = models.CharField(max_length=255)
    desc = RichTextField()
    style = models.CharField(max_length=255)
    type = models.CharField(max_length=255)
    duration = models.CharField(max_length=63)
    story = RichTextField(
        default='<p>Default story ENG. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, temporibus possimus! In quos, architecto sed illum quo ipsa sit harum sunt animi. Rem molestiae esse ut nostrum! Aspernatur, iste enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae mollitia sint iste odit, corrupti cumque illum sunt minus repudiandae alias, eum quas. Ipsa pariatur animi consequatur! Minus molestias corporis natus.</p>')
    challenge = RichTextField(
        default='<p>Default challenge ENG. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, temporibus possimus! In quos, architecto sed illum quo ipsa sit harum sunt animi. Rem molestiae esse ut nostrum! Aspernatur, iste enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae mollitia sint iste odit, corrupti cumque illum sunt minus repudiandae alias, eum quas. Ipsa pariatur animi consequatur! Minus molestias corporis natus.</p>')
    our_work = RichTextField(
        default='<p>What we have done ENG. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, temporibus possimus! In quos, architecto sed illum quo ipsa sit harum sunt animi. Rem molestiae esse ut nostrum! Aspernatur, iste enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae mollitia sint iste odit, corrupti cumque illum sunt minus repudiandae alias, eum quas. Ipsa pariatur animi consequatur! Minus molestias corporis natus.</p>')
    value = RichTextField(
        default='<p>Default value ENG. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, temporibus possimus! In quos, architecto sed illum quo ipsa sit harum sunt animi. Rem molestiae esse ut nostrum! Aspernatur, iste enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae mollitia sint iste odit, corrupti cumque illum sunt minus repudiandae alias, eum quas. Ipsa pariatur animi consequatur! Minus molestias corporis natus.</p>')
    result = RichTextField(
        default='<p>Default result ENG. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, temporibus possimus! In quos, architecto sed illum quo ipsa sit harum sunt animi. Rem molestiae esse ut nostrum! Aspernatur, iste enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae mollitia sint iste odit, corrupti cumque illum sunt minus repudiandae alias, eum quas. Ipsa pariatur animi consequatur! Minus molestias corporis natus.</p>')
    scope_list = RichTextField(default='<ul><li>List example, add bullets bellow</li></ul>')
    timeframe_list = RichTextField(default='<ul><li>List example, add bullets bellow</li></ul>')
    involvement_list = RichTextField(default='<ul><li>List example, add bullets bellow</li></ul>')
    result_short = RichTextField(default='<p>This is the default short result</p>')
    def __str__(self):
        return self.title

    class Meta:
        db_table = 'portfolio_en'


class ProjectTransIt(models.Model):
    project_id = models.ForeignKey(ProjectPortfolio, on_delete=models.CASCADE, primary_key=True)
    title = models.CharField(max_length=255)
    desc = RichTextField()
    style = models.CharField(max_length=255)
    type = models.CharField(max_length=255)
    duration = models.CharField(max_length=63)
    story = RichTextField(
        default='<p>Default story IT. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, temporibus possimus! In quos, architecto sed illum quo ipsa sit harum sunt animi. Rem molestiae esse ut nostrum! Aspernatur, iste enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae mollitia sint iste odit, corrupti cumque illum sunt minus repudiandae alias, eum quas. Ipsa pariatur animi consequatur! Minus molestias corporis natus.</p>')
    challenge = RichTextField(
        default='<p>Default challenge IT. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, temporibus possimus! In quos, architecto sed illum quo ipsa sit harum sunt animi. Rem molestiae esse ut nostrum! Aspernatur, iste enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae mollitia sint iste odit, corrupti cumque illum sunt minus repudiandae alias, eum quas. Ipsa pariatur animi consequatur! Minus molestias corporis natus.</p>')
    our_work = RichTextField(
        default='<p>What we have done IT. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, temporibus possimus! In quos, architecto sed illum quo ipsa sit harum sunt animi. Rem molestiae esse ut nostrum! Aspernatur, iste enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae mollitia sint iste odit, corrupti cumque illum sunt minus repudiandae alias, eum quas. Ipsa pariatur animi consequatur! Minus molestias corporis natus.</p>')
    value = RichTextField(
        default='<p>Default value IT. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, temporibus possimus! In quos, architecto sed illum quo ipsa sit harum sunt animi. Rem molestiae esse ut nostrum! Aspernatur, iste enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae mollitia sint iste odit, corrupti cumque illum sunt minus repudiandae alias, eum quas. Ipsa pariatur animi consequatur! Minus molestias corporis natus.</p>')
    result = RichTextField(
        default='<p>Default result IT. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, temporibus possimus! In quos, architecto sed illum quo ipsa sit harum sunt animi. Rem molestiae esse ut nostrum! Aspernatur, iste enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae mollitia sint iste odit, corrupti cumque illum sunt minus repudiandae alias, eum quas. Ipsa pariatur animi consequatur! Minus molestias corporis natus.</p>')
    scope_list = RichTextField(default='<ul><li>List example, add bullets bellow</li></ul>')
    timeframe_list = RichTextField(default='<ul><li>List example, add bullets bellow</li></ul>')
    involvement_list = RichTextField(default='<ul><li>List example, add bullets bellow</li></ul>')
    result_short = RichTextField(default='<p>This is the default short result</p>')
    def __str__(self):
        return self.title

    class Meta:
        db_table = 'portfolio_it'
