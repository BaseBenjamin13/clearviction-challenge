import axios from "axios";

import { PropsForGetUserData } from '../types/types';

export function getUserData({setUserData, setShowErrMsg, setIsLoading, userLimit, setUserLimitReached}: PropsForGetUserData ) {
    setIsLoading(true)
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
            console.log(res.data)
            if (res.data.length >= 1) {
                if(userLimit >= res.data.length){
                    setUserData(res.data)
                    setUserLimitReached(true)
                } else{
                    setUserData(res.data.slice(0, userLimit))
                }
                setIsLoading(false)
            } else {
                console.log('no user data');
                setShowErrMsg(true)
                setIsLoading(false)
            }
        })
        .catch((err) => {
            console.log(err)
            setShowErrMsg(true)
            setIsLoading(false)
        })
}