import {Button, Form} from "react-bootstrap";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(()=>{

    },[])

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("/api/v1/auth/authenticate", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({email, password})
        }).then(res=>res.json()).then(data=> sessionStorage.setItem("token",data.token))

    }

    return (
        <><Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" onChange={(e)=> setEmail(e.target.value) } placeholder="Enter email"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value) } />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form></>
    )
}
