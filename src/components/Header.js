import React from 'react'
import Button from './Button'

const Header = ({ title }) => {
    const onClick = (e) => {
        console.log('You clicked')
    }

    return (
        <header className="header">
            <h1>{title}</h1>
            <Button onClick={onClick}/>
        </header>
    )
}

export default Header

