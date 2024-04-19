import { useParams } from "react-router-dom";
import { useState } from "react";
import useMenu from "../utils/useMenu";
import Categories from "./Categories";

function Menu () {
    const {resid} = useParams();
const resinfo = useMenu(resid)
  const cardInfo = resinfo?.cards[2]?.card?.card?.info;
  const category = resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
  const [showInd, setshowInd] = useState(null)
   
    if (!cardInfo) {
        return <div>No information available.</div>;
    }
    
    const { name, cuisines, costForTwoMessage } = cardInfo; 
       return(
        <div className="text-center">
        <h1 className="font-bold mb-4 text-xl">{name} </h1>
        <p>{cuisines.join(", ")} , {costForTwoMessage}</p>

        {category.map((cat, ind) =>{
          return <Categories data={cat?.card?.card} showlists={ind === showInd && true} setshowInd = {() => setshowInd(ind)}/>;
})}
       
        </div>
    )
}

export default Menu