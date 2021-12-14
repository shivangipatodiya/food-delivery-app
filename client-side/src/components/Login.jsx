import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"
import "./login.scss";

export default function Login() {
  return (
    <div className="login">
      <h2 className="mb-3">Login</h2>
      <FloatingLabel controlId="floatingInput" label="Email" className="mb-3 login-input">
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel className="login-input" controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
      <br />
      <Button className="login-input mb-2" variant="primary">Login</Button>
      <Button className="login-input mb-2" variant="outline-primary">Signup</Button>
      <Button variant="link">Forgot Password</Button>
      <div className="login-seperator">
        <div style={{width: 140}}>
          <hr />
        </div>
        <div>
          Login using:
        </div>
        <div style={{width: 140}}>
          <hr />
        </div>
      </div>
      <div class="g-signin2" data-onsuccess="onSignIn"></div>
    </div>
  );
}
