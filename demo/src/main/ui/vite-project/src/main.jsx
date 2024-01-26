import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './pages/HomePage.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import NavBar from './components/NavBar.jsx'
import EventPage from "./pages/EventPage.jsx";

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
