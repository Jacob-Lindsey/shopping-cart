import React from "react";
import styled from "styled-components";

const CartItem = ({ id, name, url, details, quantity, price, deleteCartItem }) => {

  let total = (price * quantity);
  const handleDelete = () => deleteCartItem(id, quantity);

  return (
    <CartItemWrapper>
        <Image src='/'></Image>
        <div>
          <Name>{name}</Name>
          <Details>{details}</Details>
        </div>
        <Price>{price}</Price>
        <Quantity>{quantity}</Quantity>
        <EditQuantity onClick={handleDelete}>X</EditQuantity>
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
  grid-template-columns: 1fr 30% 0.5fr 0.5fr 0.5fr 0.5fr 1fr;
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
  position: relative;
  font-size: 0.95rem;
  font-weight: 300;
  max-height: 50%;
  max-width: 90%;
  overflow: hidden;
  &::after {
    content: "";
    text-align: right;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 1.2em;
    background: linear-gradient(to bottom, rgba(33, 70, 110, 0), rgba(33, 70, 110, 1) 100%);
  }
`;

const Price = styled.div`
  font-size: 1.4rem;
  font-weight: 300;
`;

const Quantity = styled.div`
  display: inline-block;
  text-indent: 45%;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const EditQuantity = styled.div`
  color: red;
  cursor: pointer;
  font-size: 2rem;
  text-indent: 40%;
`;

const Total = styled.div`
  font-size: 1.4rem;
  font-weight: 500;
  text-indent: 65%;
`;