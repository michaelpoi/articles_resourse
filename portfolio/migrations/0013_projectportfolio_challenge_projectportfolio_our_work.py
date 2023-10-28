# Generated by Django 4.2.2 on 2023-10-09 14:44

import ckeditor.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("portfolio", "0012_projectportfolio_story"),
    ]

    operations = [
        migrations.AddField(
            model_name="projectportfolio",
            name="challenge",
            field=ckeditor.fields.RichTextField(
                default="<p>Default challenge. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, temporibus possimus! In quos, architecto sed illum quo ipsa sit harum sunt animi. Rem molestiae esse ut nostrum! Aspernatur, iste enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae mollitia sint iste odit, corrupti cumque illum sunt minus repudiandae alias, eum quas. Ipsa pariatur animi consequatur! Minus molestias corporis natus.</p>"
            ),
        ),
        migrations.AddField(
            model_name="projectportfolio",
            name="our_work",
            field=ckeditor.fields.RichTextField(
                default="<p>What we have done. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, temporibus possimus! In quos, architecto sed illum quo ipsa sit harum sunt animi. Rem molestiae esse ut nostrum! Aspernatur, iste enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae mollitia sint iste odit, corrupti cumque illum sunt minus repudiandae alias, eum quas. Ipsa pariatur animi consequatur! Minus molestias corporis natus.</p>"
            ),
        ),
    ]