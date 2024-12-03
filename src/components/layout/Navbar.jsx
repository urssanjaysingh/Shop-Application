import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    return (
        <Fragment>
            <nav className="navbar">
                <div className="container">
                    <div className="navbar-brand">
                        <Link className="navbar-item" to="/">
                            <i className="fas fa-store fa-2x"></i>
                        </Link>
                        <button
                            className={`navbar-burger ${
                                isActive ? "is-active" : ""
                            }`}
                            aria-label="menu"
                            aria-expanded="false"
                            onClick={toggleMenu}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                    <div
                        className={`navbar-menu ${isActive ? "is-active" : ""}`}
                        id="nav-links"
                    >
                        <div className="navbar-end is-flex is-flex-direction-column is-align-items-center is-align-items-end-tablet">
                            <div className="navbar-item">
                                <div className="buttons">
                                    <Link
                                        to="/add-product"
                                        className="button is-primary"
                                    >
                                        <strong className="has-text-white">
                                            Add Product
                                        </strong>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </Fragment>
    );
};

export default Navbar;
