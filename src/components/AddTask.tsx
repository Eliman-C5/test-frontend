import axios from 'axios';
import { ChangeEvent, FormEvent, useContext, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { baseURL } from '../utils/constant';
import { TaskContext } from '../context/TaskProvider';
import { IoIosSend } from 'react-icons/io';
import { RxUpdate } from 'react-icons/rx';

export const AddTask = () => {
  
  const {updateUI, setUpdateUI, inputValue, setInputValue, currentID, setCurrentID, status} = useContext(TaskContext)
  const [token, setToken] = useState<null | string>(null)
  
  const updateTask= () => {
    axios.put(`${baseURL}/update/${currentID}`, {task: inputValue, done: status}, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    .then((res) => {
      console.log(res)
      setInputValue("")
      setCurrentID(null)
      setUpdateUI(!updateUI)
  })
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    setToken(localStorage.getItem('session'))
    
    //Si el valor es menor o igual a 1 no se agrega
    if (inputValue.length <= 1 ) return
    
    //Si se presionó previamente en editar, se tendrá que editar
    if (currentID) return updateTask()
    
    const user = localStorage.getItem('user')
  
    axios.post(`${baseURL}/create`, {task: inputValue, email: user}, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    .then((res) => {
      console.log(res.data)
      //Al enviarse la task ponemos la cajita vacia otra vez
      setInputValue("")
      //Actualizamos UI
      setUpdateUI(!updateUI)
    })
    .catch(err => console.log(err))
    
  }
  
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
  
    setInputValue(e.target.value);
    
  }
  
  return (
    <Form onSubmit={onSubmit} className='task-form'>
      <Form.Control 
        type='text'
        placeholder="Create a new task..."
        value={inputValue}
        onChange={onChange}
      />
      <Button variant="primary" type="submit">
        {
          currentID ? 
          <RxUpdate /> :
          <IoIosSend />
        }
      </Button>
    </Form>
  )
}