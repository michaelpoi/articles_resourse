# Generated by Django 4.2.2 on 2023-08-25 09:27

import ckeditor.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("art_overview", "0013_article_bottom_text"),
    ]

    operations = [
        migrations.AddField(
            model_name="articletransen",
            name="bottom_text",
            field=ckeditor.fields.RichTextField(default="<p>default bottom text</p>"),
        ),
        migrations.AddField(
            model_name="articletransit",
            name="bottom_text",
            field=ckeditor.fields.RichTextField(default="<p>default bottom text</p>"),
        ),
    ]
