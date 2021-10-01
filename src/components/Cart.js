import React, { useContext } from "react";
import styled from "styled-components";
import Store from "../Store";
import CartItem from "./CartItem";
import ListLabels from "./ListLabels";

const Cart = () => {

  const _store = useContext(Store);

  return (
    <Wrapper>
      <ListLabels />
      <CartWrapper>
        {_store.cartData.map(d => {
          return <CartItem
                    key={d.id}
                    name={d.name}
                    details={d.description}
                    price={d.price}
                    quantity={d.quantity}
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

const CartWrapper = styled.div`
  display: grid;
  grid-auto-rows: 10rem;
  width: 100%;
`;