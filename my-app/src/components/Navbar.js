import React, { useState } from 'react';
import { Navbar as BootstrapNavbar, Nav, Button, Modal, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Navbar.css";

function Navbar() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [signUpData, setSignUpData] = useState({
    username: '',
    email: '',
    password: '',
    retypePassword: '',
  });
  const [cart, setCart] = useState([]);

  const handleAvatarClick = () => {
    setShowLoginForm(true);
  };

  const handleCloseForms = () => {
    setShowLoginForm(false);
    setShowSignUpForm(false);
    setShowCheckoutForm(false);
  };

  const handleSignUpClick = () => {
    setShowLoginForm(false);
    setShowSignUpForm(true);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login submitted:', loginData);
    handleCloseForms();
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Sign Up submitted:', signUpData);
    handleCloseForms();
  };

  const handleAddToCart = () => {
    // Add the item to the cart (in this case, a simple string)
    setCart([...cart, 'Product']);
  };

  const handleCheckout = () => {
    // Open the checkout form
    setShowCheckoutForm(true);
  };

  return (
    <BootstrapNavbar bg="light" expand="lg">
        <div className="navbar__title">Rare Beauty</div>
      <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BootstrapNavbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#shop-now">Shop Now</Nav.Link>
          <Nav.Link href="#shade-finder">Shade Finder</Nav.Link>
        </Nav>
        <div className="navbar__cart">
          <Button onClick={handleAddToCart}>🛒</Button>
        </div>
        <Button variant="primary" onClick={handleCheckout}>
          Checkout
        </Button>
        <Button variant="outline-primary" onClick={handleAvatarClick}>
          Login
        </Button>
        <Button variant="outline-secondary" onClick={handleSignUpClick}>
          Sign Up
        </Button>
      </BootstrapNavbar.Collapse>

      {/* Login Modal */}
      <Modal show={showLoginForm} onHide={handleCloseForms}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleLoginSubmit}>
            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your username"
                value={loginData.username}
                onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Sign Up Modal */}
      <Modal show={showSignUpForm} onHide={handleCloseForms}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSignUpSubmit}>
            <Form.Group controlId="formSignUpUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Choose a username"
                value={signUpData.username}
                onChange={(e) => setSignUpData({ ...signUpData, username: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group controlId="formSignUpEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={signUpData.email}
                onChange={(e) => setSignUpData({ ...signUpData, email: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group controlId="formSignUpPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Choose a password"
                value={signUpData.password}
                onChange={(e) => setSignUpData({ ...signUpData, password: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group controlId="formSignUpRetypePassword">
              <Form.Label>Retype Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Retype your password"
                value={signUpData.retypePassword}
                onChange={(e) => setSignUpData({ ...signUpData, retypePassword: e.target.value })}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Sign Up
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Checkout Modal */}
      <Modal show={showCheckoutForm} onHide={handleCloseForms}>
        <Modal.Header closeButton>
          <Modal.Title>Checkout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formAddress">
              <Form.Label>Shipping Address</Form.Label>
              <Form.Control type="text" placeholder="Enter your shipping address" required />
            </Form.Group>
            <Form.Group controlId="formPaymentMethod">
              <Form.Label>Payment Method</Form.Label>
              <Form.Control as="select" required>
                <option>Credit Card</option>
                <option>PayPal</option>
              </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">
              Place Order
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseForms}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </BootstrapNavbar>
  );
}

export default Navbar;
