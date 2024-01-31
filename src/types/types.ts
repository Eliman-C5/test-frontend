import { ReactNode } from "react"

export type Task = {
  task: string,
  done:boolean,
  __v: number,
  _id: string
}

export type TaskItemProps = {
  id: string,
  task: string,
  done: boolean
}


export type PropChildren = {
  children: ReactNode
}

export type GlobalTypes = {
  updateUI: boolean,
  setUpdateUI: React.Dispatch<React.SetStateAction<boolean>>,
  inputValue: string,
  setInputValue: React.Dispatch<React.SetStateAction<string>>,
  currentID: string | null,
  setCurrentID: React.Dispatch<React.SetStateAction<null | string>>,
  status: boolean | null,
  setStatus: React.Dispatch<React.SetStateAction<null | boolean>>,
}