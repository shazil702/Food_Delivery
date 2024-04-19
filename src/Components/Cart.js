import { useDispatch, useSelector } from "react-redux"
import ItemLists from "./ItemLists"
import { clearcart } from "../utils/cartSlice";

const Cart = () => {
    
    const cartitems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const cleaarcart = () =>{
        dispatch(clearcart());
    }
    return(
        <div className="text-center">
            <h1 className="text-xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto">
                <button className="bg-black text-white p-2 m-2" onClick={cleaarcart}>Clear cart</button>
                <ItemLists items={cartitems}/>
            </div>
        </div>
    )
}

export default Cart