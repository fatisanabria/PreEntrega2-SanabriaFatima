import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ItemListContainer({ greeting }) {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const promesa = new Promise((resolve) => {
      setTimeout(() => {
        if(id===undefined){resolve(fetch("https://fakestoreapi.com/products"))}
        else{
            resolve (fetch(`https://fakestoreapi.com/products/category/${id}`))
        }
        ;
      }, 300);
    });
    promesa.then((resolve) => resolve.json()).then((data) => {
      setProduct(data);
      console.log(data);
    });
  }, [id]);

  return (
    <Container style={{ backgroundColor: "#fff6f6", padding: "20px", textAlign: "center" }}>
      <Row>
      {product.map((item) => (
        <Col key={item.id}>
          <Link to={"/producto/" + item.id} className="text-decoration-none">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>
                    Precio: ${item.price}
                  </Card.Text>
                  <Button variant="primary">Añadir a carrito</Button>
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