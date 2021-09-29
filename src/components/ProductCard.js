import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const ProductCard = ({ data }) => {
    const { productId } = useParams();
    const product = data.find(p => p.id === Number(productId));
    let productData;

    if (product) {
        productData = (
            <CardWrapper>
                <ProductImageWrapper>
                   <ProducImage src={product.url} /> 
                </ProductImageWrapper>
                <ProductDetailsWrapper>
                    <ProductTitle>{product.name}</ProductTitle>
                    <ProductDescription>{product.description}</ProductDescription>
                    <ProductStatus>{product.status}</ProductStatus>
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

const ProducImage = styled.img`
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
    letter-spacing: 0.02rem;
    word-spacing: 0.06rem;
`;

const ProductStatus = styled.h4`
    font-size: 1.6rem;
`;