import React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import ProductCard from "./ProductCard";
import { guitarProductData } from "./GuitarProductData";
import ProductDetail from "./ProductDetail";

const Products = ({ addCartItem, changeCartCounter }) => {

  const match = useRouteMatch();
  const productList = guitarProductData;
  const productsToRender = productList.map((product) => {
                              return (
                                <ProductLink to={`${match.url}/${product.id}`} key={product.id}>
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
          <Route exact path={match.path}>
            <ListTitle>GUITARS</ListTitle>
            {productsToRender}
          </Route>
          <Route path={`${match.path}/:productId`}>
            <ProductDetail changeCartCounter={changeCartCounter} />
          </Route>
        </Switch>
    </Wrapper>
  );
};

export default Products;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
`;

const ProductLink = styled(Link)`
  display: flex;
  position: relative;
  justify-content: center;
  width: 20%;
`;

const ListTitle = styled.div`
  border-bottom: 1px solid #e3e3e377;
  font-size: 3rem;
  font-weight: 200;
  line-height: 3rem;
  margin-bottom: 1rem;
  padding-bottom: 0.8rem;
  text-align: center;
  width: 100%;
`;