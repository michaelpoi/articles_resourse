from django.db import models
from offer.models import Offer


class WebManager(models.Model):
    order_number = models.CharField(max_length=10)
    clients = models.CharField(max_length=10)
    experience = models.CharField(max_length=10)
    first_offer = models.ForeignKey(Offer, on_delete=models.DO_NOTHING,related_name="first_offer")
    second_offer = models.ForeignKey(Offer, on_delete=models.DO_NOTHING,related_name="second_offer")
    third_offer = models.ForeignKey(Offer, on_delete=models.DO_NOTHING, related_name="third_offer")

    class Meta:
        db_table = "manager_settings"

# Create your models here.
