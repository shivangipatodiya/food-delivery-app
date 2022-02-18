import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
import FormGroup from "react-bootstrap/esm/FormGroup";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import apiHelpers from "../helpers/apiHelpers";
import "./login.scss";

export default function ResetPassword() {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  let passwordRef;
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState(false);

  const onSubmit = async (e) => {
    console.log(password);
    e.preventDefault();
    if (password !== confirmPassword) {
      setValidated(true);
      return;
    }

    try {
      setValidated(false);
      const passwordChanged = await apiHelpers.reset({ password, token });
      if (passwordChanged) {
        setError(false);
        navigate("/login", {
          state: { success: "Password updated successfully" }
        });
      }
    } catch (e) {
      console.log(e.response.data.error);
      if (e.response.data.error === "Cannot set property 'password' of null") {
        setError(true);
      }
    }
  };
  return (
    <div className="auth">
      <Card>
        {error && (
          <Alert variant="danger">
            Invalid link. Go to <Alert.Link href="/login">login</Alert.Link> page.
          </Alert>
        )}
        <Card.Body>
          <h2 className="mb-3">Password Reset</h2>
          <Form noValidate validated={validated} onSubmit={onSubmit}>
            <FormGroup>
              <FloatingLabel
                className="login-input"
                controlId="floatingPassword"
                label="Enter a new Password"
              >
                <Form.Control
                  required
                  type="password"
                  placeholder=""
                  ref={passwordRef}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
                  isInvalid={password !== confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {password !== confirmPassword && (
                  <Form.Control.Feedback type="invalid">
                    Password mismatch!
                  </Form.Control.Feedback>
                )}
              </FloatingLabel>
            </FormGroup>

            <br />
            <Button
              className="login-input mb-2"
              variant="primary"
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
