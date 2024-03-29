import { useContext, useEffect, useState } from "react"
import { AddTask } from "./components/AddTask"
import { TaskItem } from "./components/TaskItem"
import { ListGroup } from "react-bootstrap"
import axios from "axios"
import { baseURL } from "./utils/constant"
import { TaskContext } from "./context/TaskProvider"
import { Responds, Task } from "./types/types"
import Root from "./components/Root"
import { useNavigate } from "react-router-dom"

function App() {

  const [tasks, setTasks] = useState<Task[]>([])
  const {updateUI} = useContext(TaskContext)
  
  const navigate = useNavigate()
  
  useEffect(() => {
  
    if (!localStorage.getItem('session')) return navigate('/login')
    
    const email = localStorage.getItem('user')
    const token = localStorage.getItem('session')
    
    axios.get(`${baseURL}/users`)
    .then((res) => res.data)
    .then((res: Responds[]) => res.filter(item => item.email === email))
    .then(res => axios.get(`${baseURL}/get/${res[0]._id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    }))
    .then(res => {
      console.log(res)
      setTasks(res.data)
    })
    .catch(err => console.log(err))
  
  }, [updateUI])

  return (
    <>
    
      <Root />
      
      <main className="home">

        <h1>Tasks List</h1>
        <AddTask />
      
        <ListGroup className="task-list">
        {
          tasks.map((item) => 
          <TaskItem 
            key={item._id} 
            id={item._id} 
            task={item.task}
            done={item.done}
          />)
        }
        </ListGroup>
      </main>
      
    </>
  )
}

export default App
