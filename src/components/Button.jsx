import React from 'react'

const Button = ({label, color}) => {
  return (
    <>
        <button className={`button-${color}`}>
            {label} - {color}
        </button>
    </>
  )
}

export default Button