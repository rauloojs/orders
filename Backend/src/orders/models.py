from django.db import models
from django.conf import settings
from django.contrib.postgres.fields import JSONField
from phonenumber_field.modelfields import PhoneNumberField


class Order(models.Model):
    """
    Orders model
    - Added created_by and created_at fields to identify creation status
    - Used PhoneNumberField for client_phone to enhance validation
    - Order is supposed to be an array of order items. This way is easier to add, remove and edit elements
    """

    created_by = models.ForeignKey(
        settings.AUTH_USER_MODEL, null=True, blank=True, on_delete=models.SET_NULL)
    created_at = models.DateTimeField(
        auto_now_add=True, null=False)
    client_phone = PhoneNumberField()
    client_address = models.CharField(max_length=300)
    client_name = models.CharField(max_length=255)
    order = models.CharField(max_length=500)
