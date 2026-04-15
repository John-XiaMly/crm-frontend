import { createBrowserRouter } from "react-router";
import { MainLayout } from "@/layout/MainLayout.jsx";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />
    }
]);