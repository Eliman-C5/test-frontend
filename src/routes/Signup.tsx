import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Root from '../components/Root';

const Signup = () => {
  return (
    <>
    
    <Root />
    
    <main className="signup">
    
      <Form className='signup-form'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
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