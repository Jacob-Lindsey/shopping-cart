import React from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components';
import Home from './components/Home';
import Products from './components/Products';
import Cart from './components/Cart';
import ProductDetail from './components/ProductDetail';

const Routes = ({ items, addCartItem, deleteCartItem }) => {
  return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route
          exact
          path="/producst/:id"
          render={(routeProps) => (
            <ProductDetail
              data={routeProps.match.params.id}
              addCartItem={addCartItem}
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