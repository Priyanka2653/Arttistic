import React, { useState } from "react";
import logo from "./images/logo1.jpeg";


export const Register = (props) => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');


    const handleSubmit = (e) => {
        e.preventDefualt();
        console.log(email);
    }

    return (
        <div className="auth-form-container">

            <div className="logoimg">
                <img src={logo}  alt="hello" />
                <h2>Register</h2>
            </div>

           
            <form className="register-form" onSubmit={handleSubmit}>

                <label htmlFor="name"></label>
                <input value={name} name="name" id="name" placeholder="Username"></input>
                <label htmlFor="email"></label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email address" id="email" name="email"></input>
                <label htmlFor="password"></label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" id="password" name="password" />
                <button className="button1" type="submit">Register</button>
            </form>
           

            <label htmlFor="">Already have an account?<button className="link-btn" onClick={() => props.onFormSwitch('login')}>Login here.</button></label>
           
        </div>
    );


}