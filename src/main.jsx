import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router'
import MultipleChoice from './MultipleChoice.jsx'

const router=createBrowserRouter([
  {path:"/Decision-Maker-React/",element:<App/>},
  {path:"/Decision-Maker-React/multiple-choice",element:<MultipleChoice/>},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App></App>
    </RouterProvider>
  </StrictMode>,
)
