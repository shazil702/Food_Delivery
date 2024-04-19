import { render } from "react-dom";
import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
     
        this.state = {
            user:{
            name: "default name",
            location: "default location",
            avatar_url: "http/dummy.photo"
        }
    }
    }

   

    async componentDidMount(){
       const data = await fetch("https://api.github.com/users/shazil702");
       const json = await data.json();
       
       this.setState({
        user:json
       })

      this.timer = setInterval(() => {
      }, 1000);
    }
componentWillUnmount(){
    clearInterval(this.timer)
}
    
    render(){
        const {name,location,avatar_url} = this.state.user
        console.log(name, location, avatar_url);
        
        
      
        return(
            <div>
               
                <img src={avatar_url}></img>
        <h1>Name: {name}</h1>
        <h3>Place: {location}</h3>
        <h3>Contact: @naja.jaleel</h3>
    </div>
        )
    }
}

export default UserClass