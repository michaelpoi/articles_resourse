from django.db import models


class Service(models.Model):
    service_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)

    class Meta:
        db_table = 'services'


class Request(models.Model):
    name = models.CharField(max_length=20)
    email = models.EmailField()
    service = models.ForeignKey(Service, on_delete=models.CASCADE)

    class Meta:
        db_table = 'requests'

# Create your models here.
