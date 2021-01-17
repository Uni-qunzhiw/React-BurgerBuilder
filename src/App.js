import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Checkout from './containers/Checkout/Checkout';
import {Route, Switch} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div>
        <Layout> 
          <Switch>
            <Route path="/checkout" component={Checkout} />
            {/* with this order and exact, it is not treated as prefix thus loaded multiple times */}
            <Route path="/" exact component={BurgerBuilder} /> 
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
