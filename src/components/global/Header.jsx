import React from 'react'

function Header({ pageTitle }) {
  return (
    <div className="bg-red-300">
        <h1>{pageTitle}</h1>
    </div>
  )
}

export default Header