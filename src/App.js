import React, { useState } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import Store from './Store'
import Nav from './components/Nav'
import Home from './components/Home'
import Products from './components/Products'
import Cart from './components/Cart'
import Routes from './Routes'
import { guitarProductData } from './components/GuitarProductData'

function App () {

  const [cartData, setCartData] = useState([]);


  const addCartItem = (newItem) => {
    const alreadyInCart = cartData.map((cItem) => cItem.id).includes(newItem.id);
    if (alreadyInCart) {
      changeQuantity(newItem.id, 1);
    } else {
      setCartData([...cartData, newItem]);
    }
  };

  const deleteCartItem = (id) => setCartData(cartData.filter((item) => item.id !== id));

  const changeQuantity = (id, delta) =>
    setCartData(
      cartData.map(
        (item) => (item.id === id ? { ...item, quantity: item.quantity + delta } : item)
      )
    );
      
  const findItem = (id) => guitarProductData.find((item) => item.id === id);

  const cartItemsQuantity = cartData.reduce((a, c) => a + c.quantity, 0);

  const _store = {
    cartData,
    setCartData,
  }

  return (
    <Store.Provider value={_store}>
      <AppWrapper>
        <Nav />
        <ContentWrapper>
          <Routes
            items={cartData}
            addCartItem={addCartItem}
            deleteCartItem={deleteCartItem}
          />
        </ContentWrapper>
      </AppWrapper>
    </Store.Provider>
  )
}

export default App

const AppWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: 1600px;
`;

const ContentWrapper = styled.div`
  padding-top: 6rem;
  width: 100%;
`;