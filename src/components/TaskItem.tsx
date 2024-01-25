import axios from "axios"
import { ListGroupItem } from "react-bootstrap"
import { BiEditAlt } from "react-icons/bi"
import { BsTrash } from "react-icons/bs"
import { baseURL } from "../utils/constant"
import { useContext } from "react"
import { TaskContext } from "../context/TaskProvider"
import { TaskItemProps } from "../types/types"

export const TaskItem = ({id, task}: TaskItemProps) => {

  const {updateUI, setUpdateUI, setInputValue, setCurrentID} = useContext(TaskContext)

  const deleteTask = () => {
    
    axios.delete(`${baseURL}/delete/${id}`)
    .then((res) => {
      console.log(res)
      setUpdateUI(!updateUI)
    })
    
  }
  
  const selectTask = () => {

    setInputValue(task)
    setCurrentID(id)
  
  }

  return (
    <ListGroupItem className="list-item">
    {task}
    <div className="">
      <BiEditAlt className="icon" onClick={selectTask} />
      <BsTrash className="icon" onClick={deleteTask} />
    </div>
    </ListGroupItem>
  )
}
