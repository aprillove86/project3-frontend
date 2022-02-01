import { Link } from 'react-router-dom'

function Header(props) {
    return (
        <nav className='header'>
            <Link to='/about'>
                <div className='title'>
                    $(fetch) Rewards You Can Afford
                    </div>
            </Link>
        </nav>
    )
}
export default Header;