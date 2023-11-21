import Register from "../Pages/Register/Register";
import Home from "../Pages/Home/Home";

const publicRoutes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/register",
        component: Register
    },
]

const privateRoutes = {

}

export { publicRoutes, privateRoutes };