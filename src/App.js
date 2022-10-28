import { BrowserRouter,Routes,Route } from "react-router-dom";
import React from "react";
import Home from "./home";
import Contact from './contact';
import Story from './story';

import App1 from './App1';
// import Nav from './nav';
// import Form from './pages/form';
// import Nav from "./pages/nav";
// import Account from "./pages/account";
// import Sell from "./pages/sell";
// import About from './pages/about';
 import Login from "./login";
function App()
{
  return(
    <BrowserRouter>
    {/* <Nav/> */}
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Contact" element={<Contact/>}></Route>
      <Route path="/App1" element={<App1/>}></Route>
      <Route path="/Login" element={<Login/>}></Route>
      <Route path="/Story" element={<Story/>}></Route>
      {/* <Route path="/Form" element={</>}></Route>
      <Route path="/Sell" element={<Sell/>}></Route>
      <Route path="/About" element={<About/>}></Route> */}

    </Routes>
    </BrowserRouter>
  );
}
export default App;