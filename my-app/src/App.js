// use routers
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Convert from './pages/Convert'
import Auth from './pages/Auth'
import NavBar from './components/NavBar'

function App() {

    
    return (
    <>
    <NavBar />
    <Routes>
        <Route path ="/" element = {<Home />} />
        <Route path ="/convert" element = {<Convert />} />
        <Route path ="/auth" element = {<Auth />} />
    </Routes>
    </>
    );
}

export default App;