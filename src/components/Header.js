import React from 'react'

const Header = (props) => {
    return (
        <div className="header">
            <h1 className="header__title">{props.title}</h1>
            {props.subTitle && <h2 className="header__subtitle">{props.subTitle}</h2>}
        </div>
    )
}


Header.defaultProps = {
    title: 'Note-App Defualt'
}


export default Header 