# Generated by Django 4.2.2 on 2023-08-15 10:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("portfolio", "0004_projectportfolio_image"),
    ]

    operations = [
        migrations.AlterField(
            model_name="projectportfolio",
            name="image",
            field=models.ImageField(upload_to="images/"),
        ),
    ]
