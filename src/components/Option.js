import React from 'react'

const Option = (props) => {
    return (
        <div className="option">
            <p className="option__text">{props.count}. {props.option}</p>
            <button 
                onClick={() => props.onButtonClickDeleteTask(props.option)}
                    className="button button--link"
                >Remove</button>
        </div>
    )
}

export default Option