import React from "react";
import Home from "./Components/Home";
import Students from "./Components/Students";
import {Contact} from "./Components/Contact";
import {Header} from "./Components/Header";
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import {NoSuchPage} from "./Components/NoSuchPage";
import EditData from "./Components/EditData";
import InputData from "./Components/InputData";

const App = () => {
    return (
    <div id="main_container">
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Navigate to="/home"/> }/>
                <Route path="/home" element={< Home />}/>
                <Route path="/students" element={<Students />}/>
                <Route path="/edit_data/:selectedid" element={<EditData />}>
                </Route>
                <Route path="/contact" element={<Contact />} />
                <Route path="/*" element={<NoSuchPage />}/>
            </Routes>
        </Router>
    </div>);
};

export default App;