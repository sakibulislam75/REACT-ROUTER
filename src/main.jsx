import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Components/Root/Root.jsx'
import About from './Components/About/About.jsx'
import Mobile from './Components/Mobile/Mobile.jsx'
import Home from './Components/Home/Home.jsx'
const route=createBrowserRouter([
  {
    path:'/',
    Component:Root,
    children:[
      {index:true,Component:Home},
      {path:'about',Component:About
      },
      {path:'Mobile',Component:Mobile}
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={route}></RouterProvider>
  </StrictMode>,
)
