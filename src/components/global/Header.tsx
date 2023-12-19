import React from 'react'

import { PropsForHeader } from "../../types/types";

function Header({ pageTitle }: PropsForHeader) {
  return (
    <div className="shadow-xl p-[10px] rounded-xl">
        <h1>{pageTitle}</h1>
    </div>
  )
}

export default Header