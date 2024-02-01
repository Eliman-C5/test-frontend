import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

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
            <Navbar.Collapse className="justify-content-end">
              <div className="" style={{display: 'flex', marginLeft: 'auto', gap: '.8rem', justifyContent: 'end', alignItems: 'center', marginTop: '10px'}}>
                <span>{user}</span>
                <Button onClick={logout} variant="primary" >
                  Logout
                </Button>
              </div>
            </Navbar.Collapse>
          </> :
          <>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end">
              <div className="" style={{display: 'flex', marginLeft: 'auto', gap: '.8rem', justifyContent: 'end', alignItems: 'center', marginTop: '10px'}}>
                <Link to={`/login`}>Login</Link>
                <Link to={`/signup`}>Signup</Link>
              </div>
            </Navbar.Collapse>
          </>
        }
      </Container>
    </Navbar>
  );
}

export default Root;