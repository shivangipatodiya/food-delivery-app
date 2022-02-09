import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import FormGroup from "react-bootstrap/esm/FormGroup";
import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: ""
  });
  let passwordRef;
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validated, setValidated] = useState(false);
  const createUser = async () => {
    const user = await axios.post("/register", {...newUser})
    }

  const onSubmit = (e) => {
    e.preventDefault();
    if (newUser.password !== confirmPassword) {
      setValidated(true)
      return;
    }
    if(Object.values(newUser).includes("")){
      setValidated(true)
      return;
    }
    else{
      setValidated(false)
      createUser();
    }   
    console.log("NEW USER", newUser);
  };

  return (
    <div>
      <Card>
        <Card.Body>
          <h2 className="mb-3">Signup</h2>
          <Form noValidate validated={validated} onSubmit={onSubmit}>
            <FormGroup>
              <FloatingLabel
                controlId="floatingInput"
                label="First Name"
                className="mb-3 login-input"
              >
                <Form.Control
                  required
                  type="string"
                  placeholder=""
                  value={newUser.firstName}
                  onChange={(e) =>
                    setNewUser({ ...newUser, firstName: e.target.value })
                  }
                />
              </FloatingLabel>
            </FormGroup>
            <FormGroup>
              <FloatingLabel
                controlId="floatingInput"
                label="Last Name"
                className="mb-3 login-input"
              >
                <Form.Control
                  required
                  type="string"
                  placeholder=""
                  value={newUser.lastName}
                  onChange={(e) =>
                    setNewUser({ ...newUser, lastName: e.target.value })
                  }
                />
              </FloatingLabel>
            </FormGroup>
            <FormGroup>
              <FloatingLabel
                controlId="floatingInput"
                label="Phone Number"
                className="mb-3 login-input"
              >
                <Form.Control
                  required
                  type="tel"
                  placeholder=""
                  value={newUser.phoneNumber}
                  onChange={(e) =>
                    setNewUser({ ...newUser, phoneNumber: e.target.value })
                  }
                />
              </FloatingLabel>
            </FormGroup>
            <FormGroup>
              <FloatingLabel
                controlId="floatingInput"
                label="Email"
                className="mb-3 login-input"
              >
                <Form.Control
                  required
                  type="email"
                  placeholder=""
                  value={newUser.email}
                  onChange={(e) =>
                    setNewUser({ ...newUser, email: e.target.value })
                  }
                />
              </FloatingLabel>
            </FormGroup>
            <FormGroup>
              <FloatingLabel
                className="login-input"
                controlId="floatingPassword"
                label="Password"
              >
                <Form.Control
                  required
                  type="password"
                  placeholder=""
                  ref={passwordRef}
                  value={newUser.password}
                  onChange={(e) =>
                    setNewUser({ ...newUser, password: e.target.value })
                  }
                />
              </FloatingLabel>
            </FormGroup>
            <FormGroup>
              <FloatingLabel
                className="login-input"
                controlId="floatingPassword"
                label="Password"
              >
                <Form.Control
                  required
                  type="password"
                  placeholder=""
                  value={confirmPassword}
                  isInvalid={
                    newUser.password !== confirmPassword
                  }
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {newUser.password !== confirmPassword && <Form.Control.Feedback type="invalid">
                  Password mismatch!
                </Form.Control.Feedback>}
              </FloatingLabel>
            </FormGroup>
            <br />
            <Button
              className="login-input mb-2"
              variant="primary"
              type="submit"
            >
              Signup
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
