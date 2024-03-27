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
    const [emailTaken, setEmailTaken] = useState(false);
    const [submitPushed, setSubmitPushed] = useState(false);

    function confirmEmailMatch() {
        if (email == emailConfirm) {
            setValidPassword(true);
        } else {
            setValidPassword(false);
        }
    }

    function confirmPasswordMatch() {
        if (password == passwordConfirm) {
            setValidEmail(true);
        } else {
            setValidEmail(false);
        }
    }

    const handleSubmit = (event) => {
        confirmEmailMatch();
        confirmPasswordMatch();
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity()) {
            // if (validPassword && validEmail) { todo
            fetch("api/v1/auth/register", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({email, password})
            }).then(res => res.json())
                .then(data => {
                    if (data.token === "email taken!") {
                        setEmailTaken(true);
                    }
                })
            // }
        }
    };

    return (
        <div className="p-2 mb-1 rounded-2" style={{backgroundColor: 'rgba(255, 255, 255, 0.8)'}}><Form
            onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control required type="email"
                              placeholder="Enter email" onChange={(e) => {
                    setEmail(e.target.value);
                    confirmEmailMatch();
                }}/>
                {submitPushed && <>{emailTaken ?
                    <FormText className="text-danger">This email is already in use!</FormText> : <></>}
                    {!validEmail ? <FormText className="text-danger">not matching email</FormText> : <></>}</>}

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control required type="email"
                              placeholder="Confirm email" onChange={(e) => {
                    setEmailConfirm(e.target.value);
                    confirmEmailMatch();
                }}/>
                {submitPushed && <> {emailTaken ?
                    <FormText className="text-danger">This email is already in use!</FormText> : <></>}
                    {!validEmail ? <FormText className="text-danger">not matching email</FormText> : <></>}</>}

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control required type={inputType} placeholder="Password"
                              onChange={(e) => {
                                  setPassword(e.target.value);
                                  confirmPasswordMatch();
                              }}/>
                {submitPushed && <>{(!validPassword && passwordConfirm.length > 0) ?
                    <FormText className="text-danger">not matching password</FormText> : <></>}</>}


            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control required type={inputType} placeholder="Confirm Password"
                              onChange={(e) => {
                                  setPasswordConfirm(e.target.value);
                                  confirmPasswordMatch();
                              }}/>
                {submitPushed && <>{(!validPassword && passwordConfirm.length > 0) ?
                    <FormText className="text-danger">not matching password</FormText> : <></>}</>}

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
