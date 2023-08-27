import { Card, Container } from "react-bootstrap";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";


const CardProduct = ({title,description,image}) => {
    return(
        <Card className="mb-4 shadow-sm">
            <Card.Img variant="top" src={image} />
            <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            </Card.Body>
        </Card>
    )
}

function Home() {
    const {products,setProducts} = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost3030/products').then((response)=>{
            setProducts(response.data);
        });
    }, []);

    return(
    <>
        <Header/>
            <Container>
                {products.map((product,index)=>{
                    <Card key={index} title={product.title} description={product.description} image={product.image} />
                })}
            </Container>
        <Footer/>
    </>
    )
}
export default Home;