import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { dataBase } from '../firestore';
import { where, collection, query, getDocs } from 'firebase/firestore';

const ItemListContainer = () => {
    const [item, setItem] = useState([])
    const { id } = useParams();

    useEffect(() => {
        const queryDb = dataBase
        const queryCollection = collection(queryDb, 'productos');
        if (id) {
            const queryFilter = query(queryCollection, where('categoria', '==', id))
            getDocs(queryFilter)
                .then(res => setItem(res.docs.map(p => ({ id: p.id, ...p.data() }))))
                console.log(item)
        } else {
            getDocs(queryCollection)
                .then(res => setItem(res.docs.map(p => ({ id: p.id, ...p.data() }))))
                console.log(item)
        }
    }, [id]);


    return (
        <Container>
            <Row>
                {item.map((item) => (
                    <Col lg='3' key={item.id} className='pt-5'>
                        <Link to={'/producto/' + item.id} className='text-decoration-none text-dark'>
                            <Card>
                                <Card.Img variant='top' src={item.imagen} />
                                <Card.Body>
                                    <Card.Title>{item.nombre}</Card.Title>
                                    <Card.Text>
                                        Precio: ${item.precio}
                                    </Card.Text>
                                    <Button variant='primary'>Añadir a carrito</Button>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default ItemListContainer;