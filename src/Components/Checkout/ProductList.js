import React from "react";
import { Col } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Styles from "./ProductList.module.css";


function ProductList({ item }) {
    console.log(item)
    return (
        <>
            <Col className={`text-decoration-none`}>
                <div className={` m-2 mt-5 p-3 `} >
                    <Card.Body>
                        <Card.Title className={`text-center mt-2 align-middle text-dark`}>{item.nombre}</Card.Title>
                    </Card.Body>
                    <Card.Img variant="top" src={item.imagen} className="mt-4" />
                </div>
            </Col>
            <Col>
                <p>cantidad</p>
                <p>{item.stock}</p>
            </Col>
            <Col>
                <p>precio</p>
                <p>{item.precio}</p>
            </Col>
        </>
    )
}

export default ProductList