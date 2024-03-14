import { Navigate, Route, Routes } from "react-router-dom";
import { PaymentPage } from "../pages/";

export const PaymentRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<PaymentPage />} />
            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
    );
};
