import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie'
import "../ComponentStyle/HomePage.css";
import Tabs from "./Tabs";

export const HomePage = () => {

    return (
        <div className='HomePage-Container'>
            <header>
                <p>Top of page</p>
                <img className='Website-Logo' src="LogoWebsite.jpeg" alt="Logo" />
            </header>

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