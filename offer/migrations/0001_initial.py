# Generated by Django 4.2.2 on 2023-08-14 15:24

import ckeditor.fields
from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Offer",
            fields=[
                (
                    "offer_id",
                    models.UUIDField(
                        default=uuid.uuid4,
                        editable=False,
                        primary_key=True,
                        serialize=False,
                    ),
                ),
                ("title", models.CharField(max_length=255)),
                ("intro", ckeditor.fields.RichTextField()),
                ("text_field_1", models.CharField(max_length=255)),
                ("text_field_2", models.CharField(max_length=255)),
                ("text_field_3", models.CharField(max_length=255)),
                ("duration", models.CharField(max_length=63)),
                ("footer", ckeditor.fields.RichTextField()),
            ],
            options={
                "db_table": "offers",
            },
        ),
    ]