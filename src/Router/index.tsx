import App from "@/App"

import { createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter([{

    path: '/',
    Component: App,
    children: [
        // {
        //     index: true,
        //     Component: Home
        // },
        // {
        //     path: "/post/:slug",
        //     Component: ,
        // },
    ]
}])

export default router

