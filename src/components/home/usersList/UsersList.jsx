import React from 'react';

import UserFeild from './UserFeild';

function UsersList({ users }) {
    return (
        <div className="mt-[100px]">
            {
                users.length &&
                users.map((user) => {
                    return (
                        <div className="flex-row items-center lg:flex bg-white text-black mt-[32px] shadow-[0px_5px_20px_0px_darkBlue] rounded-xl">
                            <UserFeild title="Name" value={user.name} /> 
                            <UserFeild title="Username" value={user.username} /> 
                            <UserFeild title="Email" value={user.email} /> 
                        </div>
                    )
                })
            }
        </div>
    )
}

export default UsersList