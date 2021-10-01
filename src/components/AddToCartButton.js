import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import Store from "../Store";

const AddToCartButton = (props) => {

  const handleClick = () => {
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
    font-size: 1.4rem;
    font-weight: 200;
    height: 4rem;
    transition: all 0.2s ease;
    width: 12rem;
    &:hover {
      background-color: #a1cf82;
    }
`;