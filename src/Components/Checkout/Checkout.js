import React, { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import { cartContext } from "../Context/cartContext";


function Brief (){
    const {productList} = useContext(cartContext)
    console.log(productList)
    return (
        <Container>
            <Row>
            {/* aca van los items */}
            </Row>
            <p>gracias por tu compra♥</p>
        </Container>
    )
}

export default Brief 