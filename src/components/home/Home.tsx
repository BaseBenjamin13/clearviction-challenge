import React, { useState, useEffect } from 'react';

import Loading from '../global/Loading';
import UsersList from "./usersList/UsersList";
import ErrorDisplay from "../global/ErrorDisplay";
import { getUserData } from "../../utils/getUserData";

function Home() {

    const [userData, setUserData] = useState([])
    const [showErrMsg, setShowErrMsg] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const callGetUserData = () => {
        setIsLoading(true)
        getUserData({
            setUserData: setUserData,
            setShowErrMsg: setShowErrMsg,
            setIsLoading: setIsLoading
        });
    }

    useEffect(() => {
        setIsLoading(true)
        setTimeout(() => callGetUserData(), 2000);
    }, [])

    return (
        <div className="mt-[3rem]">
            {
                isLoading ?
                    <Loading />
                    :
                    showErrMsg || userData.length <= 0 ?
                        <ErrorDisplay
                            errMsg="Failed to load user data."
                            handleTryAgain={callGetUserData}
                        />
                        :
                        <UsersList users={userData} />
            }
        </div>
    )
}

export default Home