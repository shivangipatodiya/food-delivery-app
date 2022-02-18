import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./login.scss";
import { useState } from "react";
import apiHelpers from "../helpers/apiHelpers";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    console.log("Email++++++", email);
    try {
      const response = await apiHelpers.askReset(email);
      console.log("FOPA",response.message);
      setMessage(response.message)
      setError("")
    } catch (e) {
      console.log("ERREOR LOGIN", e.response.data.error);
      setError(e.response.data.error);
      setMessage("");
    }
  };
  return (
    <div>
      <div className="auth">
        <Card>
          <Card.Body>
          {message && <Alert variant="info">{message}</Alert>}
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
              disabled={!!message}
            >
              Submit
            </Button>
            <div className="align-center">
            <Button variant="link" className="p-0" onClick={() => navigate("/login")}>
                  Login
                </Button>
                </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
