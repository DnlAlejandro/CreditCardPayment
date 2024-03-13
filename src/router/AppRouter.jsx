import { Route, Routes } from "react-router-dom";
import { PaymentApp } from "../PaymentApp";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/*" element={<PaymentApp />} />
        </Routes>
    );
};
