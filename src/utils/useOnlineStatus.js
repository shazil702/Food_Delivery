import { useState,useEffect } from "react";

const useOnlineStatus = () => {
    const [status, setstatus] = useState()
    useEffect(()=>{
        addEventListener("online", () => {
            setstatus(true)
        });
        addEventListener("offline", () => {
            setstatus(false)
        });
    },[])

    return status
}

export default useOnlineStatus