import React, { useState, useEffect } from 'react';

import Loading from '../global/Loading';
import UsersList from "./usersList/UsersList";
import ErrorMsg from "../global/ErrorMsg";
import { getUserData } from "../../utils/getUserData";

function Home() {

    const [userData, setUserData] = useState([])
    const [showErrMsg, setShowErrMsg] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    const handleTryAgain = () => {
        setIsLoading(true)
        setTimeout(() => getUserData(setUserData, setShowErrMsg, setIsLoading), 2000);
    }

    useEffect(() => {
        getUserData(setUserData, setShowErrMsg, setIsLoading)
    }, [])

    return (
        <div className="mt-[3rem]">

            {
                isLoading ?
                    <Loading />
                    :
                    showErrMsg || userData.length <= 0 ?
                        <ErrorMsg errMsg="Failed to load user data." onClick={handleTryAgain} />
                        :
                        <UsersList users={userData} />

            }

        </div>
    )
}

export default Home