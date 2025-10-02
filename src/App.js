import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./components/Home";
import { AdminRSVP } from "./components/AdminRSVP";

export default function App() {
    return (
        <Router basename="/wedding">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/admin" element={<AdminRSVP />} />
            </Routes>
        </Router>
    );
}
