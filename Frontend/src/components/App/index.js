import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import ReduxToastr from 'react-redux-toastr';

import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

import OrdersPageContainer from '../../containers/OrdersPageContainer';
import CreateOrderPageContainer from '../../containers/CreateOrderPageContainer';
import SignInPageContainer from '../../containers/SignInPageContainer';
import SignOutPageContainer from '../../containers/SignOutPageContainer';
import history from '../../utils/history';

const App = () => (
  <div className="App">
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={OrdersPageContainer} />
        <Route path="/create" exact component={CreateOrderPageContainer} />
        <Route path="/login" exact component={SignInPageContainer} />
        <Route path="/logout" exact component={SignOutPageContainer} />
      </Switch>
    </Router>
    <ReduxToastr
      timeOut={4000}
      newestOnTop={false}
      preventDuplicates
      position="top-right"
      transitionIn="fadeIn"
      transitionOut="fadeOut"
      progressBar
      closeOnToastrClick
    />
  </div>
);

export default App;
