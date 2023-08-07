import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './pages/Home';
import Layout from './layauts/layout';
import Cities from './pages/Cities';


const router = createBrowserRouter([
  { path:'/', element: <Layout />,
  children : [
    { path: '/', element: <Home/>},
    { path: '/cities', element: <Cities/>}
  ]
  },

  ])

function App() {
  return (
    
    <RouterProvider router={router}/>

  )
}

export default App
