
from rest_framework import serializers
from .models import Order


class OrderSerializer(serializers.ModelSerializer):
    """
    Serializer for Order model
    """
    class Meta:
        model = Order
        fields = ('id', 'created_by', 'created_at', 'client_phone',
                  'client_address', 'client_name', 'order')
