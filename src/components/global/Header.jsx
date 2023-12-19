import React from 'react'

function Header({ pageTitle }) {
  return (
    <div className="shadow-xl p-[10px] rounded-xl">
        <h1>{pageTitle}</h1>
    </div>
  )
}

export default Header