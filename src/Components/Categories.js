import ItemLists from "./ItemLists";
import { useState } from "react";

const Categories = ({data, showlists, setshowInd}) => {
    
    const {title, itemCards} = data
  

    const handle = () =>{
      setshowInd()

    }
    return(
        <div className="w-6/12 bg-gray-100 shadow-xl mx-auto mb-4 p-4">
            <div className="flex justify-between cursor-pointer" onClick={handle}>
            <span className="font-bold">{title} ({itemCards.length})</span>
            <span>⬇️</span>
        </div>
        {showlists && <ItemLists items={itemCards}/>}
        
            
        </div>
    )
}

export default Categories