import React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import ProductCard from "./ProductCard";
import { guitarProductData } from "./GuitarProductData";
import Routes from "../Routes";
import ProductDetail from "./ProductDetail";

const Products = ({ match, addCartItem }) => {

  const { path, url } = useRouteMatch();
  const productList = guitarProductData;
  const productsToRender = productList.map((product) => {
                              return (
                                <ProductLink to={`${url}/${product.id}`} key={product.id}>
                                    <ProductCard
                                      item={product}
                                      addCartItem={addCartItem}
                                    />
                                </ProductLink>
                              );
                            })

  return (
    <Wrapper>
        <Switch>
          <Route exact path={path}>
            <ListTitle>GUITARS</ListTitle>
            {productsToRender}
          </Route>
          <Route path={`${path}/:productId`}>
            <ProductDetail />
          </Route>
        </Switch>
    </Wrapper>
  );
};

export default Products;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ProductLink = styled(Link)`
  display: flex;
  position: relative;
  justify-content: center;
  width: 25%;
`;

const ListTitle = styled.div`
  border-bottom: 1px solid #e3e3e377;
  font-size: 1.8rem;
  line-height: 3rem;
  margin-bottom: 1rem;
  padding-bottom: 0.2rem;
  text-align: center;
  width: 100%;
`;