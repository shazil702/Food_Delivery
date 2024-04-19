import { useEffect,useState } from "react"
import { Menu_Api } from "./constant"


const useMenu = (resid) => {
    const [resinfo, setresinfo] = useState(null);
    useEffect(()=>{
        fetchmenu()
    },[])

    const fetchmenu = async() => {
        const data = await fetch(Menu_Api+resid);
        const json = await data.json();
        console.log(json);
        setresinfo(json.data)
    }
    return resinfo
}

export default useMenu