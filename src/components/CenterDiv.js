import React from 'react'

function CenterDiv({children}) {
  return (
    <div className='d-flex justify-content-center align-items-center flex-column mt-2 pb-4' style={{
        backgroundColor:'white'
    }}>
        {children}
    </div>
  )
}

export default CenterDiv