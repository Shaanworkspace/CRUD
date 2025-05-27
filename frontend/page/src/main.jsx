import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root')); // ✅ Use createRoot here
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
