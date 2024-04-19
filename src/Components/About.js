import User from "./User"
import React from "react"
import UserContext from "../utils/UserContext";


class About extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
    }
    render(){
        return(
           <div>
            <h1>{this.props.text}</h1>
            <UserContext.Consumer>
    {(data) => console.log(data)}
</UserContext.Consumer>
        <h1>This is about page</h1>
        
        <br></br>
      <User/>
       
        </div>
    )  
        
    }
}


export default About