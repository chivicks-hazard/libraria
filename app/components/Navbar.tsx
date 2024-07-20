import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" href="#">Libraria</Link>
                <ul className="nav navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" href="#">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="#">Categories</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' href="#">Sign Up</Link>
                    </li>
                </ul>
            </div>
        </nav>
        
    )
}

export default Navbar