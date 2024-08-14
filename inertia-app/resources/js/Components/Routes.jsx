import React from "react";
import { Route } from "react-router-dom";
import Truck from '../Pages/Truck';

export default function Routes() {
    return (
        <>
            <Routes>
                <Route path="/truck" element={<Truck />} />
            </Routes>
        </>
    );
}