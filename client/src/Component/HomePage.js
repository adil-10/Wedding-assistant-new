// // working

// //need to get the rooms that the creates

// import React, { useEffect, useState } from "react";
// import Axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import "../ComponentStyle/HomePage.css";


// export const HomePage = () => {
//     const navigate = useNavigate();
//     const [roomName, setRoomName] = useState('')
//     const [allUsersRoom, setAllUsersRoom] = useState([]);
//     const userID = localStorage.getItem('userID');

//     const goToIndividualRoomPage = (roomName) => {
//         navigate(`/IndividualRoomPage`);
//     };

//     //Upon loading or reloading, display users current room
//     useEffect(() => {
//         Axios.get(`http://localhost:3001/auth/viewRoom/${userID}`,)
//             .then((response) => {
//                 setAllUsersRoom(response.data);
//             })
//             .catch((error) => {
//                 console.log('Error', error)
//             });
//     }, []);

//     //Upon loading or reloading, display users current room
//     const refreshRoom = async (event) => {
//         Axios.get(`http://localhost:3001/auth/viewRoom/${userID}`,)
//             .then((response) => {
//                 setAllUsersRoom(response.data);
//             })
//             .catch((error) => {
//                 console.log('Error', error)
//             });
//     };

//     //Create the room
//     const handleRoomCreation = async (event) => {
//         event.preventDefault();
//         try {
//             await Axios.post('http://localhost:3001/auth/createRoom', {
//                 userID: userID,
//                 roomName: roomName
//             })
//                 .then((response) => {
//                     console.log('Success', response);
//                     refreshRoom();
//                 })
//         }
//         catch (error) {
//             console.error(error);
//         }
//     };
//     //Join a room
//     const joinRoom = async (event) => {
//         event.preventDefault();
//         try {
//             await Axios.patch('http://localhost:3001/auth/joinRoom', {
//                 roomName: roomName,
//                 userID: userID,
//             })
//                 .then((response) => {
//                     console.log('Success', response);
//                     refreshRoom();
//                 })
//         }
//         catch (error) {
//             console.error(error);
//         }
//     };

//     return (
//         <div className='HomePage-Container'>
//             <header>
//                 <p>Top of page</p>
//                 <img className='Website-Logo' src="LogoWebsite.jpeg" alt="Logo" />
//             </header>
//             <input
//                 type='text'
//                 name='roomName'
//                 onChange={(e) => {
//                     setRoomName(e.target.value)
//                 }} />
//             <button onClick={handleRoomCreation}>Create a room</button>
//             <button onClick={joinRoom}>join a room</button>

//             <main className='Main-Container'>
//                 <div className='HomePage-Border'>
//                     {allUsersRoom.map(room => (
//                         <div key={room._id}>
//                             <button onClick={goToIndividualRoomPage}>{room.roomName}</button>
//                         </div>
//                     ))}
//                 </div>
//             </main >

//             <footer>
//                 <p >Created by Adil Badat</p>
//             </footer>

//         </div >
//     )
// }



// need to get the rooms that the creates
//i need to pass the selected room to the individual room page, and from there based on the selected room, display all the info about it
import React, { useEffect, useState } from "react";
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../ComponentStyle/HomePage.css";


export const HomePage = () => {
    const navigate = useNavigate();
    const [roomName, setRoomName] = useState('')
    const [allUsersRoom, setAllUsersRoom] = useState([]);
    const [allRoomID, setRoomID] = useState([]);
    const userID = localStorage.getItem('userID');

    const goToIndividualRoomPage = (roomID) => {
        navigate(`/individualRoomPage/${roomID}`);
    };

    //Upon loading or reloading, display users current room
    useEffect(() => {
        Axios.get(`http://localhost:3001/auth/viewRoom/${userID}`,)
            .then((response) => {
                setAllUsersRoom(response.data);
            })
            .catch((error) => {
                console.log('Error', error)
            });
    }, []);

    //Upon loading or reloading, display users current room
    const refreshRoom = async (event) => {
        Axios.get(`http://localhost:3001/auth/viewRoom/${userID}`,)
            .then((response) => {
                setAllUsersRoom(response.data);
            })
            .catch((error) => {
                console.log('Error', error)
            });
    };

    //Create the room
    const handleRoomCreation = async (event) => {
        event.preventDefault();
        try {
            await Axios.post('http://localhost:3001/auth/createRoom', {
                userID: userID,
                roomName: roomName
            })
                .then((response) => {
                    console.log('Success', response);
                    refreshRoom();
                })
        }
        catch (error) {
            console.error(error);
        }
    };
    //Join a room
    const joinRoom = async (event) => {
        event.preventDefault();
        try {
            await Axios.patch('http://localhost:3001/auth/joinRoom', {
                roomName: roomName,
                userID: userID,
            })
                .then((response) => {
                    console.log('Success', response);
                    refreshRoom();
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
            <button onClick={joinRoom}>join a room</button>

            <main className='Main-Container'>
                <div className='HomePage-Border'>
                    {allUsersRoom.map(room => (
                        <div key={room._id}>
                            <button onClick={() => goToIndividualRoomPage(room._id)}>{room.roomName}</button>
                        </div>
                    ))}
                </div>
            </main >

            <footer>
                <p >Created by Adil Badat</p>
            </footer>

        </div >
    )
}



