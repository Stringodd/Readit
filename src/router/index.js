import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Layout from '../layout/layout';


const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/", element: <Home />,
            },
        ],
    },
]);

export default router;
