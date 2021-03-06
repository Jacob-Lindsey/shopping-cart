import React from "react";
import styled from "styled-components";

const ProductCard = ({ item, img }) => {
    
    const product = item;
    let productData;

    if (product) {
        productData = (
            <CardWrapper>
                <ProductImageWrapper>
                    <ProductImage src={product.url} /> 
                </ProductImageWrapper>
                <ProductDetailsWrapper>
                    <ProductTitle>{product.name}</ProductTitle>
                    <h3>{product.color}</h3>
                    <h4>{product.price}</h4>
                </ProductDetailsWrapper>              
            </CardWrapper>

        );
    } else {
        productData = <h2> Sorry. Product doesn't exist. </h2>
    }

    return productData;
};

const CardWrapper = styled.div`
    align-items: center;
    background-image: linear-gradient(45deg, rgba(17, 19, 19, 0.9), rgba(35, 38, 40, 0.6));
    background-position-x: 50%;
    background-position-y: 50%;
    display: flex;
    flex: 0 1 350px;
    flex-direction: column;
    height: 100%;
    margin: 5px 5px 10px;
    padding-bottom: 10px; 
    position: relative;
    z-index: 1;
    &:before {
        background: url("https://strandbergguitars.com/cdn-cgi/image/onerror=redirect,quality=85,format=auto,metadata=copyright,width=380,height=720,fit=cover/wp-content/uploads/2021/09/nx-nature-bg-classic.jpg") center center;
        content: "";
        margin: 0 auto;
        opacity: 0;
        outline: 1px solid transparent;
        outline-offset: -10px;
        position: absolute;
        transition: all 0.25s ease-in;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: -1;            
    }
    &:hover:before {
        opacity: 0.5;
        outline: 1px solid #a58769;
        outline-offset: -15px;
    }
`;

const ProductImageWrapper = styled.div`
    margin-top: 20px;
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
    width: 90%;
    & > h3 {
        font-family: "Oswald", sans-serif;
        font-weight: 300;
        margin-bottom: 0;
        margin-top: 5px;
    }
    & > h4 {
        font-family: "Oswald", sans-serif;
        font-size: 1.3rem;
        font-weight: 200;
        margin-bottom: 0;
        margin-top:3px;
    }
`;

const ProductTitle = styled.h1`
    font-family: 'Oswald';
    font-size: 1.5em;
    font-weight: 200;
    margin-bottom: 5px;
    margin-top: 5px;
    text-align: center;
    text-wrap: wrap;
    text-transform: uppercase;
    width: 100%;
`;

export default ProductCard;






