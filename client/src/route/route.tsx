import { createBrowserRouter } from "react-router-dom";
import { Login } from "../page/login";

export const route = createBrowserRouter([
    {
        path: '/',
        element: <Login />
    }
])