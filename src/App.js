import React, { useState } from 'react'
import styled from 'styled-components'
import Store from './Store'
import Nav from './components/Nav'
import Routes from './Routes'

function App () {

  const [cartData, setCartData] = useState([]);
  const [cartCounter, setCartCounter] = useState(0);

  const addCartItem = (newItem) => {
    const alreadyInCart = cartData.map((cItem) => cItem.id).includes(newItem.id);
    if (alreadyInCart) {
      changeQuantity(newItem.id, 1);
    } else {
      setCartData([...cartData, newItem]);
    }
  };

  const deleteCartItem = (id, quantity) => {
    const itemIndex = cartData.findIndex((i) => i.id === id);
    changeCartCounter(0);
    if (quantity === 1) {
      removeItemFromCart(id);
    } else {
      if (itemIndex > -1) {
        const newCart = cartData.slice();
        newCart[itemIndex].quantity--;
        setCartData(newCart);
      } else {
        console.error(
          "Item doesn't exist in the cart."
        );
      }
    } 
  }

  const changeCartCounter = (op) => {
   op === 1 ?  setCartCounter(prev => prev + 1) : setCartCounter(prev => prev - 1);
  }
  
  const removeItemFromCart = (id) => setCartData(cartData.filter((item) => item.id !== id));

  const changeQuantity = (id, delta) =>
    setCartData(
      cartData.map(
        (item) => (item.id === id ? { ...item, quantity: item.quantity + delta } : item)
      )
    );
      
  // const findItem = (id) => guitarProductData.find((item) => item.id === id);

  // const cartItemsQuantity = cartData.reduce((a, c) => a + c.quantity, 0);

  const _store = {
    cartCounter,
    cartData,
    setCartCounter,
    setCartData,
  }

  return (
    <Store.Provider value={_store}>
      <AppWrapper>
        <Nav cartSize={cartCounter} />
        <ContentWrapper>
          <Routes
            items={cartData}
            addCartItem={addCartItem}
            changeCartCounter={changeCartCounter}
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
  dislay: flex;
  justify-content: center;
  padding-top: 6rem;
  width: 100%;
`;