import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Welcome from "./Pages/Welcome";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Studio from "./Pages/Studio";
import Email from "./Pages/Email";
import Detail from "./Pages/Detail";

export default function Anddress() {
    return(
        <BrowserRouter>
           <Routes>
                <Route exact path="*" element={<Welcome />} />
                <Route path="/infinity/home" element={<Home />} />
                <Route path="/infinity/products" element={<Products />} />
                <Route path="/infinity/studio" element={<Studio />} />
                <Route path="/infinity/email" element={<Email />} />
                <Route path="/infinity/detail" element={<Detail />} />
            </Routes> 
        </BrowserRouter>
    )
}
