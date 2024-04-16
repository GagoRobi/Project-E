import {Button, ButtonGroup, Form} from "react-bootstrap";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import GoogleLoginButton from "../components/GoogleLoginButton.jsx";
import GoogleLogoutButton from "../components/GoogleLogoutButton.jsx";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch("https://project-e-service.onrender.com/api/v1/auth/authenticate", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({email, password})
        });
        const data = await response.json();
        sessionStorage.setItem("token", data.token);
        if (response.status === 200) {
            navigate('/');
        }
    }

    return (
        <div className="p-2 mb-1 rounded-2" style={{backgroundColor: 'rgba(255, 255, 255, 0.8)'}}>



            <Form
                onSubmit={handleSubmit}>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter email"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

            {/*<ButtonGroup >*/}
            {/*    <GoogleLoginButton />*/}
            {/*    <GoogleLogoutButton/>*/}
            {/*</ButtonGroup>*/}
        </div>
    )
}
