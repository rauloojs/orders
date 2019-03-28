let ordersSocket;

// Events names
const ORDER_CREATED = 'order.created';
const AUTH_CONNECTED = 'auth.connected';
const AUTH_TOKEN = 'auth.token';

// Authenticate connection using current token
const emitAuthToken = () => {
  // TODO: Get token from localstorage
  ordersSocket.send(
    JSON.stringify({
      type: AUTH_TOKEN,
      token: '69d9167010a16a847831041ffe70b6289135c798'
    })
  );
};

const closeSocket = () => {
  ordersSocket.close();
};
/*
  Subscribe to onmessage method
  Pass in a handlers object, and bind them using event names
*/
const subscribeToOnMessage = handlers => {
  // Connect to websocket using current host
  ordersSocket = new WebSocket(`ws://${window.location.host}/ws/`);

  ordersSocket.onclose = () => {
    ordersSocket.close();
    console.log('Socket closed');
  };

  ordersSocket.onopen = () => {
    console.log('Socket opened');
  };
  ordersSocket.onmessage = e => {
    const data = JSON.parse(e.data);

    switch (data.type) {
      case AUTH_CONNECTED:
        /*
          Authentication happens in 2 steps.
          First: connect to Consumer.
          Second: send current auth token.
          It fails and disconnects if token is invalid
        */
        emitAuthToken();
        break;
      case ORDER_CREATED:
        // Socket is connected to order creation signal. Handle event passing in new
        // order
        handlers[ORDER_CREATED](data.order);
        break;
      default:
        console.error('Event handler has not been set for:', data.type);
    }
  };
};

export { subscribeToOnMessage, closeSocket, ORDER_CREATED };
