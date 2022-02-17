import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./login.scss";
import { useState } from "react";
import apiHelpers from "../helpers/apiHelpers";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");


  const handleSubmit = async () => {
    console.log("Email++++++", email);
    try {
      const response = await apiHelpers.resetPassword(email);
      console.log("FOPA",response)
    } catch (e) {
      console.log("ERREOR LOGIN", e.response.data.error);
      setError(e.response.data.error);
    }
  };
  return (
    <div>
      <div className="login">
        <Card>
          <Card.Body>
            {error && <Alert variant="danger">{error}</Alert>}
            <h2 className="mb-3">Reset Password</h2>
            <FloatingLabel
              controlId="floatingInput"
              label="Enter your email Id"
              className="mb-3 login-input"
            >
              <Form.Control
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FloatingLabel>

            <br />
            <Button
              className="login-input mb-2"
              variant="primary"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
