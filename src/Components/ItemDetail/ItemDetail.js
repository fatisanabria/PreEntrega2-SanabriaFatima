import React, { useContext } from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ItemCss from './ItemDetail.module.css'
import { dataBase } from '../firestore';
import { doc, getDoc } from 'firebase/firestore';
import { cartContext } from '../Context/cartContext';

function ItemDetail() {
    const [product, setProduct] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const queryDb = dataBase;
        const queryDoc = doc(queryDb, 'productos', id);
        getDoc(queryDoc)
            .then(res => setProduct({ id: res.id, ...res.data() }))
    }, [id])

    const { addToList, productList } = useContext(cartContext);

    useEffect(() => {
        console.log("itemList has changed:", productList);
    }, [productList]);

    return (
        <Container className={`${ItemCss.carta}`} >
            <h1 className='pt-5'>{product.nombre}</h1>
            <section className='d-flex pt-5'>
                <div className=''>
                    <img src={product.imagen} />
                </div>
                <div className={`${ItemCss.descripcion}`}>
                    <p>{product.descripcion}</p>
                    <p>Precio: ${product.precio}</p>
                    <p>Categoria: {product.categoria}</p>
                    <Button onClick={() => {
                        addToList(product);
                    }} variant='primary'>Añadir a carrito</Button>
                </div>
            </section>
        </Container>
    );
}

export default ItemDetail;