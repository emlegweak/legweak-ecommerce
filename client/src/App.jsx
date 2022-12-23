import {
    createBrowserRouter, 
    RouterProvider,
    Outlet 
} from "react-router-dom"

import Home from "./components/Home/Home"
import Product from "./components/Product/Product"
import Products from "./components/Products/Products"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"

import './App.scss'

const Layout = () =>{
    return(
        <div className="app">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

const router = createBrowserRouter([
    {
        path:"/", 
        element: <Layout />, 
        children: [
            {
                path: "/", 
                element: <Home />
            }, 
             {
                path: "/products/:id", 
                element: <Products />
            }, 
             {
                path: "/product/:id", 
                element: <Product />
            }, 
        ]
    },
   
])

const App = () => {
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}

export default App;