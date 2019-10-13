import React from 'react'
import './ScreenDisplayComponent-style.css'


export const ScreenDisplayComponent = ({ result }) => {
    return (
        <input disabled className='screen-display' value={result} placeholder='0' />
    )
}

export default ScreenDisplayComponent