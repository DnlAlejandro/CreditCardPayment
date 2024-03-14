import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { PaymentRoutes } from "../payment/routes/PaymentRoutes";

export const AppRouter = () => {
    const status = 'authenticated'
    return (
        <Routes>
            {status === "authenticated" ? (
                <Route path="/*" element={<PaymentRoutes />} />
            ) : (
                <Route path="/auth/*" element={<AuthRoutes />} />
            )}
            <Route path="/*" element={<Navigate to="/auth/login" />} />
        </Routes>
    );
};
