/*
import { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { login } from "../services/user";
import { UserContext } from "./UserContext";

const Login = ({ setToken, setUser }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { 
        setTokenContext,
        setUserContext
    } = useContext(UserContext)

    const onSubmit = async () => {

        if (email !== '' && password !== '') {
            const data = await login(email, password);

            if (!data) {
                alert('Error de authenticacion');
            } else {
                console.log(data);
                setToken(data.token);
                setUser(data.user); 
                setUserContext(data.user);
            }
        }

    }

    return (
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
            </Form.Group>
            <Button onClick={onSubmit} variant="primary">Login</Button>
        </Form>
    )

}

export default Login;*/