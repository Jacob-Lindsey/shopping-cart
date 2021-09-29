import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import styled from 'styled-components';
import Store from "./Store";
import Home from './components/Home';
import Products from './components/Products';
import Cart from './components/Cart';

export default function Routes () {
  return (
    <BrowserRouter>
      <div>
        <NavWrapper>
            <NavUL>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/products'>Products</Link>
                </li>
                <li>
                    <Link to='/cart'>Cart</Link>
                </li>
            </NavUL>
        </NavWrapper>

        <Switch>
          <Route exact path='/'><Home /></Route>
          <Route path='/products'><Products /></Route>
          <Route path='/cart'><Cart /></Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
};

const NavWrapper = styled.nav`
    width: 100%;
`;

const NavUL = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;
