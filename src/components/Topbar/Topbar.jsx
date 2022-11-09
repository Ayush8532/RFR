import React from 'react'
import "./Topbar.css";
import {Link} from 'react-router-dom';

function Topbar() {
    const user=true;
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link className="navbar-brand" to="/">रक्तदान</Link>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active link" aria-current="page" to='/'>HOME</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">ABOUT</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/contact">CONTACT</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/write">DONATE</Link>
                            </li>
                            <li className="nav-item">                                  
                                <Link className="nav-link active" aria-current="page" to="/login~">{user&&"LOGOUT"}</Link>
                            </li>
                        </ul>
                        <form className="d-flex right">
                            {
                                user?(
                                    <Link to='/settings'>
                                <img src="https://d33wubrfki0l68.cloudfront.net/1fa5d5db38d24786b36e58bf0562f1d821b12ef6/e61d8/static/inviteyourownheader1-878b5db230ca8e78e1451814ba07a834.jpg" className='topimg' alt="dp" /></Link>
                                ):(<>
                                    <Link className="nav-link active link nav-item" aria-current="page" to="/login">LOGIN</Link>
                                    <Link className="nav-link active link nav-item" aria-current="page" to="/register">REGISTER</Link>
                                    </>)
                            }
                            <i className="fa-solid fa-magnifying-glass seaicon"></i>    
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Topbar