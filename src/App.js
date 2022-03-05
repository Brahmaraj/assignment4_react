import React from "react";
import Home from "./Components/Home";
import Students from "./Components/Students";
import {Contact} from "./Components/Contact";
import {Header} from "./Components/Header";
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import {NoSuchPage} from "./Components/NoSuchPage";
import { EditData } from "./Components/EditData";
import { StudentContext } from "./Components/StudentContext";
import {AddStudent} from "./Components/AddStudent";


const App = () => {
    return (
    <StudentContext>
        <div id="main_container">
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Navigate to="/home"/> }/>
                    <Route path="/home" element={< Home />}/>
                    <Route path="/students" element={<Students />}/>
                    <Route path="/student-desc" element={<AddStudent />} />
                    <Route path="/student-desc/:selectedid" element={<EditData />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/*" element={<NoSuchPage />}/>
                </Routes>
            </Router>
        </div>
    </StudentContext>
    );
};

export default App;