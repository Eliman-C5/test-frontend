import { useContext, useEffect, useState } from "react"
import { AddTask } from "./components/AddTask"
import { TaskItem } from "./components/TaskItem"
import { ListGroup } from "react-bootstrap"
import axios from "axios"
import { baseURL } from "./utils/constant"
import { TaskContext } from "./context/TaskProvider"
import { Task } from "./types/types"
import Root from "./components/Root"

function App() {

  const [tasks, setTasks] = useState<Task[]>([])
  const {updateUI} = useContext(TaskContext)
  
  useEffect(() => {
    
    axios.get(`${baseURL}/get`)
    .then((res) => {
      console.log(res.data)
      setTasks(res.data)
    })
  
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
