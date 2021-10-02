import React from "react";
import styled from "styled-components";
import { guitarProductData } from "./GuitarProductData";
import AddToCartButton from "./AddToCartButton";

const ProductDetail = ({ itemId, addCartItem, changeCartCounter }) => {

    const foundItem = guitarProductData.find((i) => i.id === Number(itemId));
    const isInStock = foundItem.status === "In Stock" ? true : false;
  
    return (
        <Container>
            <ImageWrapper>
                <ProductImage src={foundItem.url} />
            </ImageWrapper>
            <InfoWrapper>
                <Details>{foundItem.name}</Details>
                <DetailsSubtitle>{foundItem.color}</DetailsSubtitle>
                <Description>{foundItem.description}</Description>
                <PriceStatusWrapper>
                    <Price>${foundItem.price}</Price>
                    {isInStock ? 
                        <InStock>{foundItem.status}</InStock>
                        : <OutOfStock>{foundItem.status}</OutOfStock>
                    }
                </PriceStatusWrapper>
                <ButtonWrapper>
                    <AddToCartButton
                        addCartItem={addCartItem}
                        item={foundItem}
                        changeCartCounter={changeCartCounter}
                    />
                </ButtonWrapper>
            </InfoWrapper>
        </Container>
    );
};

export default ProductDetail;

const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

const ProductImage = styled.img`
    width: 100%;
`;

const Details = styled.h1`
    font-size: 3rem;
    font-weight: 100;
    margin: 0;
    text-transform: uppercase;
`;

const DetailsSubtitle = styled.h3`
    font-size: 1.8rem;
    font-weight: 200;
    margin: 0;
    margin-top: 1rem;
    text-align: left;
    text-indent: 18%;
    text-transform: uppercase;
    width: 100%;
`;

const Description = styled.p`
    font-size: 0.95rem;
    font-weight: 300; 
    line-height: 2rem;
    margin-top: 4rem;
    width: 90%;
`;

const PriceStatusWrapper = styled.div`
    align-items: end;
    display: flex;
    justify-content: center;
    margin-top: 6rem;
    width: 100%;
`;

const Price = styled.p`
    flex: 0 1 40%;
    font-size 1.6rem;
    font-weight: 300;
    letter-spacing: 1.5px;
    margin: 0;
    margin-left: 1.2rem;
    text-align: left;
    text-indent: 6%;
`;

const InStock = styled.p`
    color: limegreen;
    flex: 0 1 60%;
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 1.6rem;
    margin: 0;
    text-align: center;
    text-transform: uppercase;
`;

const OutOfStock = styled.p`
    color: red;
    flex: 0 1 60%;
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 1.6rem;
    margin: 0;
    text-align: center;
    text-transform: uppercase;
`;

const ButtonWrapper = styled.div`
    flex-direction: column;
    height: 5rem;
    margin-top: 5rem;
    padding-left: 4rem;
    width: 100%;
`;

const ImageWrapper = styled.div`
    flex-basis: 35%;
`;

const InfoWrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    flex-basis: 40%;
    padding: 0.5rem;
`;