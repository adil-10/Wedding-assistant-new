import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie'
import "../ComponentStyle/Login.css";


export const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [, setCookies] = useCookies(["access_token"])

    const goToSignUpPage = () => {
        navigate('/SignUp');
    };

    const goToHomePage = () => {
        navigate('/HomePage');
    };

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const response = await Axios.post('http://localhost:3001/auth/login', {
                email: email,
                password: password
            })
            window.alert('Login successfull')
            setCookies("access_token", response.data.token)
            window.localStorage.setItem("userID", response.data.userID)
            goToHomePage();
        }
        catch (error) {
            console.error(error);
        }
    };


    return (
        <div className='Container'>
            <header className='Header-Container'>
                <h1 className='Title'>Wedding Helper</h1>
            </header>

            <main>
                <form className='Input-Container'>
                    <h2>
                        Login
                    </h2>
                    <div>
                        <p>Email</p>
                        <input
                            type='text'
                            name='email'
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                        />
                    </div>
                    <div>
                        <p>Password</p>
                        <input
                            type='text'
                            name='password'
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }} />
                    </div>
                    <br />
                    <button className='Login-Button' onClick={handleLogin}>Login</button>
                    <br />
                    <button className='Need-An-Account-Button' onClick={goToSignUpPage}>Need an account?</button>
                </form>
            </main>

            <footer className='Footer-Title'>
                <p >Created by Adil Badat</p>
            </footer>

        </div>
    )
}