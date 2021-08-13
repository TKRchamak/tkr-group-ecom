import React, { useContext } from 'react';
import logo from '../../../images/logo.png';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown, faUserCircle, faShippingFast, faCalendarAlt, faWallet, faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { cartContest, userContest } from '../../../App';

const Header = () => {

    const [cart] = useContext(cartContest);
    const [user] = useContext(userContest);
    const decimalFix = (num) => {
        return (num.toFixed(2));
    }
    const totalQuantity = +decimalFix(cart.reduce((result, pd) => result + pd.quantity, 0));

    return (
        <div className="bg-light pt-2 pb-2">
            <div className="text-center m-2">
                {/* <img src={logo} className="img-fluid" alt="" style={{ height: "80px" }} /> */}
                <h1 className="LogoStyle">TKR group</h1>
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
                                    <li className="nav-item p-2">
                                        <Link className="nav-link" to="/home">Home</Link>
                                    </li>
                                    <li className="nav-item p-2">
                                        <Link className="nav-link" to="/shop">Shop</Link>
                                    </li>
                                    <li className="nav-item p-2">
                                        <Link className="nav-link" to="/cart/review">Review</Link>
                                    </li>
                                    <li className="nav-item p-2">
                                        <Link className="nav-link" to="/dashboard">Dashboard</Link>
                                    </li>
                                    <li className="nav-item p-2 dropdown">
                                        <Link className="nav-link dropdown-toggle" to="/shop" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                            Products
                                        </Link>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                            <li><Link className="dropdown-item" to="/shop" >Men's Collection</Link></li>
                                            <li><Link className="dropdown-item" to="/shop" >Women's Collection</Link></li>
                                            <li><Link className="dropdown-item" to="/shop" >Lather Collection</Link></li>
                                        </ul>
                                    </li>
                                    {/* <li className="nav-item">
                                        <Link className="nav-link" to="/admin">Admin</Link>
                                    </li> */}
                                </ul>
                                <div>
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <form className="d-flex nav-item p-2">
                                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                            <button className="btn btn-outline-success" type="submit">Search</button>
                                        </form>
                                        <li className="nav-item p-2">
                                            <Link className="nav-link" to="/login"><FontAwesomeIcon icon={faUserCircle} />{user.name}</Link>
                                        </li>
                                        <li className="nav-item p-2">
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

            </div>
            <div className="container">
                <div className="row pt-3 pb-3">
                    <div className="col-md-3">
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="fs-3 pe-3">
                                <FontAwesomeIcon icon={faShippingFast} />
                            </div>
                            <div>
                                <h6>Free shipping item</h6>
                                <small>For all orders over $500 </small>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="fs-3 pe-3">
                                <FontAwesomeIcon icon={faCalendarAlt} />
                            </div>
                            <div>
                                <h6>Money back guarantee</h6>
                                <small>100% money back guarantee</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="fs-3 pe-3">
                                <FontAwesomeIcon icon={faWallet} />
                            </div>
                            <div>
                                <h6>Cash on delivery</h6>
                                <small>Lorem ipsum dolor amet consect</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="fs-3 pe-3">
                                <FontAwesomeIcon icon={faPhoneSquareAlt} />
                            </div>
                            <div>
                                <h6>Help & Support</h6>
                                <small>Call us : + 0123.4567.89</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;