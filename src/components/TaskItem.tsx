import axios from "axios"
import { ListGroupItem } from "react-bootstrap"
import { BiEditAlt } from "react-icons/bi"
import { BsTrash } from "react-icons/bs"
import { baseURL } from "../utils/constant"
import { useContext, useState } from "react"
import { TaskContext } from "../context/TaskProvider"
import { TaskItemProps } from "../types/types"

export const TaskItem = ({id, task, done}: TaskItemProps) => {

  const {updateUI, setUpdateUI, setInputValue, setCurrentID, setStatus} = useContext(TaskContext)
  const [token, setToken] = useState<null | string>(null)
  const [isTaskDone, setIsTaskDone] = useState<null | boolean>(done)

  const deleteTask = () => {
  
    setToken(localStorage.getItem('session'))
    
    axios.delete(`${baseURL}/delete/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    .then((res) => {
      console.log(res)
      setUpdateUI(!updateUI)
    })
    
  }
  
  const selectTask = () => {

    setInputValue(task)
    setCurrentID(id)
    setStatus(isTaskDone)
  
  }

  return (
    <ListGroupItem className="list-item">
    <span onClick={() => setIsTaskDone(!isTaskDone)}>{`${isTaskDone}`}</span>
    <span className="">{task}</span>
    <div className="">
      <BiEditAlt className="icon" onClick={selectTask} />
      <BsTrash className="icon" onClick={deleteTask} />
    </div>
    </ListGroupItem>
  )
}
