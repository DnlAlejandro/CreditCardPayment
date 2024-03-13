import "./styles.css";
import { BrowserRouter } from "react-router-dom";
import { PaymentApp } from "./PaymentApp";
import { Provider } from "react-redux";
import { store } from "./store";
import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <PaymentApp />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
