import axios from "axios";

export function getUserData(setUserData, setShowErrMsg, setIsloading) {
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
            if (res.data.length >= 1) {
                setUserData(res.data)
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