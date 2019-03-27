from rest_framework.viewsets import ModelViewSet
from .models import Order
from .serializers import OrderSerializer


class OrderViewSet(ModelViewSet):
    """
    API Endpoint that allows Orders actions
    """

    queryset = Order.objects.all()
    serializer_class = OrderSerializer

    def perform_create(self, serializer):
        """
        Assings created_by field to be current user
        """
        creator = self.request.user if self.request.user.is_authenticated else None
        serializer.save(created_by=creator)
