import { Button, Container, Form, FormLabel } from "react-bootstrap";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import { useState, useContext } from "react";
import {Link, useNavigate} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Register() {
    const { user, setUser } = useContext(UserContext);
    const[username,setUsername] = useState("");
    const[password,setPassword] = useState("");
    const navigate = useNavigate();
    const handleRegister = async (event) =>{
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost3030/register', {
                username,
                password
            });
            if (!response.data.isAuth) {
                setUser(response.data.user);
                alert(response.data.message);
                return navigate('/');
            }
            
        } catch (error) {
            console.error(error);
        }
    }
    
    return(
        <>
            <Header/>
            <Container fluid>
                <Form onSubmit={handleRegister}>
                <Form.Group controlId="formBasicEmail">
                <FormLabel className="mb-3 justify-content-md-center">Correo</FormLabel>
                <br></br>
                <input className="mb-3 justify-content-md-center" type='email' required name='username' value={username} onChange={(e) => setUsername(e.target.value)}/> 
                </Form.Group>
            
                <Form.Group controlId="formBasicPassword">
                <FormLabel className="mb-3 justify-content-md-center">Contraseña</FormLabel>
                <br></br>
                <input className="mb-3 justify-content-md-center" type='password' required name='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                </Form.Group>
                <Button type="submit">Registrarse</Button>
                </Form>
            </Container>     
            <Footer/>   
        </>
    )

}
export default Register;