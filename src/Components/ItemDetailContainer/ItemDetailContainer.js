import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

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
        <Container>
            <div>
                <img className="p-5" src={product.image} />
            </div>
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <p>{product.price}</p>
                <p>{product.category}</p>
        </Container>
    );
}

export default ItemDetailContainer;