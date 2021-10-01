import React from "react";
import styled from "styled-components";

const ListLabels = () => {

  return (
    <ListLabelsWrapper>
        <LabelText>CART</LabelText>
        <LabelText>ITEM</LabelText>
        <LabelText>PRICE</LabelText>
        <LabelText>QUANTITY</LabelText>
        <LabelText />
        <LabelText>TOTAL</LabelText>
    </ListLabelsWrapper>
  );
};

export default ListLabels;

const ListLabelsWrapper = styled.div`
    display: grid;
    gap: 2px;
    grid-template-columns: 1fr 30% 0.5fr 0.5fr 1fr 0.5fr;
    width: 100%;
`;

const LabelText = styled.span`
    font-size: 1.1rem;
    font-weight: 300;
    line-height: 4rem;
    &:first-child {
        padding-left: 1rem;
    }
    &:nth-child(3) {
        text-indent: 0.3rem;
    }
    &:nth-child(4) {
        text-indent: 0.1rem;
    }
    &:last-child {
        padding-right: 1rem;
        text-align: right;
    }
`;