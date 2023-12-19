import React from 'react'
import { PropsForUsersField } from '../../../types/types';

function UserFeild({ title, value }: PropsForUsersField) {
  return (
    <div className="flex justify-center">
        <div className="m-[5px] mr-[0px] shadow-lg p-[10px] rounded-xl ">
            <h2 className="text-[22px] text-mainBlue">{title}:</h2>
        </div>
        <div className="m-[5px] xl:mr-[30px] shadow-xl p-[10px] rounded-xl">
            <h2 className="text-[22px]">{value}</h2>
        </div>
    </div>
  )
}

export default UserFeild