import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";


function App() {
    return ( <
        Router >
        <
        Fragment > <
        Routes >
        <
        Route exact path = "/"
        element = { <
            Login / >
        } >
        <
        /Route> <
        Route path = "/register"
        element = { <
            Register / >
        } > <
        /Route> <
        Route path = "/dashboard"
        element = { <
            Dashboard / >
        } > < /
        Route > < /Routes > < /Fragment > < /Router >
    );
}

export default App;