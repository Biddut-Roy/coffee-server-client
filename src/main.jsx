import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Addcoffee from './Addcoffee.jsx';
import Update from './Update.jsx';
import SignUp from './component/SignUp.jsx';
import Authprovider from './Provider/Authprovider.jsx';
import UserTable from './component/UserTable.jsx';
import Signin from './component/Signin.jsx';





const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: ()=> fetch('https://coffee-update-pbghddbo0-biddut-roys-projects.vercel.app/coffees')
  },
  {
    path: "/coffee",
    element: <Addcoffee></Addcoffee>,
  },
  {
    path: "/coffee/:id",
    element: <Update></Update> ,
    loader: ({params})=> fetch(`https://coffee-update-pbghddbo0-biddut-roys-projects.vercel.app/coffees/${params.id}`)
  },
  {
    path:'/signup',
    element: <SignUp></SignUp>
  },
  {
    path:'/signIn',
    element: <Signin></Signin>
  },
  {
    path:'/userTable',
    element: <UserTable></UserTable>,
    loader: ()=>fetch('https://coffee-update-pbghddbo0-biddut-roys-projects.vercel.app/users')
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <Authprovider>
          <RouterProvider router={router}>
          </RouterProvider>
        </Authprovider>
  </React.StrictMode>,
)
