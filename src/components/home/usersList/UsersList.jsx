import React from 'react';

import UserFeild from './UserFeild';

function UsersList({ users, handleLoadMore, userLimitReached }) {
    return (
        <div className="mt-[75px]">
            {
                users.length &&
                users.map((user) => {
                    return (
                        <div key={user.id} className="flex-row items-center lg:flex bg-white text-black mt-[32px] shadow-[0px_5px_20px_0px_darkBlue] rounded-xl">
                            <UserFeild title="Name" value={user.name} />
                            <UserFeild title="Username" value={user.username} />
                            <UserFeild title="Email" value={user.email} />
                        </div>
                    )
                })
            }
            {userLimitReached ?
                <div className="m-[5px] xl:mr-[30px] shadow-xl p-[10px] rounded-xl">
                    <h2 className="text-[22px]">You have reached the end!</h2>
                </div>
                :
                <button onClick={handleLoadMore} className="m-[20px] bg-[blue] text-[white] font-bold text-[22px] p-[10px] rounded-2xl shadow-[0px_5px_20px_0px_black]">Load More</button>
            }
        </div>
    )
}

export default UsersList