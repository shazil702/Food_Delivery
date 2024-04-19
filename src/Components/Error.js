import { useRouteError } from "react-router-dom"
const Error = () => {
   let err = useRouteError();
    console.log(err);
    return(
        <div>
            <h1>
                Ooops!!!!!!!!!!!</h1>
                <h1>You Entered in Wrong place</h1>
            
        </div>
    )

}

export default Error