import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import "./login.scss";
import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import apiHelpers from "../helpers/apiHelpers";

export default function Login() {
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("session-token");
  if (token) {
    return <Navigate to="/" />;
  }

  const handleLogin = async (data, type) => {
    console.log("Data++++++", data);
    try {
      const response = await apiHelpers.login(data, type);
      localStorage.setItem("session-token", response.token);
      localStorage.setItem("user", JSON.stringify(response.user));
      navigate("/");
    } catch (e) {
      console.log("ERREOR LOGIN", e.response.data.error);
      setError(e.response.data.error);
    }
  }
    return (
      <div>
        <div className="login">
          <Card>
            <Card.Body>
              {error && (<Alert variant="danger">{error}</Alert>)}
              <h2 className="mb-3">Login</h2>
              <FloatingLabel
                controlId="floatingInput"
                label="Email"
                className="mb-3 login-input"
              >
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
              </FloatingLabel>
              <FloatingLabel
                className="login-input"
                controlId="floatingPassword"
                label="Password"
              >
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={user.password}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                />
              </FloatingLabel>
              <br />
              <Button
                className="login-input mb-2"
                variant="primary"
                onClick={() => handleLogin(user, "direct")}
              >
                Login
              </Button>
              <div className="link-btns">
                <Button
                  variant="link"
                  className="p-0"
                  onClick={() => navigate("/signup")}
                >
                  Signup
                </Button>
                <Button variant="link" className="p-0" onClick={() => navigate("/forgotpassword")}>
                  Forgot Password
                </Button>
              </div>
            </Card.Body>
          </Card>
          <br />
          <div className="login-seperator">
            <div style={{ width: 140 }}>
              <hr />
            </div>
            <div>
              <strong>Login using:</strong>
            </div>
            <div style={{ width: 140 }}>
              <hr />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              width: 140
            }}
          >
            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              buttonText=""
              onSuccess={(googRes) =>
                handleLogin(
                  { profile: googRes.profileObj, tokenId: googRes.tokenId },
                  "google"
                )
              }
              onFailure={(e) => console.log(e)}
              cookiePolicy={"single_host_origin"}
              render={(renderProps) => (
                <button
                  className="mt-3 btn buttons"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <svg
                    style={{ transform: "scale(1.8)" }}
                    width="18"
                    height="18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="#000" fillRule="evenodd">
                      <path
                        d="M9 3.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l2.91 2.26C4.6 5.05 6.62 3.48 9 3.48z"
                        fill="#EA4335"
                      ></path>
                      <path
                        d="M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z"
                        fill="#4285F4"
                      ></path>
                      <path
                        d="M3.88 10.78A5.54 5.54 0 0 1 3.58 9c0-.62.11-1.22.29-1.78L.96 4.96A9.008 9.008 0 0 0 0 9c0 1.45.35 2.82.96 4.04l2.92-2.26z"
                        fill="#FBBC05"
                      ></path>
                      <path
                        d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z"
                        fill="#34A853"
                      ></path>
                      <path fill="none" d="M0 0h18v18H0z"></path>
                    </g>
                  </svg>
                </button>
              )}
            />
            <FacebookLogin
              cssClass="mt-3 btn p-0"
              containerStyle=""
              appId={process.env.REACT_APP_FACEBOOK_APP_ID}
              fields="name,email,picture"
              callback={(fbRes) => handleLogin(fbRes, "fb")}
              textButton=""
              icon={
                <FontAwesomeIcon
                  size="3x"
                  color="#3b5998"
                  // style={{ paddingRight: "10px" }}
                  icon={faFacebookSquare}
                />
              }
            />
          </div>
        </div>
      </div>
    );
  };

