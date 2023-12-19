import React, { useState, useEffect } from 'react';

import Loading from '../global/Loading';
import UsersList from "./usersList/UsersList";
import axios from "axios";

function Home() {

    const [userData, setUserData] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
            console.log(res.data)
            if(res.data.length >= 1){
                setUserData(res.data)
            }else {
                console.log('no user data');
            }
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <div className="mt-[3rem]">

            {userData.length <= 0 ?
                <Loading />
                :
                <UsersList users={userData}/>
            }

        </div>
    )
}

export default Home