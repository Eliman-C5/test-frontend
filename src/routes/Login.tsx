import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Root from '../components/Root';
import { useForm } from '../hooks/useForm';
import { FormEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { authURL } from '../utils/constant';

const Login = () => {

  const {email, setEmail, password, setPassword, error, setError} = useForm()

  const navigate = useNavigate()
  
  const onSubmit = (e: FormEvent) => {
  
    e.preventDefault()
    
    axios.post(`${authURL}/login`, {email: email, password: password})
    .then((res) => {
      
      console.log(res.data, document.cookie)
      
      localStorage.setItem('session', res.data?.AuthenticationResult?.AccessToken)
      localStorage.setItem('user', email)
      
      navigate('/')
      
    })
    .catch(err => setError(err.response.data))
  
  }
  
  useEffect(() => {
  
    if (localStorage.getItem('session')) return navigate('/')
  
  }, [])

  return (
    <>
    
    <Root />
    
    <main className="login">
    
      <h2>Log in</h2>
    
      <Form className='login-form mt-4' onSubmit={onSubmit}>
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
      
      {error && <p className='text-danger p-2' style={{maxWidth: '450px'}}>{error}</p>}
    
    </main>
    
    </>
  )
}

export default Login