import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Nav ({ cartSize }) {
  return (
      <NavWrapper>
        <NavUL>
          <ListItemWrapper>
            <LinkItem to='/'>HOME</LinkItem>
          </ListItemWrapper>
          <ListItemWrapper>
            <LinkItem to='/products'>PRODUCTS</LinkItem>
          </ListItemWrapper>
          <ListItemWrapper>
            <LinkItem to='/'>AMPS</LinkItem>
          </ListItemWrapper>
          <ListItemWrapper>
            <LinkItem to='/'>MODELING</LinkItem>
          </ListItemWrapper>
          <ListItemWrapper>
            <LinkItem to='/'>CABS</LinkItem>
          </ListItemWrapper>
          <ListItemWrapper>
            <LinkItem to='/'>ACCESSORIES</LinkItem>
          </ListItemWrapper>
          <ListItemWrapper>
            <LinkItem to='/cart'>CART <span>{cartSize}</span></LinkItem>
          </ListItemWrapper>
        </NavUL>
      </NavWrapper>
  );
};

export default Nav

const NavWrapper = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const NavUL = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: flex-start;
  padding: 0 10px;
  width: 100%;
`;

const ListItemWrapper = styled.li`
  border-bottom 3px solid transparent;
  line-height: 2rem;
  text-align: center;
  transition: all 0.2s ease;
  width: 8%;
  &:last-child {
    margin-left: auto;
  }
  &:hover {
    > a {
      font-size: 1.22rem;
    }
    border-bottom: 3px solid #29588b;
    color: #a5cde6;
  }
  &:last-child:hover {
    > a {
      color: palegreen;
      font-size: 1.3rem;
    }
    > a > span {
      background-color: palegreen;
      height: 24px;
      weight: 24px;
    }
  }
  
`;

const LinkItem = styled(Link)`
  color: forestgreen;
  display: block;
  font-family: 'Fira Sans', sans-serif;
  font-size: 1.2rem;
  font-weight: 300;
  height: 100%;
  line-height: 3rem;
  & > span {
    background-color: #eee;
    border-radius: 50%;
    color: black;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-family: 'Montserrat';
    font-size: 1.2rem;
    font-weight: 800;
    height: 25px;
    margin-bottom: 5px;
    margin-left: 5px;
    width: 25px;
    vertical-align: middle;
  } 
`;