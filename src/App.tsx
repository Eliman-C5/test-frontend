import { useContext, useEffect, useState } from "react"
import { AddTask } from "./components/AddTask"
import { TaskItem } from "./components/TaskItem"
import { ListGroup } from "react-bootstrap"
import axios from "axios"
import { baseURL } from "./utils/constant"
import { TaskContext } from "./context/TaskProvider"
import { Task } from "./types/types"
import Root from "./components/Root"
import { useNavigate } from "react-router-dom"

function App() {

  const [tasks, setTasks] = useState<Task[]>([])
  const {updateUI} = useContext(TaskContext)
  
  const navigate = useNavigate()
  
  type Responds = {
    email: string,
    tasks: [] | null,
    _id: string,
    __v: number
  }
  
  useEffect(() => {
  
    if (!localStorage.getItem('session')) return navigate('/login')
    
    const email = localStorage.getItem('user')
    
    axios.get(`${baseURL}/users`)
    .then((res) => res.data)
    .then((res: Responds[]) => res.filter(item => item.email === email))
    .then(res => axios.get(`${baseURL}/get/${res[0]._id}`))
    .then(res => setTasks(res.data))
  
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
          />)
        }
        </ListGroup>
      </main>
      
    </>
  )
}

export default App
