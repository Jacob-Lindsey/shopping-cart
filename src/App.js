import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import Home from './components/Home'
import Products from './components/Products'
import Cart from './components/Cart'

function App () {
  return (
    <AppWrapper>
      <NavWrapper>
        <NavUL>
          <ListItemWrapper>
            <LinkItem to='/'>Home</LinkItem>
          </ListItemWrapper>
          <ListItemWrapper>
            <LinkItem to='/products'>Products</LinkItem>
          </ListItemWrapper>
          <ListItemWrapper>
            <LinkItem to='/cart'>Cart</LinkItem>
          </ListItemWrapper>
        </NavUL>
      </NavWrapper>

      <ContentWrapper>
        <Switch>
          <Route exact path='/'><Home /></Route>
          <Route path='/products'><Products /></Route>
          <Route path='/cart'><Cart /></Route>
        </Switch>
      </ContentWrapper>
    </AppWrapper>
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

const NavWrapper = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const NavUL = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
`;

const ContentWrapper = styled.div`
  padding: 6rem 1rem 0 1rem;
  width: 100%;
`;

const ListItemWrapper = styled.li`
  border-bottom 3px solid transparent;
  line-height: 2rem;
  text-align: center;
  transition: all 0.2s ease;
  width: 15%;
  &:hover {
    border-bottom: 3px solid #29588b;
  }
`;

const LinkItem = styled(Link)`
  font-size: 1.7rem;
  font-weight: 300;
  line-height: 2rem;
`;
