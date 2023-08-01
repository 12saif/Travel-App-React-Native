import React from 'react'
import '../Header/Header.css'

const Header = () => {
    return (
        <div className='container-header yPadding'>
            <div className='logo'>
                <h1>Travlog</h1>
            </div>
            <div className='button-top-right'>
                <button>Log In</button>
                <button>Sign Up</button>
            </div>
        </div>
    )
}

export default Header
