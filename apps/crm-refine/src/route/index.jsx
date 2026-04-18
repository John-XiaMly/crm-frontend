import { createBrowserRouter } from "react-router";
import { MainLayout } from "@/layout/MainLayout.jsx";
import { CustomerList } from "@/pages/customer/CustomerList.jsx";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: 'customers',
                element: <CustomerList />,
            }
        ]
    }
]);