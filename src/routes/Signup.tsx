import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Root from '../components/Root';
import { useForm } from '../hooks/useForm';
import { FormEvent, useEffect } from 'react';
import axios from 'axios';
import { authURL } from '../utils/constant';
import { useNavigate } from 'react-router-dom';


const Signup = () => {

  const {email, setEmail, password, setPassword} = useForm()
  
  const navigate = useNavigate()
  
  useEffect(() => {
  
    if (localStorage.getItem('session')) return navigate('/')
  
  }, [])
  
  const onSubmit = (e: FormEvent) => {
  
    e.preventDefault()
    
    axios.post(`${authURL}/createuser`, {email: email, password: password})
    .then((res) => {
      
      console.log(res.data)
      
      navigate('/confirmation')
      
    })
    .catch(err => console.log(err))
    
    console.log(email, password)
  
  }


  return (
    <>
    
    <Root />
    
    <main className="signup">
    
      <Form className='signup-form' onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="Enter email" 
            value={email} onChange={(e) => setEmail(e.target.value)} 
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password" 
            placeholder="Password"
            value={password} onChange={(e) => setPassword(e.target.value)} 
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    
    </main>
    
    </>
  )
}

export default Signup