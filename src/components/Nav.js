import { Link } from 'react-router-dom'
import React from 'react'

const Nav = (props) => {
    return (
               
      
        <div className='navigation'>
                <h3>$(fetch)</h3>
            <Link to='/about'>
                <div>About</div>
            </Link>
            <Link to='/sneakers'>
                <div>Trophy Case</div>
            </Link>
            <Link to='/'>
                <div>Claim a Reward</div>
            </Link>
        </div>

    )
}
export default Nav