import React from 'react'

function CustomIcon({color,icon}) {
  return (
    <div className='d-flex justify-content-center align-items-center 'style={{
        backgroundColor:{color},
        width:'30px',
        height:'30px'
    }}>
        <img src={icon}></img>
    </div>
  )
}

export default CustomIcon