import React from 'react';
import './App.scss';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Homepage from "./pages/homepage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={(<Homepage />)}></Route>
            </Routes>
        </Router>
    );
}

export default App;
