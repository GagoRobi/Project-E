import {Button, Form, FormText} from "react-bootstrap";
import {useState} from "react";

export default function RegisterPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailConfirm, setEmailConfirm] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [validEmail, setValidEmail] = useState(true);
    const [validPassword, setValidPassword] = useState(true);
    const [inputType, setInputType] = useState("password");

    function confirmPasswordMatch() {
        return password === passwordConfirm;
    }

    function confirmEmailMatch() {
        return email === emailConfirm;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        console.log(form.checkValidity());
        if (form.checkValidity()) {
            if (!confirmEmailMatch()) {
                setValidEmail(false);
            } else {
                setValidEmail(true);
            }
            if (!confirmPasswordMatch()) {
                setValidPassword(false);
            } else {
                setValidPassword(true);
            }
            if(validPassword && validEmail){
                //fetch()
                //TODO
            }
        }
    };

    return (
        <div className="p-2 mb-1 rounded-2" style={{backgroundColor: 'rgba(255, 255, 255, 0.8)'}}><Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control required type="email"
                              placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
                {!validEmail && <FormText className="text-danger">not matching email</FormText>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control required type="email"
                              placeholder="Confirm email" onChange={(e) => setEmailConfirm(e.target.value)}/>
                {!validEmail && <FormText className="text-danger">not matching email</FormText>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control required type={inputType} placeholder="Password"
                              onChange={(e) => setPassword(e.target.value)}/>
                {!validPassword && <FormText className="text-danger">not matching password</FormText>}

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control required type={inputType} placeholder="Confirm Password"
                              onChange={(e) => setPasswordConfirm(e.target.value)}/>
                {!validPassword && <FormText className="text-danger">not matching password</FormText>}
            </Form.Group>
            <Form.Group className="p-1">
                <Form.Label>Show Password</Form.Label>
                <Form.Check onChange={(e) => {
                    if (e.target.checked) {
                        setInputType("text");
                    } else {
                        setInputType("password");
                    }
                }}>

                </Form.Check>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form></div>
    )
}
