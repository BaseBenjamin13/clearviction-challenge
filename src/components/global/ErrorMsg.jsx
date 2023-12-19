import React from 'react'

function ErrorMsg({ errMsg, onClick }) {
    return (
        <div>
            <h2 className="text-[32px]">{errMsg}</h2>
            <h2 className="text-[22px]">Sorry, please try again later.</h2>
            <button onClick={onClick} className="m-[20px] bg-white text-[#242424] font-bold text-[32px] p-[10px]">Try Again</button>
        </div>
    )
}

export default ErrorMsg