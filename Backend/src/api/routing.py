from channels.routing import ProtocolTypeRouter, URLRouter
from django.conf.urls import url
from orders.consumers import OrderConsumer

application = ProtocolTypeRouter({

    # Route ws namespace to OrderConsumer, this could be changed in case we need to add more Consumers (nginx config must be updated)
    'websocket': URLRouter([
        url(r'^ws/$', OrderConsumer),
    ]),
})
