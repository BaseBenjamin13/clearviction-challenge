import axios from "axios";

export function getUserData(setUserData, setShowErrMsg, setIsloading, userLimit, setUserLimitReached) {
    setIsloading(true)
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
            if (res.data.length >= 1) {
                if(userLimit >= res.data.length){
                    setUserData(res.data)
                    setUserLimitReached(true)
                } else{
                    setUserData(res.data.slice(0, userLimit))
                }
                setIsloading(false)
            } else {
                console.log('no user data');
                setShowErrMsg(true)
                setIsloading(false)
            }
        })
        .catch((err) => {
            console.log(err)
            setShowErrMsg(true)
            setIsloading(false)
        })
}