import React, { useEffect } from "react";
import styled from "styled-components";

const AddToCartButton = ({ item, addCartItem, changeCartCounter }) => {

  const handleClick = () => {
    addCartItem(item);
    changeCartCounter(1);
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
    background-color: #718a33;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 1.1rem;
    font-weight: 700;
    height: 5rem;
    letter-spacing: 5.6px;
    padding: 0.5rem;
    transition: all 0.2s ease;
    width: 20rem;
    &:hover {
      background-color: #a1cf82;
    }
`;