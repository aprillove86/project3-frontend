import { Link } from 'react-router-dom'
import React from 'react'

const Nav = (props) => {
    return (
        <div className='navigation'>
            <Link to='/about'>
                <div>About</div>
            </Link>
            <Link to='/main'>
                <div>Landing</div>
            </Link>
            <Link to='/sneakers'>
                <div>Rewards</div>
            </Link>
        </div>

    )
}
export default Nav