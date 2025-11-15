import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import ProductDetails from "../Pages/ProductDetails";
import Cart from "../Pages/Cart";
import Products from "../Pages/Products";

const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        children:[
            {
                index:true,
                element:<Home></Home>
            },
            {
                path:"/product-details/:id",
                element:<ProductDetails></ProductDetails>
            },
            {
                path:"/cart",
                element:<Cart></Cart>
            },{
                path:"products",
                element:<Products></Products>
            }
        ]
    }
])
export default router;