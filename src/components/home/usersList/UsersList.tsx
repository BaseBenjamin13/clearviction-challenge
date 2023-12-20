import React from 'react';

import { PropsForUsersList } from '../../../types/types';
import UserFeild from './UserFeild';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

function UsersList({ users }: PropsForUsersList) {

    let screenWidth = screen.width;
    console.log(screenWidth)

    const columns: GridColDef[] = [
        { field: 'name', headerClassName: 'bg-mainBlue text-[28px] text-white shadow-lg rounded-xl', headerName: 'Name', width: 300, },
        { field: 'username', headerClassName: 'bg-mainBlue text-[28px] text-white shadow-lg rounded-xl ', headerName: 'Username', width: 300 },
        { field: 'email', headerClassName: 'bg-mainBlue text-[28px] text-white shadow-lg rounded-xl', headerName: 'Email', width: 300 },
    ];

    return (
        <div className="mt-[75px]">
            <div className="w-[400px] sm:w-[100%] hidden md:block " >
                <DataGrid
                    sx={{

                    }}
                    className='bg-mainBlue rounded-[50px]'
                    getRowClassName={() => `bg-white text-[20px]`}
                    rows={users}
                    columns={columns} />
            </div>
            <div className="block md:hidden">
                {
                    users.length &&
                    users.map((user) => {
                        return (
                            <div key={user.id} className="flex-row items-center lg:flex bg-white text-black mt-[32px] shadow-[0px_5px_10px_0px_black] rounded-[50px]">
                                <UserFeild title="Name" value={user.name} />
                                <UserFeild title="Username" value={user.username} />
                                <UserFeild title="Email" value={user.email} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default UsersList