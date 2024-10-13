import React from 'react'
import "../app.css"

function rectangle(props) {
  return (
    <div className='rectangle'>
      <p className='centeredtext'>{props.name}</p>
    </div>
  )
}

export default rectangle
