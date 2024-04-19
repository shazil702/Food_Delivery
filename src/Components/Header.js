import { Logo_Url } from "../utils/constant";
import { useState,useEffect,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus"
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Header = () =>{
  let [btnname, setbtnname] = useState("Login")
  const Data = useContext(UserContext)
  const [date, setdate] = useState(new Date());
  

  useEffect(()=>{
  }, [btnname])

  const checkstatus = useOnlineStatus()

  const cartitems = useSelector((store) => store.cart.items);
    return(
      <div className="flex justify-between">
        <div className="logo">
          <img className="w-36" src={Logo_Url}></img>
        </div>
        <div className="m-4 p-4">
          <h1>{date.toDateString()}</h1>
        </div>
        <div className="navlink">
          <ul className="flex p-6 m-4">
            
            <li className="px-2">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="px-2">
             <Link to={"/about"}> About</Link>
            </li>
            
            <li className="px-2">
              <Link to={"/groccery"}>Grocerrry</Link>
            </li>
            <button className="login" onClick={()=> {
              if(btnname==="Login"){
                setbtnname("Logout");
              }
              else{
                setbtnname("Login")
              }
              
}}>
              {btnname}
            </button>
            <li className="px-2 font-bold"> <Link to={'/cart'}>cart ({cartitems.length})</Link></li>
            <li className="px-2 font-bold">Hello {Data.logged_user}</li>
          </ul>
        </div>
      </div>
    )
  }

  export default Header;