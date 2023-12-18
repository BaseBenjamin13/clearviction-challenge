import React, { useState, useEffect } from 'react';

import Loading from '../global/Loading';
import UsersList from "./usersList/UsersList";

function Home() {

    const [userData, setUserData] = useState([])

    return (
        <div className="mt-[3rem]">

            {userData.length <= 0 ?
                <Loading />
                :
                <UsersList />
            }

        </div>
    )
}

export default Home