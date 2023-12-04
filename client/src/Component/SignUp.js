import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../ComponentStyle/SignUp.css";

export const SignUp = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const goToLogin = () => {
        navigate('/');
    };

    const createAccount = async (event) => {
        event.preventDefault();
        try {
            await Axios.post('http://localhost:3001/auth/register', {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password
            })
                .then((response) => {
                    console.log('Success', response);
                })
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className='Container'>
            <header className='Header-Container'>
                <h1 className='Title'>Wedding Helper</h1>
            </header>

            <main>
                <form className='Input-Container'>
                    <h2>
                        SignUp
                    </h2>

                    <div>
                        <p>First Name</p>
                        <input
                            type='text'
                            name='firstName'
                            onChange={(e) => {
                                setFirstName(e.target.value)
                            }}
                        />
                    </div>

                    <div>
                        <p>Last Name</p>
                        <input
                            type='text'
                            name='lastName'
                            onChange={(e) => {
                                setLastName(e.target.value)
                            }}
                        />
                    </div>

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
                            }}
                        />
                    </div>

                    <div>
                        <p>Re Enter Password</p>
                        <input />
                    </div>

                    <br />
                    <button className='SignUp-Button' onClick={createAccount}>Sign Up</button>
                    <br />
                    <button className='Got-An-Account-Button' onClick={goToLogin}>Got an account?</button>
                </form>
            </main>

            <footer className='Footer-Title'>
                <p >Created by Adil Badat</p>
            </footer>

        </div>
    )
}