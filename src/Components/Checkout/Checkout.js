import React, { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import { CartContext } from "../Context/CartContext";
import ProductList from "./ProductList"


function Brief (){
    const {productList} = useContext(CartContext)
    console.log(productList)
    return (
        <Container>
            {productList.map(prod=>
            <Row>
                <ProductList item={prod} /> 
            </Row>
            )
            }
            <p>gracias por tu compra♥</p>
        </Container>
    )
}

export default Brief 