import { createBrowserRouter } from "react-router-dom";
import { Login } from "../page/login";
import { Register } from "../page/register";

export const route = createBrowserRouter([
    {
        path: '/',
        element: <Login />,
    },
    {
        path: '/:usernameParam',
        element: <Register />
    }
])