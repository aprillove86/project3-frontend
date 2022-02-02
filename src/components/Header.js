import { Link } from 'react-router-dom'

function Header(props) {
    return (
        <nav className='header'>
            <Link to='/about'>
                <div className='title'>
                    <h1>$(fetch) Rewards You Can Afford</h1>
                    </div>
            </Link>
        </nav>
    )
}
export default Header;