import React from "react";
import styled from "styled-components";

const CartItem = ({ id, name, url, details, quantity, price, deleteCartItem }) => {

  let totalRaw = (price * quantity);
  let total = totalRaw.toFixed(2);
  const handleDelete = () => deleteCartItem(id, quantity);

  return (
    <CartItemWrapper>
        <ImageWrapper>
          <Image src={url} />
        </ImageWrapper>
        <div>
          <Name>{name}</Name>
          <Details>{details}</Details>
        </div>
        <Price>${price}</Price>
        <Quantity>{quantity}</Quantity>
        <EditQuantity onClick={handleDelete}>REMOVE</EditQuantity>
        <ItemDetail />
        <Total>{total}</Total>
    </CartItemWrapper>    
  );
};

export default CartItem;

const CartItemWrapper = styled.div`
  background-image: linear-gradient(150deg, rgba(11, 11, 14, 0.7), rgba(5, 10, 15, 0.7));
  background-position-x: 50%;
  background-position-y: 50%;
  border-bottom: 1px solid #999;
  box-shadow: -5px 0px 0px 0px #777;
  display: grid;
  gap: 20px;
  grid-template-columns: minmax(0, 1fr) minmax(0, 30%) minmax(0, 0.5fr) minmax(0, 0.5fr) minmax(0, 0.5fr) minmax(0, 0.5fr) minmax(0, 1fr);
  grid-template-rows: 160px;
  overflow: hidden;
  padding: 0.2rem 0.5rem 0 0.5rem;
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

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Image = styled.img`
  object-fit: contain;
  transform: rotate(0deg);
  width: 50%;
  height: 100%;
`;

const Name = styled.div`
  font-family: 'Oswald';
  font-size: 1.8rem;
  padding-top: 1.8rem;
`;

const Details = styled.div`
  position: relative;
  font-size: 0.95rem;
  font-weight: 300;
  max-height: 50%;
  max-width: 90%;
  overflow: hidden;
  padding-top: 2rem;
  &::after {
    content: "";
    text-align: right;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 1.2em;
  }
`;

const Price = styled.div`
  font-size: 1.5rem;
  font-weight: 300;
  padding-top: 2rem;
`;

const Quantity = styled.div`
  display: inline-block;
  font-size: 1.5rem;
  text-indent: 45%;
  text-overflow: ellipsis;
  padding-top: 2rem;
  white-space: nowrap;
`;

const EditQuantity = styled.div`
  color: lightgrey;
  cursor: pointer;
  font-size: 1.1rem;
  margin-top: 1.7rem;
  padding-top: 0.5rem;
  text-indent: 1%;
  height: 1.3rem;
  &:hover {
    color: #dd4848;
  }
`;

const Total = styled.div`
  font-size: 1.8rem;
  font-weight: 300;
  padding-top: 1.5rem;
  text-indent: 50%;
`;