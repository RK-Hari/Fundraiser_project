import React from "react"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import FrontPage from "../frontpage/Frontpage"
import Contact from "../contact/contact"
import Login from "../loginpage/Login"

export default function Mainpage(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FrontPage/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}