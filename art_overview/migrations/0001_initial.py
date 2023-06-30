# Generated by Django 4.2.2 on 2023-06-26 14:30

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Article",
            fields=[
                (
                    "article_id",
                    models.UUIDField(
                        default=uuid.uuid4,
                        editable=False,
                        primary_key=True,
                        serialize=False,
                    ),
                ),
                ("title", models.CharField(max_length=255)),
                ("text", models.TextField()),
                ("pub_date", models.DateTimeField(auto_now=True)),
                ("likes", models.IntegerField(default=0)),
                ("images", models.ImageField(upload_to="images/")),
            ],
            options={
                "db_table": "articles",
            },
        ),
    ]