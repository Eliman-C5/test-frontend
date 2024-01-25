import { useRouteError } from "react-router-dom";
import Root from "../components/Root";

type ErrorMessage = {
  data: string,
  error: {
    message: string,
    stack: string
  },
  internal: boolean,
  status: number,
  statusText: string
}

const ErrorPage = () => {

  const error: ErrorMessage | unknown = useRouteError();
  console.log(error)
  
  return (
    <>
    
      <Root />
    
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          {/* <i>{ 
            error.statusText || error.error.message
          }
          </i> */}
        </p>
      </div>
    </>
  )
}

export default ErrorPage