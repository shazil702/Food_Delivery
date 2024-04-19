import React, {Suspense, lazy, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import Error from "./Components/Error";
import Menu from "./Components/Menu";
import Cart from "./Components/Cart";
import useOnlineStatus from "./utils/useOnlineStatus";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const Grocerrry = lazy(() => import("./Components/Grocerry"));

const Layout = ()=>{
  const [UserName, setUserName] = useState("user");

useEffect(() =>{
  const data = {
    name:"User",
  }
  setUserName(data.name)
},[])
  const checkstatus = useOnlineStatus()
  if(checkstatus === false){
    return(
      <h1>Oops..!! Looks like your offline</h1>
    )
  }
  return(
    <Provider store={appStore}>
    <UserContext.Provider value={{logged_user:UserName , setUserName } }>
    <div className="main">
    
    <Header />
    <Outlet />
  </div>
  </UserContext.Provider>
  </Provider>
  )
}

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Body />
      },
       {
    path: "/about",
    element: <About text="hello" />
  },
  {
    path: "/cart",
    element:<Cart />
  },
  {
    path: "/menu/:resid",
    element: <Menu/>
  },
  {
    path: "/groccery",
    element: <Suspense fallback= {<h1>Loading....</h1>}><Grocerrry/></Suspense> 
  }
    ],
    errorElement: <Error />
  },
 
])


   
const path = ReactDOM.createRoot(document.getElementById("path"))
path.render(<RouterProvider router={Router} />)
