import {Suspense} from "react";
import {createRoot} from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {App} from './components/App'
import {About} from "./pages/about";
import {Shop} from "./pages/shop";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: 'about',
                element: <Suspense fallback={'Loading...'}><
                    About/>
                </Suspense>
            },
            {
                path: 'shop',
                element: <Suspense fallback={'Loading...'}><Shop/></Suspense>,
                children: [
                    {
                        path: ':id',
                        element: <div>User</div>
                    }
                ]
            }
        ]
    },
])

const container = createRoot(document.getElementById('root')!)

container.render(<RouterProvider router={router}/>)
