import { createRoot } from "react-dom/client";
import { App } from "./components/App";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Suspense} from "react";
import {Shop} from "@/page/Shop";
import {LazyAbout} from "@/page/About/About.lazy";
import {About} from "@/page/About";

const root = document.getElementById('root');

if (!root) {
    throw new Error('root not found!');
}

const container = createRoot(root);

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: '/about',
                element: <Suspense fallback="..."><LazyAbout/></Suspense>
            },
            {
                path: '/shop',
                element: <Suspense fallback="..."><Shop/></Suspense>
            }
        ]
    },
    {
        path:'/about',
        element: <About/>
    },
    {
        path:'/shop',
        element: <Shop/>
    }
]);

container.render(<RouterProvider router={router} />)