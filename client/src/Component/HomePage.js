import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../ComponentStyle/HomePage.css";


export const HomePage = () => {
    const [roomName, setRoomName] = useState('')
    const userID = localStorage.getItem('userID');

    const handleRoomCreation = async (event) => {
        event.preventDefault();
        try {
            await Axios.post('http://localhost:3001/auth/createRoom', {
                userID: userID,
                roomName: roomName
            })
                .then((response) => {
                    console.log('Success', response);
                })
        }
        catch (error) {
            console.error(error);
        }
    };


    return (
        <div className='HomePage-Container'>
            <header>
                <p>Top of page</p>
                <img className='Website-Logo' src="LogoWebsite.jpeg" alt="Logo" />
            </header>
            <input
                type='text'
                name='roomName'
                onChange={(e) => {
                    setRoomName(e.target.value)
                }} />
            <button onClick={handleRoomCreation}>Create a room</button>
            <main className='Main-Container'>
                <div className='HomePage-Border'>
                    <p>Test data </p>
                </div>
            </main>

            <footer>
                <p >Created by Adil Badat</p>
            </footer>

        </div>
    )
}