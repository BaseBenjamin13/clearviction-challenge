import React from 'react';
import { PropsForErrorDisplay } from '../../types/types';

function ErrorMsg({ errMsg, handleTryAgain }: PropsForErrorDisplay) {
    return (
        <div>
            <h2 className="text-[32px]">{errMsg}</h2>
            <h2 className="text-[22px]">Sorry, please try again later.</h2>
            <button onClick={handleTryAgain} className="m-[20px] bg-mainBlue text-white font-bold text-[32px] p-[10px] rounded-2xl shadow-[0px_5px_20px_0px_black]">
                Try Again
            </button>
        </div>
    )
}

export default ErrorMsg