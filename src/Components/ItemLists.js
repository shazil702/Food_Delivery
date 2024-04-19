import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constant";
import { additem } from "../utils/cartSlice";

const ItemLists = ({items}) => {
    const dispatch = useDispatch();
    const addcart = (item) => {
      dispatch(additem(item))
    }
    return(
        <div>
          {items.map((item) =>{
            return(
               
            <div key={item.card.info.id} className="flex p-2 m-2 border-gray-200 border-b-2 text-left">
                 <div className="w-9/12">
                <div className="py-2">
                    <span>{item.card.info.name}</span>
                    <span>₹ {item.card.info.price / 100}</span>
                </div>
                <p className="text-xs">{item.card.info.description}</p>
                </div>
                
                
                <div className="w-3/12 p-4">
                <img src={CDN_URL + item.card.info.imageId} className="w-full"/>
                <button className="bg-black text-white absolute" onClick={() => addcart(item)}>Add +</button>
                </div>
                </div>
            )
          })}
          
        </div>
    )
}

export default ItemLists