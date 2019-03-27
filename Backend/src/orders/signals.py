import channels.layers
from asgiref.sync import async_to_sync
from django.dispatch import receiver
from django.db.models.signals import post_save
from django.forms.models import model_to_dict
from .models import Order
from .serializers import OrderSerializer

# Post save signal for Order model
@receiver(post_save, sender=Order)
def order_created(sender, instance, created, **kwargs):
    """
    Sends message to orders group only when a new instance of Order is created
    """
    if created:
        # Get channel layer
        channel_layer = channels.layers.get_channel_layer()

        # Use serializer class to get instance as dict. Then it will be converted to JSON
        serializer = OrderSerializer(instance)

        # Make group_send synchronous
        # Send serialized order instance
        async_to_sync(channel_layer.group_send)(
            'orders',
            {
                'type': 'order.created',
                'order': serializer.data,
            }
        )
