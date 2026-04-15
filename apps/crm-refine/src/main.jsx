import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from "@/components/ui/provider.jsx";
import { RouterProvider } from "react-router";
import { router } from "@/route/index.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider>
            <RouterProvider router={router}>
                <App/>
            </RouterProvider>
        </Provider>
    </StrictMode>,
)
