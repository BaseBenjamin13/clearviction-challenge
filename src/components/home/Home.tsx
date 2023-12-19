import React, { useState, useEffect } from 'react';

import Loading from '../global/Loading';
import UsersList from "./usersList/UsersList";
import ErrorDisplay from "../global/ErrorDisplay";
import { getUserData } from "../../utils/getUserData";

function Home() {

    const [userData, setUserData] = useState([])
    const [showErrMsg, setShowErrMsg] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [userLimit, setUserLimit] = useState(5)
    const [userLimitReached, setUserLimitReached] = useState(false)

    const handleTryAgain = () => {
        setIsLoading(true)
        setTimeout(() => {
            getUserData({
                setUserData: setUserData, 
                setShowErrMsg: setShowErrMsg, 
                setIsLoading: setIsLoading, 
                userLimit: userLimit, 
                setUserLimitReached: setUserLimitReached
            });
        }, 2000);
    }
    const handleLoadMore = () => {
        console.log('ran')
        getUserData({
            setUserData: setUserData, 
            setShowErrMsg: setShowErrMsg, 
            setIsLoading: setIsLoading, 
            userLimit: userLimit + 5, 
            setUserLimitReached: setUserLimitReached
        });
        setUserLimit(userLimit + 5)
    }

    useEffect(() => {
        getUserData({
            setUserData: setUserData, 
            setShowErrMsg: setShowErrMsg, 
            setIsLoading: setIsLoading, 
            userLimit: userLimit, 
            setUserLimitReached: setUserLimitReached
        });
        console.log(userData)
    }, [])

    return (
        <div className="mt-[3rem]">

            {
                isLoading ?
                    <Loading />
                    :
                    showErrMsg || userData.length <= 0 ?
                        <ErrorDisplay errMsg="Failed to load user data." handleTryAgain={handleTryAgain} />
                        :
                        <UsersList 
                            users={userData} 
                            handleLoadMore={handleLoadMore} 
                            userLimitReached={userLimitReached}
                        />

            }

        </div>
    )
}

export default Home