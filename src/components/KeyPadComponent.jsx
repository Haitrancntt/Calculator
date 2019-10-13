import React from 'react'
import './KeyPadComponent-style.css'

export const KeyPadComponent = ({element, classNameButton, index, onClickAction}) => {
    return (
        <button name={element} className={classNameButton} key={index} onClick={event => onClickAction(event.target.name)}>
            {element}
        </button>
    )
}

export default KeyPadComponent