import React from "react";
import styled from "styled-components";
import { guitarProductData } from "./GuitarProductData";
import AddToCartButton from "./AddToCartButton";

const ProductDetail = ({ items, addCartItem }) => {

    const item = guitarProductData.find((i) => i.id === items.id);
    let itemImg = item.url;
    
    return (
        <Container>
            <h1>PRODUCT {item.name}</h1>
            <ProductImage src={itemImg} />
            <ProductDetails>{item.name}</ProductDetails>
            <ButtonWrapper>
                <AddToCartButton
                    addCartItem={addCartItem}
                    data={items}
                />
            </ButtonWrapper>
        </Container>
    );
};

export default ProductDetail;

const Container = styled.div`
    width: 100%;
`;

const ProductImage = styled.img`
`;

const ProductDetails = styled.h1`
`;

const ButtonWrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 5rem;
    justify-content: flex-end;
    width: 95%;
`;