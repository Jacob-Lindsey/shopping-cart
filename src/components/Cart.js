import React from "react";
import styled from "styled-components";
import CartItem from "./CartItem";
import ListLabels from "./ListLabels";

const Cart = ({ deleteCartItem, items, changeCartCounter }) => {

  const cartIsEmpty = items.length === 0 ? true : false;

  if (cartIsEmpty) {
    return (
      <Wrapper>
        <EmptyWrapper>CART IS EMPTY</EmptyWrapper>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <ListLabels />
      <CartWrapper>
        {items.map((item) => {
          return <CartItem
                    key={item.id}
                    {...item}
                    deleteCartItem={deleteCartItem}
                  />;
        })}
      </CartWrapper>
    </Wrapper>
  );
};

export default Cart;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const EmptyWrapper = styled.div`
  line-height: 15rem;
  text-align: center;
`;

const CartWrapper = styled.div`
  display: grid;
  grid-auto-rows: 10rem;
  width: 100%;
`;