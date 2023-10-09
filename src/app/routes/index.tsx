import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Dashboard, Redirect } from './../pages'

export const RoutesComponent = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/pagina-inicial" element={<Dashboard />} />


                <Route path="*" element={<Redirect />} />
            </Routes>
        </BrowserRouter>
    )
};