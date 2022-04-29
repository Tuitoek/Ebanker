import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [firstname, setFirstName] = useState('');
    const [username, setUsername] = useState('');
    const [lastname, setLastName] = useState('');
    const [accountnumber, setAccountNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [msg, setMsg] = useState('');
    const history = useNavigate();

    const Register = async(e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/users', {
                firstname: firstname,
                lastname: lastname,
                username: username,
                accountnumber: accountnumber,
                password: password,
                confPassword: confPassword
            });
            history.push("/");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }

    return ( <
        section className = "hero is-fullheight is-fullwidth" >
        <
        div className = "hero-body" >
        <
        div className = "container" >
        <
        div className = "columns is-centered" >
        <
        div className = "column is-4-desktop" >
        <
        form onSubmit = { Register }
        className = "box" >
        <
        p className = "has-text-centered" > { msg } < /p> <
        div className = "field mt-5" >
        <
        label className = "label" > First Name < /label> <
        div className = "controls" >
        <
        input type = "text"
        className = "input"
        placeholder = "First Name"
        value = { firstname }
        onChange = {
            (e) => setFirstName(e.target.value)
        }
        /> < /
        div > <
        /div> <
        div className = "field mt-5" >
        <
        label className = "label" > Last Name < /label> <
        div className = "controls" >
        <
        input type = "text"
        className = "input"
        placeholder = "Last Name"
        value = { lastname }
        onChange = {
            (e) => setLastName(e.target.value)
        }
        /> < /
        div > <
        /div> <
        div className = "field mt-5" >
        <
        label className = 'label' > Username < /label> <
        input type = "text"
        className = "input"
        placeholder = "Username"
        value = { username }
        onChange = {
            (e) => setUsername(e.target.value)
        }
        /> < /div >
        <
        div classNam = "field mt-5" >
        <
        label className = 'label' > Account Number < /label> <
        input type = "text"
        className = "input"
        placeholder = "Account Number"
        value = { accountnumber }
        onChange = {
            (e) => setAccountNumber(e.target.value)
        }
        /><  /
        div > <
        div className = "field mt-5" >
        <
        label className = "label" > Password < /label> <
        div className = "controls" >
        <
        input type = "password"
        className = "input"
        placeholder = "******"
        value = { password }
        onChange = {
            (e) => setPassword(e.target.value)
        }
        /> < /
        div > <
        /div> <
        div className = "field mt-5" >
        <
        label className = "label" > Confirm Password < /label> <
        div className = "controls" >
        <
        input type = "password"
        className = "input"
        placeholder = "******"
        value = { confPassword }
        onChange = {
            (e) => setConfPassword(e.target.value)
        }
        /> < /
        div > <
        /div> <
        div className = "field mt-5" >
        <
        button className = "button is-success is-fullwidth" > Register < /button> < /
        div > <
        /form> < /
        div > <
        /div> < /
        div > <
        /div> < /
        section >
    )
}

export default Register