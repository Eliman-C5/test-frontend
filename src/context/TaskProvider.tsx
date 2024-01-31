import { createContext, useState } from 'react'
import { GlobalTypes, PropChildren } from '../types/types';

export const TaskContext = createContext<GlobalTypes>({} as GlobalTypes);

export const TaskProvider = ({children}: PropChildren) => {

  const [updateUI, setUpdateUI] = useState(false)
  const [inputValue, setInputValue] = useState("");
  const [currentID, setCurrentID] = useState<string | null>(null);
  const [status, setStatus] = useState<boolean | null>(null);
  
  return (
    <TaskContext.Provider
      value={{
        updateUI,
        setUpdateUI,
        inputValue,
        setInputValue,
        currentID,
        setCurrentID,
        status,
        setStatus
      }}
    >
      {children}
    </TaskContext.Provider>
  )

}