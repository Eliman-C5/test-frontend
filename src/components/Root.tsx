import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';

function Root() {

  const [user, setUser] = useState<string | null>(null)
  
  const navigate = useNavigate()

  useEffect(() => {
    
    setUser(localStorage.getItem('user'))
  
  }, [])
  
  
  const logout = () => {
  
    localStorage.clear()
    
    navigate('/login')
    
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to={`/`} style={{fontSize: '24px'}}>Home</Link>
        {
          user ?
          <>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end" style={{gap: '.4rem'}}>
              <span>{user}</span>
              <button onClick={logout}>
                Logout
              </button>
            </Navbar.Collapse>
          </> :
          <>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end" style={{gap: '.4rem'}}>
              <Link to={`/login`}>Login</Link>
              <Link to={`/signup`}>Signup</Link>
            </Navbar.Collapse>
          </>
        }
      </Container>
    </Navbar>
  );
}

export default Root;