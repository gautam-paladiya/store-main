import React from 'react'

function GreyBG({children}) {
  return (
    <div className="light-bg h-100 pt-3 pb-5">
        {children}
    </div>
  )
}

export default GreyBG