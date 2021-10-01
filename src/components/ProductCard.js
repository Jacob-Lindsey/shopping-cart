import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import AddToCartButton from "./AddToCartButton";

const ProductCard = ({ data }) => {
    const { productId } = useParams();
    const product = data.find(p => p.id === Number(productId));
    let productData;
    const isAvailable = (product.status === 'Available') ? true : false;

    if (product) {
        productData = (
            <CardWrapper>
                <ProductImageWrapper>
                   <ProductImage src={product.url} /> 
                </ProductImageWrapper>
                <ProductDetailsWrapper>
                    <ProductTitle>{product.name}</ProductTitle>
                    <ProductDescription>{product.description}</ProductDescription>
                    <StatusButtonWrapper>
                        <AddToCartButton data={product} />
                        {isAvailable
                            ? <Available>In Stock</Available>
                            : <OutOfStock>Out of Stock</OutOfStock>
                        }
                    </StatusButtonWrapper>
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
    display: grid;
    grid-template-columns: 0.8fr 1fr;
    grid-template-rows: 1fr;
    width: 100%;
`;

const ProductImageWrapper = styled.div`
    display: flex;
    width: 100%;
`;

const ProductImage = styled.img`
    margin: 0 auto;
    max-height: 510px;
`;

const ProductDetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem 0 0 1rem;
    width: 100%;
`;

const ProductTitle = styled.h1`
    border-bottom: 1px solid #e3e3e3;
    font-size: 2rem;
    font-weight: 200;
    padding-bottom: 8px;
    text-transform: uppercase;
`;

const ProductDescription = styled.p`
    flex-basis: 33%;
    flex-shrink: 0;
    letter-spacing: 0.02rem;
    word-spacing: 0.06rem;
`;

const StatusButtonWrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 95%;
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