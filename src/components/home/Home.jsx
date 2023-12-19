import React, { useState, useEffect } from 'react';
import axios from "axios";

import Loading from '../global/Loading';
import UsersList from "./usersList/UsersList";
import ErrorMsg from "../global/ErrorMsg";

function Home() {

    const refresh = () => window.location.reload(true)

    const [userData, setUserData] = useState([])
    const [showErrMsg, setShowErrMsg] = useState(false)

    const handleTryAgain = () => {
        refresh()
    }

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/user')
            .then((res) => {
                console.log(res.data)
                if (res.data.length >= 1) {
                    setUserData(res.data)
                } else {
                    console.log('no user data');
                    setShowErrMsg(true)
                }
            })
            .catch((err) => {
                console.log(err)
                setShowErrMsg(true)
            })
    }, [])

    return (
        <div className="mt-[3rem]">

            {userData.length <= 0 ?
                showErrMsg ?
                    <ErrorMsg errMsg="Failed to load user data." onClick={handleTryAgain}/>
                    :
                    <Loading />
                :
                <UsersList users={userData} />
            }

        </div>
    )
}

export default Home