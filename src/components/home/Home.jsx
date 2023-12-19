import React, { useState, useEffect } from 'react';

import Loading from '../global/Loading';
import UsersList from "./usersList/UsersList";
import ErrorMsg from "../global/ErrorMsg";
import { getUserData } from "../../utils/getUserData";

function Home() {

    const [userData, setUserData] = useState([])
    const [showErrMsg, setShowErrMsg] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [userLimit, setUserLimit] = useState(5)
    const [userLimitReached, setUserLimitReached] = useState(false)

    const handleTryAgain = () => {
        setIsLoading(true)
        setTimeout(() => getUserData(setUserData, setShowErrMsg, setIsLoading, userLimit, setUserLimitReached), 2000);
    }
    const handleLoadMore = () => {
        getUserData(setUserData, setShowErrMsg, setIsLoading, userLimit + 5, setUserLimitReached);
        setUserLimit(userLimit + 5)
    }

    useEffect(() => {
        getUserData(setUserData, setShowErrMsg, setIsLoading, userLimit, setUserLimit)
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