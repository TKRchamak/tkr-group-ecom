import React, { useContext } from 'react';
import logo from '../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { cartContest } from '../../App';

const Header = () => {

    const [cart] = useContext(cartContest);
    const decimalFix = (num) => {
        return (num.toFixed(2));
    }
    const totalQuantity = +decimalFix(cart.reduce((result, pd) => result + pd.quantity, 0));

    return (
        <div className="bg-light pt-2 pb-2">
            <div className="text-center m-2">
                <img src={logo} className="img-fluid" alt="" style={{ height: "80px" }} />
            </div>
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <div className="container-fluid">
                            <div className="m-auto" style={{ width: "auto" }}>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                            </div>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    {/* <li className="nav-item">
                                        <Link className="nav-link" aria-current="page" to="/">Home</Link>
                                    </li> */}
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/shop">Shop</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/cart/review">Review</Link>
                                    </li>
                                </ul>
                                <div>
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/logIn"><FontAwesomeIcon icon={faUserCircle} /></Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/cart/review"><FontAwesomeIcon icon={faCartArrowDown} />{totalQuantity}</Link>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="container p-2">
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    );
};

export default Header;