import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AllService from "../../Pages/AllService/AllService";
import Blogs from "../../Pages/Blogs/Blogs";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Singup from "../../Pages/Singup/Singup";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <AllService></AllService>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/singup',
                element: <Singup></Singup>
            },
        ]
    }
]);
export default router;