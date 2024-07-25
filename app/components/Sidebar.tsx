import Link from "next/link"
import { FaHouse } from "react-icons/fa6"

const Sidebar = () => {
    return (
        <div className="p-4 bg-dark">
            <div className="d-flex flex-column">
                <ul className="nav flex-column justify-content-between">
                    <li className="nav-item p-2 border border-3">
                        <Link className="nav-link" href="#">Home</Link>
                    </li>
                    <li className="nav-item p-2 border border-3">
                        <Link className="nav-link" href="#">Infographics</Link>
                    </li>
                    <li className="nav-item p-2 border border-3">
                        <Link className="nav-link" href="#">Books</Link>
                    </li>
                    <li className="nav-item p-2 border border-3">
                        <Link className="nav-link" href="#">Users</Link>
                    </li>
                    <li className="nav-item p-2 border border-3">
                        <Link className="nav-link" href="#">Settings</Link>
                    </li>
                    <li className="nav-item p-2 border border-3">
                        <Link className="nav-link" href="#">Link</Link>
                    </li>
                </ul>
            </div>
        </div>     
    )
}

export default Sidebar 