import React from 'react'
import Modal from 'react-modal'

const OptionModal = (props) => {
    return (
       <Modal
            isOpen={!!props.selectedOption}
            contentLabel="Selected Option"
            onRequestClose={props.onButtonClickClearSelectedOption}
            ariaHideApp={false}
       >
           <h3>Selected Option</h3>
           {props.selectedOption && <p>{props.selectedOption}</p>}
           <button onClick={props.onButtonClickClearSelectedOption}>Yeah This's my task I have to do!</button>
       </Modal>
    )
}



export default OptionModal