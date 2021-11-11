import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default function Navbar(props) {

    const secondaryMode = ()=> {
        document.body.style.backgroundColor = '#6c757d';
    }
    const successMode = ()=> {
        document.body.style.backgroundColor = '#198754';
    }
    const dangerMode = ()=> {
        document.body.style.backgroundColor = '#dc3545';
    }
    const warningMode = ()=> {
        document.body.style.backgroundColor = '#ffc107';
    }
    const infoMode = ()=> {
        document.body.style.backgroundColor = '#0dcaf0';
    }

    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">{props.about}</Link>
                            </li>
                        </ul>
                        <button type="button" className="btn btn-secondary mx-1" onClick={secondaryMode}></button>
                        <button type="button" className="btn btn-success mx-1" onClick={successMode}></button>
                        <button type="button" className="btn btn-danger mx-1" onClick={dangerMode}></button>
                        <button type="button" className="btn btn-warning mx-1" onClick={warningMode}></button>
                        <button type="button" className="btn btn-info mx-1" onClick={infoMode}></button>
                        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'} mx-2`}>
                            <input className="form-check-input" type="checkbox" onClick={props.togglemode} role="switch" id="flexSwitchCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string
};

Navbar.defaultProps = {
    title: "set title here",
    about: "About Us"
};