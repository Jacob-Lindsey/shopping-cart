import React, { useEffect } from "react";
import styled from "styled-components";

const AddToCartButton = ({ items, addCartItem }) => {

  const handleClick = () => {
    addCartItem(items);
    // addToCart(props.data);
  }

  useEffect(() => {

  });

  return (
      <ButtonWrapper onClick={handleClick}>ADD TO CART</ButtonWrapper>
  );
};

export default AddToCartButton

const ButtonWrapper = styled.button`
    background-color: lightgray;
    cursor: pointer;
    font-size: 1.0rem;
    font-weight: 200;
    height: 3rem;
    transition: all 0.2s ease;
    width: 9rem;
    &:hover {
      background-color: #a1cf82;
    }
`;