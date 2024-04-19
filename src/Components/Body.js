import Card, {PromotedCard} from "./Card"
import { useState, useEffect, useContext } from "react"
import restList from "../utils/mockData";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
const Body = ()=>{
  const [resList, setreslist] =useState(restList);
  const [filteredList, setfilteredList] = useState(restList)
  const [searchtxt, setsearchtxt] = useState("");
  const Promorest = PromotedCard(Card)
  const {logged_user, setUserName} = useContext(UserContext)

  
    return(
      <div className="body">
        <div className="filter flex">
          <input type="text" className="border border-solid border-black box-border h-3 w-40 m-4 p-4" value={searchtxt} onChange={(e)=> {
            setsearchtxt(e.target.value);
          }}></input>
          <button className="px-4 py2 m-4 bg-black text-white rounded-lg" onClick={()=>{
          const filterlist = resList.filter((res)=> res.name.toLowerCase().includes(searchtxt.toLowerCase()))
          setfilteredList(filterlist)
          }}>search</button>
       
        <div className="rate">
          <button className="rt-btn px-4 py2 m-4 bg-black text-white rounded-lg" onClick={()=> {
            const newlist = resList.filter(
              (res)=> res.rat > 3.5
            )
            setfilteredList(newlist)
          }}>
            show top rated
          </button>
        </div>
        <div>
          <label>User Name : </label>
          <input className="border border-black" value={logged_user} onChange={(e) => setUserName(e.target.value)}/>
        </div>
        </div>
  <div className="rst-container flex flex-wrap">
   {filteredList.map((rest) => (
  <Link to={"/menu/"+rest.id} key={rest.id}> 
  {rest.promoted ? <Promorest resdata={rest}/> : <Card resdata={rest}/>}
  
  </Link>
  
   ))}
  
    
  </div>
      </div>
    )
  }

  export default Body