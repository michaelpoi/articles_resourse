# Generated by Django 4.2.2 on 2023-08-15 14:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("art_overview", "0006_article_hashtags"),
    ]

    operations = [
        migrations.AddField(
            model_name="article",
            name="reposts",
            field=models.PositiveIntegerField(default=0),
        ),
        migrations.AddField(
            model_name="article",
            name="views",
            field=models.PositiveIntegerField(default=0),
        ),
    ]
