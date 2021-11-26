import React from 'react';
import './footer.scss';
const Footer = () => {
    return (
        <>
           
                <section className="main-footer ptb">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-11 m-auto">
                                <div className="row">
                                    <div className="col-sm-4 text-white">
                                        <div className="left-side-fot">
                                            {/* <h4>Roobin Hood</h4>
                                            <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing  elit. Pellentesque aliquam diam non dui dignissim pulvinar.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing  elit. 
                                            </p> */}
                                            <div className="socials">
                                                <div className="mm">
                                                <i class="fab fa-instagram"></i>
                                                </div>
                                                <div className="mm">
                                                <i class="fab fa-facebook-f"></i>
                                                </div>
                                                <div className="mm">
                                                <i class="fab fa-twitter"></i>
                                                </div>
                                                <div className="mm">
                                                <i class="fab fa-facebook-messenger"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 text-white">
                                        <div className="mid-m-fot">
                                        <a className="" href="#">
                                        <img src="\roobin\logo-fot.png" className="img-fluid img-mdnh" />
                                    </a>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 text-white">
                                        {/* <div className="right-side-fot">
                                            <ul className="abb">
                                                <h4>About</h4>
                                                <li><a href="#">History</a></li>
                                                <li><a href="#">Our team</a></li>
                                                <li><a href="#">Guidelines</a></li>
                                                <li><a href="#">Conditions</a></li>
                                                <li><a href="#">Policy</a></li>
                                            </ul>
                                            <ul className="abb">
                                                <h4>Services</h4>
                                                <li><a href="#">How to Order</a></li>
                                                <li><a href="#">Our Products</a></li>
                                                <li><a href="#">Order Status</a></li>
                                                <li><a href="#">Promo</a></li>
                                                <li><a href="#">Payment Status</a></li>
                                            </ul>
                                            <ul className="abb">
                                                <h4>Other</h4>
                                                <li><a href="#">Contact Us</a></li>
                                                <li><a href="#">Help</a></li>
                                                <li><a href="#">Privacy</a></li>
                                            </ul>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="row">
                            <div className="col-sm-3">
                                <div className="inner-logo">
                                    <a className="" href="#">
                                        <img src="\opencanvas-marketplace\header\logo.svg" className="img-fluid" />
                                    </a>
                                    <ul className="list-inline ptb20">
                                        <li className="list-inline-item">
                                            <a>
                                                <img src="\opencanvas-marketplace\footer\facebook-icon.svg" className="img-fluid" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a>
                                                <img src="\opencanvas-marketplace\footer\twitter-icon.svg" className="img-fluid" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a>
                                                <img src="\opencanvas-marketplace\footer\instagram-icon.svg" className="img-fluid" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a>
                                                <img src="\opencanvas-marketplace\footer\linkedin-icon.svg" className="img-fluid" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-2">
                                <div className="inner-icon">
                                    <h5 className="">Navigation</h5>

                                    <ul className="">
                                        <li>
                                            <a className="grey" href="#">
                                                Home
                                            </a>
                                        </li>
                                        <li>
                                            <a className="grey" href="#">
                                                Explore
                                            </a>
                                        </li>
                                        <li>
                                            <a className="grey" href="#">
                                                Wallet
                                            </a>
                                        </li>
                                        <li>
                                            <a className="grey" href="#">
                                                Author
                                            </a>
                                        </li>
                                        <li>
                                            <a className="grey" href="#">
                                                Blog
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-2">
                                <div className="inner-icon">
                                    <h5 className="">Explore</h5>

                                    <ul className="">
                                        <li>
                                            <a className="grey" href="#">
                                                Explore Artwork
                                            </a>
                                        </li>
                                        <li>
                                            <a className="grey" href="#">
                                                Single Artwork
                                            </a>
                                        </li>
                                        <li>
                                            <a className="grey" href="#">
                                                Explore Creators
                                            </a>
                                        </li>
                                        <li>
                                            <a className="grey" href="#">
                                                Single Creators
                                            </a>
                                        </li>
                                        <li>
                                            <a className="grey" href="#">
                                                Community
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-2">
                                <div className="inner-icon">
                                    <h5 className="">Community</h5>

                                    <ul className="">
                                        <li>
                                            <a className="grey" href="#">
                                                Partners
                                            </a>
                                        </li>
                                        <li>
                                            <a className="grey" href="#">
                                                Help Center
                                            </a>
                                        </li>
                                        <li>
                                            <a className="grey" href="#">
                                                Suggestions
                                            </a>
                                        </li>
                                        <li>
                                            <a className="grey" href="#">
                                                Blog
                                            </a>
                                        </li>
                                        <li>
                                            <a className="grey" href="#">
                                                Newsletter
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="inner-icon">
                                    <h5 className="">Subscribe Us</h5>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Your e-mail address" aria-label="Enter your email" aria-describedby="basic-addon2" />
                                        <div className="input-group-append">
                                            <a className="" href="#">
                                                <img src="\opencanvas-marketplace\footer\send-icon.svg" className="img-fluid btn-common" />
                                            </a>
                                        </div>
                                        <h6 className="grey">Your privacy protected! We dont disclose Email.</h6>
                                    </div>
                                </div>
                            </div>                      </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="text-center ptb20">
                                    <p className="grey">© 2021 OpenCanvas. All Rights  Reserved</p>
                                </div>
                            </div>
                        </div>
                    */}
                    </div>
                </section>
           
        </>
    )
}

export default Footer;
