import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    const [credentials, setCredentials] = useState({
        Email: '',
        Password: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();


        let {Email, Password } = credentials
        let res = await fetch("https://jumjibackend.onrender.com/login", {
            method: "post",
            body: JSON.stringify({
               Email, Password
            }), headers: {
                "content-Type": "application/json"
            }
        })
        let result = await res.json()

        if (result.status === false) {
            alert(result.data)
        } else {
            alert("Login succesfully")

        }
        

        // Reset the form fields after submission
        setCredentials({
            email: '',
            password: '',
        });
    };

    return (
        <>
            <h2>Login</h2>
            <div className="container">

                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            name="Email"
                            value={credentials.Email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input
                            type="password"
                            name="Password"
                            value={credentials.Password}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <button type="submit">Login</button>
                    <p><Link to={"/signup"}>  Don't have account ?</Link> <Link to={"/forgetpassword"}>Forget Password</Link></p>
                </form>
            </div>
            
        </>
    );
};

export default Login;
