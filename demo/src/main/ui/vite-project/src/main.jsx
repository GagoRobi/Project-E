import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './pages/HomePage.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import NavBar from './components/NavBar.jsx'
import EventPage from "./pages/EventPage.jsx";
import EventCreator from "./pages/EventCreator.jsx";
import ReviewPage from "./pages/ReviewPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import WebShop from "./pages/WebShop.jsx";
import ItemCreator from "./pages/ItemCreator.jsx";
import AdminPage from "./pages/AdminPage.jsx";
import CheckoutPage from "./pages/CheckoutPage.jsx";
const router = createBrowserRouter([


    {
        path: "/",
        element: <NavBar/>,
        children: [
            {
                path: "/",
                element: <HomePage/>
            },
            {
                path: "/events",
                element: <EventPage/>
            },
            {
                path: "/new-event",
                element: <EventCreator/>
            },
            {
                path: "/reviews",
                element: <ReviewPage/>
            },
            {
                path:"/login",
                element: <LoginPage/>
            },
            {
                path:"/register",
                element:<RegisterPage/>
            },
            {
                path:"/shop",
                element:<WebShop/>
            },
            {
                path:"/create/item",
                element:<ItemCreator/>
            },
            {
                path: "/admin",
                element: <AdminPage/>
            },
            {
                path: "/checkout",
                element : <CheckoutPage/>
            }


        ]
    }

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
