import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import DashboardPage from "../pages/DashboardPage";





export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/admin" element={<DashboardPage />} />
        </Routes>
    )
}