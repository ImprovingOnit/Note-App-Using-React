import React from 'react'

const Action = (props) => {
    return (
        <div>
            <button 
                disabled={!props.hasOptions} 
                onClick={props.onButtonClickPick}
            >
            What Should I do?</button>
        </div>
    )
}

export default Action 