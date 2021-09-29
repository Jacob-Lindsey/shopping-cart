import React from "react";
import { Link, Route, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import ProductCard from "./ProductCard";
import { guitarProductData } from "./GuitarProductData";

const Products = ({ match }) => {

  const { url } = useRouteMatch();

  const linkList = guitarProductData.map((product) => {
    return (
      <ListItem key={product.id}>
        <Link to={`${url}/${product.id}`}>{product.name}</Link>
      </ListItem>
    );
  });

  return (
    <Wrapper>
      <ProductLink>
        <ListTitle>GUITARS</ListTitle>
        {linkList}
      </ProductLink>

      <ProductWrapper>
        <Route path={`${url}/:productId`}>
          <ProductCard data={guitarProductData} />
        </Route>
        <Route exact path={url}></Route>
      </ProductWrapper>
    </Wrapper>
    

  );
};

export default Products;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ProductWrapper = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
  margin-left: 2rem;
  padding: 1rem 0.5rem 0 0.5rem;
  width: 70%;
`;

const ProductLink = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 4rem repeat(auto-fit, 1fr);
  padding: 1rem 0.5rem 0 0.5rem;
  width: 20%;
`;

const ListTitle = styled.div`
  border-bottom: 1px solid #e3e3e377;
  font-size: 1.8rem;
  line-height: 3rem;
  margin: 0 auto;
  margin-bottom: 1rem;
  padding-bottom: 0.2rem;
  text-align: center;
  width: 100%;
`;

const ListItem = styled.div`
  line-height: 3.5rem;
  text-indent: 1rem;
  transition: all 0.2s ease;
  vertical-align: center;
  &:hover {
    background-color: #1d4168;
  }
`;