import React from "react"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import HomePage from "./Homepage/Homepage"
import Contact from "./contact/contact"
import Login from "./loginpage/Login"
import Fundraisermain from "./fundraisermain/Fundraisermain"
import Fundraiser from "./Fundraiser/Fundraiser"
import AboutPage from "./About/about";
import TermsAndConditions from "./loginpage/terms"
export default function App()
{
  return(
      <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}></Route>
                <Route path="/terms" element={<TermsAndConditions/>}></Route>
                <Route path="/homepage" element={<HomePage/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
                <Route path="/fundraisermainpage" element={<Fundraisermain/>}></Route>
                <Route path="/fundraiser" element={<Fundraiser/>}></Route>
                <Route path="/about" element={<AboutPage/>}></Route>
            </Routes>
      </BrowserRouter>
  )
}
