import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import ItemCss from './ItemDetail.module.css'

function ItemDetailContainer() {
    const [product, setProduct] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(fetch(`https://fakestoreapi.com/products/${id}`))
            }, 300);
        });
        promesa.then((resolve) => resolve.json()).then((data) => {
            setProduct(data);
            console.log(data);
        });
    }, [id]);

    return (
        <Container className={`${ItemCss.carta}`} >
            <h1 className="pt-5">{product.title}</h1>
            <section className="d-flex pt-5">
                <div className="">
                    <img src={product.image} />
                </div>
                <div className={`${ItemCss.informacion}`}>
                    <p>{product.description}</p>
                    <p>Precio: ${product.price}</p>
                    <p>Categoria: {product.category}</p>
                    <Button variant="primary">Añadir a carrito</Button>
                </div>
            </section>
        </Container>
    );
}

export default ItemDetailContainer;