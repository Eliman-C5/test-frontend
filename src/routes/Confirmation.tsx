import { FormEvent, useEffect } from "react";
import { useForm } from "../hooks/useForm";
import axios from "axios";
import { authURL } from "../utils/constant";
import { useNavigate } from "react-router-dom";
import { Button, Form, Image } from "react-bootstrap";
import otpImage from "../assets/business-and-finance.png"

function Confirmation() {

  const {email, setEmail, password, setPassword, error, setError} = useForm();
  
  const navigate = useNavigate()
  
  useEffect(() => {
  
    if (localStorage.getItem('session')) return navigate('/')
  
  }, [])
  
  const onSubmit = (e: FormEvent) => {
  
    e.preventDefault()
    
    axios.post(`${authURL}/confirmation`, {email: email, code: password})
    .then((res) => {
      
      console.log(res.data)
      
      navigate('/login')
      
    })
    .catch(err => setError(err.response.data.error))
    
    console.log(email, password)
  
  }

  return (
  
    <article className="mx-auto d-flex flex-column p-5" style={{maxWidth: '600px'}}>

      <Image src={otpImage} className="mx-auto mb-4" fluid />
      
      <Form onSubmit={onSubmit} className="d-flex flex-column" style={{gap: '12px'}}>
      
        <Form.Control 
          type="email" 
          placeholder="Enter email" 
          value={email} onChange={(e) => setEmail(e.target.value)} 
        />
        
        <h3>Enter verification code</h3>
        
        <p className="mb-0">We are automatically sending a verification code to your email</p>
        
        <Form.Control 
          type="password" 
          placeholder="Password" 
          value={password} onChange={(e) => setPassword(e.target.value)} 
        />
        
        <Button variant="primary" type="submit">
          Submit
        </Button>
        
      </Form>
      
      {error && <p className='text-danger p-2' style={{maxWidth: '600px'}}>{error}</p>}
      
    </article>
  )

}

export default Confirmation;