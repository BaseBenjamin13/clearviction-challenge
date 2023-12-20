import axios from "axios";

import { PropsForGetUserData } from '../types/types';

export function getUserData({ setUserData, setShowErrMsg, setIsLoading }: PropsForGetUserData) {
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
            if (res.data.length >= 1) {
                setUserData(res.data)
                setIsLoading(false)
                setShowErrMsg(false)
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