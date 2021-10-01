import React, { useState } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import Store from './Store'
import Nav from './components/Nav'
import Home from './components/Home'
import Products from './components/Products'
import Cart from './components/Cart'

function App () {

  const [cartData, setCartData] = useState([]);
  const [currentItem, setCurrentItem] = useState([]);
  const _store = {
    cartData,
    currentItem,
    setCartData,
    setCurrentItem,
  }

  return (
    <Store.Provider value={_store}>
      <AppWrapper>
        <Nav />
        <ContentWrapper>
          <Switch>
            <Route exact path='/'><Home /></Route>
            <Route path='/products'><Products /></Route>
            <Route path='/cart'><Cart /></Route>
          </Switch>
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