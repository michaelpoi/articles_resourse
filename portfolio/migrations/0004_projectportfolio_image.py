# Generated by Django 4.2.2 on 2023-08-15 10:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("portfolio", "0003_alter_projectportfolio_hashtags"),
    ]

    operations = [
        migrations.AddField(
            model_name="projectportfolio",
            name="image",
            field=models.ImageField(blank=True, upload_to="images/"),
        ),
    ]
