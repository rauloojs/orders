from channels.generic.websocket import AsyncJsonWebsocketConsumer
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import AnonymousUser

AUTH_CONNECTED = 'auth.connected'
AUTH_TOKEN = 'auth.token'


class OrderConsumer(AsyncJsonWebsocketConsumer):
    groups = ['orders']

    async def connect(self):
        """
        Authentication happens in 2 steps
        First: accept connection
        Second: send auth.connected event and await for token
        It fails and disconnects if token is invalid
        """
        await self.accept()
        await self.send_json({
            'type': AUTH_CONNECTED,
        })

    async def receive_json(self, content):
        """
        Receives content as dict
        Expect 'type' to be event name
        Rest data comes along in content dict
        """
        if content['type'] == AUTH_TOKEN:
            self.authenticate(content['token'])

    async def authenticate(self, token):
        """
        Tests given token against rest_framework.authtoken
        Success: sets current user
        Fail: disconnect socket
        """
        try:
            token_result = Token.objects.get(key=token)
            self.user = token_result.user
        except Token.DoesNotExist:
            self.disconnect()

    async def order_created(self, message):
        """
        Send order when a group message is received from channel
        """
        await self.send_json(message)
