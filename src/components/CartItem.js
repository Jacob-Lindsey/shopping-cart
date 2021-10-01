import React from "react";
import styled from "styled-components";

const CartItem = (props) => {

  let price = parseFloat(props.price);
  let total = (props.price);

  return (
    <CartItemWrapper>
        <Image src='/'></Image>
        <div>
          <Name>{props.name}</Name>
          <Details>{props.details}</Details>
        </div>
        <Price>{price}</Price>
        <Quantity>{props.quantity}</Quantity>
        <ItemDetail />
        <Total>{total}</Total>
    </CartItemWrapper>    
  );
};

export default CartItem;

const CartItemWrapper = styled.div`
  background-color: #21466e;
  border-bottom: 2px solid #476a8f;
  display: grid;
  grid-template-columns: 1fr 30% 0.5fr 0.5fr 0.5fr 1fr;
  padding: 1.5rem 0.5rem 0 0.5rem;
  width: 100%;
  &:first-child {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  &:last-child {
    border-bottom: none;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

const ItemDetail = styled.div``;

const Image = styled.img`

`;

const Name = styled.div`
  font-size: 1.4rem;
`;

const Details = styled.div`
  font-size: 0.95rem;
  font-weight: 300;
`;

const Price = styled.div`
  font-size: 1.4rem;
  font-weight: 300;
`;

const Quantity = styled.div`
  text-indent: 25%;
`;

const Total = styled.div`
  font-size: 1.4rem;
  font-weight: 500;
  text-indent: 65%;
`;