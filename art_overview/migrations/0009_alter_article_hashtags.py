# Generated by Django 4.2.2 on 2023-08-15 15:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("portfolio", "0005_alter_projectportfolio_image"),
        ("art_overview", "0008_article_footer_text"),
    ]

    operations = [
        migrations.AlterField(
            model_name="article",
            name="hashtags",
            field=models.ManyToManyField(blank=True, to="portfolio.hashtag"),
        ),
    ]
