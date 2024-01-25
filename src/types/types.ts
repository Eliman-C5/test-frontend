import { ReactNode } from "react"

export type Task = {
  task: string,
  __v: number,
  _id: string
}

export type TaskItemProps = {
  id: string,
  task: string
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
  setCurrentID: React.Dispatch<React.SetStateAction<null | string>>
}