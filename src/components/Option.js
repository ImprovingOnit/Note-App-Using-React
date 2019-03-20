import React from 'react'

const Option = (props) => {
    return (
        <div className="option">
           {props.option}
            <button onClick={() => props.onButtonClickDeleteTask(props.option)}>Remove</button>
        </div>
    )
}

export default Option