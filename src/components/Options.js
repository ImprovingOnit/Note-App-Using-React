import React from 'react'
import Option from './Option'

const Options = (props) => {
    return (
        <div>
            <div className="opts-box-header">
                <h2 className="opts-box-header__title">Options</h2>
                <button className="button button--link" onClick={props.onButtonClickDeleteAll}>Remove All</button>
            </div>
            {props.options.length === 0 ? <p className="opts-box__message">Please insert your wonderful task</p> : null}
            {props.options.map((option, index) => {
                return <Option key={index} count={index + 1} option={option} onButtonClickDeleteTask={props.onButtonClickDeleteTask}/>
            })}
        </div>
    )
}


export default Options