import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AddFollower, RemoveFollower, GetNumberOfFollowers, GetAlreadyFollowed } from '../../redux/action';
import CopyToClipboard from 'react-copy-to-clipboard';
import { useHistory } from "react-router-dom";
import './profile.scss';
// import Navbar from '../landing/header/Navbar.js';
const Profile = () => {
    return (
        <>
            <div className="profile-mains">
                {/* <Navbar /> */}
                <section className="profiles-back">
                    <div className="container profiless">
                        <div className="action-button">
                         
                            <h3>Create New Item</h3>
                        </div>
                    </div>
                </section>
                <section className="Profile-main-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 p-0">
                                <div className="row">
                                    <div className="col-xl-3 col-lg-4 col-md-12 col-12 main-profile-pad">
                                        <div className="side-profilessss">
                                            <div className="upperimage-nff">
                                                <img alt="" src="\roobin\our-team-background.png" className="img-fluid " />
                                            </div>
                                            <div className="main-image-d text-center">
                                                <img alt="" src="\roobin\icon2.png" className="img-fluid side-pf-img" />
                                                <h2>Morgan Weight</h2>
                                                <h4>Creative NFT Designer</h4>
                                                <p>
                                                    Lorem ipsum dolor Pellentesque faucibus at dui vel semper. Maecenas eleifend .
                                                </p>
                                                <div className="cop-clipss">
                                                    <h5>sdhds7373cshcv...</h5>
                                                    <button><i class="fas fa-copy"></i></button>
                                                </div>
                                                {/* <p>dsdcdcdcdcdc</p> */}

                                                <div className="socialss">
                                                    <div className="mnmn">
                                                        <a><i class="fab fa-facebook-f"></i></a>
                                                    </div>
                                                    <div className="mnmn">
                                                        <a><i class="fab fa-twitter"></i></a>
                                                    </div>
                                                    <div className="mnmn">
                                                        <a><i class="fab fa-google-plus-g"></i></a>
                                                    </div>
                                                    <div className="mnmn">
                                                        <a><i class="fab fa-linkedin-in"></i></a>
                                                    </div>
                                                    <div className="mnmn">
                                                        <a><i class="fab fa-instagram"></i></a>
                                                    </div>
                                                </div>
                                                <div className="followw">
                                                    <button className="fllow" type="button" >Follow</button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-9 col-lg-8 col-md-12  col-12  main-paddss">
                                      
                                        <div className="right-side-mbn">
                                            <h4>Create New Item</h4>
                                            <h5>Create Item</h5>

                                            <div className="upload-item">
                                                <h5>Upload Item File</h5>
                                                <div className="outer-items">
                                                    <p>PNG, GIF, WEBP, MP4 or MP3. Max 100mb</p>
                                                    <label className="buttonsdi" for="filess">Upload File</label>
                                                    <input type="file" id="filess" className="d-none"></input>
                                                </div>

                                            </div>

                                            <div className="form-mnb">

                                                <div class="form-group">

                                                    <input type="text" class="form-control" placeholder="Item name" id="exampleitemname" aria-describedby="emailHelp" />
                                                </div>
                                                <div className="choosecat">
                                                    <h6>Choose Item Category</h6>
                                                    <div className="outer-choose">
                                                        <button><i class="fas fa-list-ul"></i>Art</button>
                                                        <button><i class="fas fa-camera-retro"></i>Photography</button>
                                                        <button><i class="fas fa-futbol"></i>Sports</button>
                                                        <button><i class="far fa-image"></i>Painting</button>
                                                        <button><i class="far fa-heart"></i>Collectibles</button>
                                                        <button><i class="fas fa-exchange-alt"></i>Gifts</button>
                                                    </div>
                                                </div>
                                                <div class="form-group mt-4 mb-5">
                                                    <label>Item Description</label>
                                                    <textarea type="text" class="form-control" id="exampleitemname" aria-describedby="emailHelp" />
                                                </div>
                                                <div class="form-group">

                                                    <input type="text" class="form-control" placeholder="Item Price in ETH" id="exampleitemname" aria-describedby="emailHelp" />
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6 col-12 pl-md-0">
                                                        <div class="form-group">

                                                            <input type="text" class="form-control" placeholder="Royalties" id="exampleitemname" aria-describedby="emailHelp" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-12 pr-md-0">
                                                        <div class="form-group">

                                                            <input type="text" class="form-control" placeholder="Size" id="exampleitemname" aria-describedby="emailHelp" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-group">

                                                    <input type="text" class="form-control" id="exampleitemname" placeholder="Number of copies" aria-describedby="emailHelp" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
       
        </>
    )
}

export default Profile;