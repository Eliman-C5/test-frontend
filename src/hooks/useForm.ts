import { useState } from 'react'

export const useForm = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<null | string>(null)

  return {email, setEmail, password, setPassword, error, setError}
}
