import { useState, useContext } from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { Button, Container, Form, FormLabel } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const Login = () =>{
    const { user, setUser } = useContext(UserContext);
    const[username,setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();


    try {
        const response = await axios.post('http://localhost3030/login', {
                username,
                password
            });
        if (!response.data.isAuth) {
            setUser(response.data.user);
            return alert(response.data.message)
        } else {
            console.error(response.data.error);
        }
    } catch (error) {
        console.error(error);
    }        
    }

    return(
        <>
        <Header/>
        <Container fluid>
        <Form onSubmit={{handleLogin}}>
            <Form.Group controlId="formBasicEmail">
                <FormLabel>Correo</FormLabel>
                <br></br>
                <input type='email' required name='username' value={username} onChange={(e) => setUsername(e.target.value)}/> 
            </Form.Group>
            
            <Form.Group controlId="formBasicPassword">
                <FormLabel>Contraseña</FormLabel>
                <br></br>
                <input className="mb-3" type='password' required name='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            </Form.Group>
            <Button type="submit">Iniciar Sesion</Button>
        </Form>
        <Link to="/register" className="link-secondary link-underline-opacity-0 link-underline-opacity-100-hover">¿No tienes una cuenta? Registrate</Link>
        </Container>
        <Footer />
        </>
        

    )
}
