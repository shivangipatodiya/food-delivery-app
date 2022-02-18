import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import Card from "react-bootstrap/Card";
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
  const [toast, setToast] = useState(false);

  const onSubmit = async (e) => {
    console.log(password)
    e.preventDefault();
    if (password !== confirmPassword) {
      setValidated(true);
      return;
    }

    try {
      setValidated(false);
      const passwordChanged = await apiHelpers.reset({ password, token });
      if (passwordChanged) {
        setToast(true);
        navigate("/login");
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      {toast && (
        <Toast>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Success</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Password updated successfully</Toast.Body>
        </Toast>
      )}
      <Card>
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
