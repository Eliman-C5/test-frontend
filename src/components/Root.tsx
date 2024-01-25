import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

function Root() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to={`/`} style={{fontSize: '24px'}}>Home</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" style={{gap: '.4rem'}}>
          <Link to={`/login`}>Login</Link>
          <Link to={`/signup`}>Signup</Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Root;