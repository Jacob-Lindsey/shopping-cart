import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const ProductCard = ({ item, handleAdd }) => {
    const product = item;
    let productData;
    // const isAvailable = (product.status === 'Available') ? true : false;

    if (product) {
        productData = (
            <CardWrapper>
                <ProductImageWrapper>
                   <ProductImage src={product.url} /> 
                </ProductImageWrapper>
                <ProductDetailsWrapper>
                    <ProductTitle>{product.name}</ProductTitle>
                    <h3>Subtitle</h3>
                    <h4>Price</h4>
                </ProductDetailsWrapper>              
            </CardWrapper>
        );
    } else {
        productData = <h2> Sorry. Product doesn't exist. </h2>
    }

    return productData;
};

export default ProductCard;

const CardWrapper = styled.div`
    align-items: center;
    border: 1px solid transparent;
    display: flex;
    flex: 0 1 300px;
    flex-direction: column;
    margin: 5px 5px 10px;
    padding-bottom: 10px;
    transition: 0.25s ease;
    width: 100%;
    &:hover {
        border: 1px solid #a58769;
      }
`;

const ProductImageWrapper = styled.div`
    height: 30vh;
    width: 250px;
`;

const ProductImage = styled.img`
    margin: 0 auto;
    max-height: 450px;
    width: 250px;
`;

const ProductDetailsWrapper = styled.div`
    align-items: center;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom: 1rem;
    width: 100%;
    & > h3 {
        margin-bottom: 0;
        margin-top: 5px;
    }
    & > h4 {
        margin-bottom: 0;
        margin-top:3px;
    }
`;

const ProductTitle = styled.h1`
    font-size: 1.3rem;
    font-weight: bold;
    margin-bottom: 5px;
    margin-top: 5px;
    text-align: center;
    text-transform: uppercase;
    width: 100%;
`;

const ProductDescription = styled.p`
    flex-basis: 33%;
    flex-shrink: 0;
    letter-spacing: 0.02rem;
    word-spacing: 0.06rem;
`;

const Available = styled.h4`
    color: palegreen;
    font-size: 1.6rem;
    width: 30%;
`;

const OutOfStock = styled.h4`
    color: red;
    font-size: 1.6rem;
    width: 30%;
`;