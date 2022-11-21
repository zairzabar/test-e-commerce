import './Header.css'

export default function Header() {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <div className="nav-btn">
                    <a className="navbar-brand" href="#">Apni Dukan</a>
                    <div>
                        <button className="btn btn-outline-dark btn-success">Sign up</button>
                        <button className="btn btn-outline-dark btn-primary">Sign in</button>
                    </div>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>
    )    
}
                        // <li className="nav-item dropdown">
                        //         <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        //             Shop
                        //         </a>
                        //         <ul className="dropdown-menu">
                        //             <li><a className="dropdown-item" href="#">iPhone 14 pro</a></li>
                        //             <li><hr className="dropdown-divider" /></li>
                        //             <li><a className="dropdown-item" href="#">iPhone 13</a></li>
                        //             <li><a className="dropdown-item" href="#">iPhone 12</a></li>
                        //         </ul>
                        //         </li>