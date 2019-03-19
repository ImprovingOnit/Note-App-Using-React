import React from 'react'
import Option from './Option'

const Options = (props) => {
    return (
        <div>
            <h2>Options</h2>
            {props.options.length === 0 ? <p>Please insert task</p> : null}
            {props.options.map((option, index) => {
                return <Option key={index} option={option} onButtonClickDeleteTask={props.onButtonClickDeleteTask}/>
            })}
            <button onClick={props.onButtonClickDeleteAll}>Remove All</button>
        </div>
    )
}


export default Options