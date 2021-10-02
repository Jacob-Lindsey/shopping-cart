import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home';
import Products from './components/Products';
import Cart from './components/Cart';
import ProductDetail from './components/ProductDetail';

const Routes = ({ items, addCartItem, deleteCartItem, changeCartCounter }) => {
  return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route
          exact
          path="/products/:id"
          render={(routeProps) => (
            <ProductDetail
              itemId={routeProps.match.params.id}
              addCartItem={addCartItem}
              changeCartCounter={changeCartCounter}
            />
          )}
        />
        <Route
          exact
          path="/cart"
          render={() => (
            <Cart
              items={items}
              deleteCartItem={deleteCartItem}
            />
          )}
        />
        ;
      </Switch>
  );
};

export default Routes;