import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Components/Root/Root.jsx'
import About from './Components/About/About.jsx'
import Mobile from './Components/Mobile/Mobile.jsx'
import Home from './Components/Home/Home.jsx'
import Details from './Components/Mobile/Details.jsx'
const route = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      {
        path: 'About', Component: About
      },
      {
        path: 'Mobile',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        Component: Mobile
      },
      {
        path: 'Mobile/:userid',
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userid}`),
        Component: Details
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route}></RouterProvider>
  </StrictMode>,
)
