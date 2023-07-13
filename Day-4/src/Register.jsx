import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [firstname, setfirstName] = useState('');
    const [lastname, setlastName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">First name</label>
            <input value={firstname} firstname="name" onChange={(e) => setfirstName(e.target.value)} id="firstname" placeholder="first Name" />
            <label htmlFor="name">Last name</label>
            <input value={lastname} lastname="name" onChange={(e) => setlastName(e.target.value)} id="lastname" placeholder="Last Name" />
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="email@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />

            <button type="submit">Submit</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Login here.</button>
    </div>
    )
}