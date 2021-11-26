import React from 'react';
import { Link } from 'react-router-dom';
import './market.scss';

const Marketplace = () => {
    return (
        <>

            <section className="live-auctions ">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 main-image-ss">
                            <div className="image-back-main ">
                                <div className="nav-nmn pt-5">
                                    <div className="container">
                                        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                            <li class="nav-item">
                                                <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">My Collection</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Create Page</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Search Here</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div class="tab-content" id="pills-tabContent">
                                        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                            <div className="row">
                                                <div className="col-md-11 m-auto">
                                                    <div className="main-outer-content">
                                                        <div className="row">
                                                            <div className="col-lg-3 col-md-4 col-12 mb-3">
                                                                <div className="ITEM-CARD">
                                                                    <div className="upper-div-img">
                                                                        <img alt="" src="\roobin\live-auctions-image.png" className="img-fluid " />
                                                                    </div>


                                                                    <div className="lower-text-ares">

                                                                        <h4>Bored Ape Yacht Club</h4>
                                                                        <div className="price">
                                                                            <h6 className="mr-5">Price <span>0.081</span></h6>
                                                                            <h6>1 of 10</h6>
                                                                        </div>
                                                                        {/* <div className="datess">
                                                                            <div className="ncvb">
                                                                                <h5>86</h5>
                                                                                <p>days</p>
                                                                            </div>
                                                                            <div className="ncvb">
                                                                                <h5>03</h5>
                                                                                <p>hours</p>
                                                                            </div>
                                                                            <div className="ncvb">
                                                                                <h5>03</h5>
                                                                                <p>minutes</p>
                                                                            </div>
                                                                            <div className="ncvb">
                                                                                <h5>11</h5>
                                                                                <p>seconds</p>
                                                                            </div>
                                                                        </div> */}
                                                                        <div className="buttonss">
                                                                            <button>Sell</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col-lg-3 col-md-4 col-12 mb-3">
                                                                <div className="ITEM-CARD">
                                                                    <div className="upper-div-img">
                                                                        <img alt="" src="\roobin\nft2.jpeg" className="img-fluid " />
                                                                    </div>


                                                                    <div className="lower-text-ares">

                                                                        <h4>Bored Ape Yacht Club</h4>
                                                                        <div className="price">
                                                                            <h6 className="mr-5">Price <span>0.081</span></h6>
                                                                            <h6>1 of 10</h6>
                                                                        </div>
                                                                        {/* <div className="datess">
                                                                            <div className="ncvb">
                                                                                <h5>86</h5>
                                                                                <p>days</p>
                                                                            </div>
                                                                            <div className="ncvb">
                                                                                <h5>03</h5>
                                                                                <p>hours</p>
                                                                            </div>
                                                                            <div className="ncvb">
                                                                                <h5>03</h5>
                                                                                <p>minutes</p>
                                                                            </div>
                                                                            <div className="ncvb">
                                                                                <h5>11</h5>
                                                                                <p>seconds</p>
                                                                            </div>
                                                                        </div> */}
                                                                        <div className="buttonss">
                                                                            <button>Sell</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col-lg-3 col-md-4 col-12 mb-3">
                                                                <div className="ITEM-CARD">
                                                                    <div className="upper-div-img">
                                                                        <img alt="" src="\roobin\nft3.jpeg" className="img-fluid " />
                                                                    </div>


                                                                    <div className="lower-text-ares">

                                                                        <h4>Bored Ape Yacht Club</h4>
                                                                        <div className="price">
                                                                            <h6 className="mr-5">Price <span>0.081</span></h6>
                                                                            <h6>1 of 10</h6>
                                                                        </div>
                                                                        {/* <div className="datess">
                                                                            <div className="ncvb">
                                                                                <h5>86</h5>
                                                                                <p>days</p>
                                                                            </div>
                                                                            <div className="ncvb">
                                                                                <h5>03</h5>
                                                                                <p>hours</p>
                                                                            </div>
                                                                            <div className="ncvb">
                                                                                <h5>03</h5>
                                                                                <p>minutes</p>
                                                                            </div>
                                                                            <div className="ncvb">
                                                                                <h5>11</h5>
                                                                                <p>seconds</p>
                                                                            </div>
                                                                        </div> */}
                                                                        <div className="buttonss">
                                                                            <button>Sell</button>
                                                                        </div>
                                                                    </div>
                                                                </div>



                                                            </div>
                                                            <div className="col-lg-3 col-md-4 col-12 mb-3">
                                                                <div className="ITEM-CARD">
                                                                    <div className="upper-div-img">
                                                                        <img alt="" src="\roobin\nft6.jpeg" className="img-fluid " />
                                                                    </div>


                                                                    <div className="lower-text-ares">

                                                                        <h4>Bored Ape Yacht Club</h4>
                                                                        <div className="price">
                                                                            <h6 className="mr-5">Price <span>0.081</span></h6>
                                                                            <h6>1 of 10</h6>
                                                                        </div>
                                                                        {/* <div className="datess">
                                                                            <div className="ncvb">
                                                                                <h5>86</h5>
                                                                                <p>days</p>
                                                                            </div>
                                                                            <div className="ncvb">
                                                                                <h5>03</h5>
                                                                                <p>hours</p>
                                                                            </div>
                                                                            <div className="ncvb">
                                                                                <h5>03</h5>
                                                                                <p>minutes</p>
                                                                            </div>
                                                                            <div className="ncvb">
                                                                                <h5>11</h5>
                                                                                <p>seconds</p>
                                                                            </div>
                                                                        </div> */}
                                                                        <div className="buttonss">
                                                                            <button>Sell</button>
                                                                        </div>
                                                                    </div>
                                                                </div>



                                                            </div>
                                                            <div className="col-lg-3 col-md-4 col-12 mb-3">
                                                                <div className="ITEM-CARD">
                                                                    <div className="upper-div-img">
                                                                        <img alt="" src="\roobin\nft4.png" className="img-fluid " />
                                                                    </div>


                                                                    <div className="lower-text-ares">

                                                                        <h4>Bored Ape Yacht Club</h4>
                                                                        <div className="price">
                                                                            <h6 className="mr-5">Price <span>0.081</span></h6>
                                                                            <h6>1 of 10</h6>
                                                                        </div>
                                                                        {/* <div className="datess">
                                                                            <div className="ncvb">
                                                                                <h5>86</h5>
                                                                                <p>days</p>
                                                                            </div>
                                                                            <div className="ncvb">
                                                                                <h5>03</h5>
                                                                                <p>hours</p>
                                                                            </div>
                                                                            <div className="ncvb">
                                                                                <h5>03</h5>
                                                                                <p>minutes</p>
                                                                            </div>
                                                                            <div className="ncvb">
                                                                                <h5>11</h5>
                                                                                <p>seconds</p>
                                                                            </div>
                                                                        </div> */}
                                                                        <div className="buttonss">
                                                                            <button>Sell</button>
                                                                        </div>
                                                                    </div>
                                                                </div>



                                                            </div>
                                                            <div className="col-lg-3 col-md-4 col-12 mb-3">
                                                                <div className="ITEM-CARD">
                                                                    <div className="upper-div-img">
                                                                        <img alt="" src="\roobin\nft7.jpeg" className="img-fluid " />
                                                                    </div>


                                                                    <div className="lower-text-ares">

                                                                        <h4>Bored Ape Yacht Club</h4>
                                                                        <div className="price">
                                                                            <h6 className="mr-5">Price <span>0.081</span></h6>
                                                                            <h6>1 of 10</h6>
                                                                        </div>
                                                                        {/* <div className="datess">
                                                                            <div className="ncvb">
                                                                                <h5>86</h5>
                                                                                <p>days</p>
                                                                            </div>
                                                                            <div className="ncvb">
                                                                                <h5>03</h5>
                                                                                <p>hours</p>
                                                                            </div>
                                                                            <div className="ncvb">
                                                                                <h5>03</h5>
                                                                                <p>minutes</p>
                                                                            </div>
                                                                            <div className="ncvb">
                                                                                <h5>11</h5>
                                                                                <p>seconds</p>
                                                                            </div>
                                                                        </div> */}
                                                                        <div className="buttonss">
                                                                            <button>Sell</button>
                                                                        </div>
                                                                    </div>
                                                                </div>



                                                            </div>
                                                            <div className="col-lg-3 col-md-4 col-12 mb-3">
                                                                <div className="ITEM-CARD">
                                                                    <div className="upper-div-img">
                                                                        <img alt="" src="\roobin\nft8.webp" className="img-fluid " />
                                                                    </div>


                                                                    <div className="lower-text-ares">

                                                                        <h4>Bored Ape Yacht Club</h4>
                                                                        <div className="price">
                                                                            <h6 className="mr-5">Price <span>0.081</span></h6>
                                                                            <h6>1 of 10</h6>
                                                                        </div>
                                                                        {/* <div className="datess">
                                                                            <div className="ncvb">
                                                                                <h5>86</h5>
                                                                                <p>days</p>
                                                                            </div>
                                                                            <div className="ncvb">
                                                                                <h5>03</h5>
                                                                                <p>hours</p>
                                                                            </div>
                                                                            <div className="ncvb">
                                                                                <h5>03</h5>
                                                                                <p>minutes</p>
                                                                            </div>
                                                                            <div className="ncvb">
                                                                                <h5>11</h5>
                                                                                <p>seconds</p>
                                                                            </div>
                                                                        </div> */}
                                                                        <div className="buttonss">
                                                                            <button>Sell</button>
                                                                        </div>
                                                                    </div>
                                                                </div>



                                                            </div>
                                                            <div className="col-lg-3 col-md-4 col-12 mb-3">
                                                                <div className="ITEM-CARD">
                                                                    <div className="upper-div-img">
                                                                        <img alt="" src="\roobin\nft9.jpeg" className="img-fluid " />
                                                                    </div>


                                                                    <div className="lower-text-ares">
                                                                        <h4>Bored Ape Yacht Club</h4>
                                                                        <div className="price">
                                                                            <h6 className="mr-5">Price <span>0.081</span></h6>
                                                                            <h6>1 of 10</h6>
                                                                        </div>
                                                                        {/* <div className="datess">
                                                                            <div className="ncvb">
                                                                                <h5>86</h5>
                                                                                <p>days</p>
                                                                            </div>
                                                                            <div className="ncvb">
                                                                                <h5>03</h5>
                                                                                <p>hours</p>
                                                                            </div>
                                                                            <div className="ncvb">
                                                                                <h5>03</h5>
                                                                                <p>minutes</p>
                                                                            </div>
                                                                            <div className="ncvb">
                                                                                <h5>11</h5>
                                                                                <p>seconds</p>
                                                                            </div>
                                                                        </div> */}
                                                                        <div className="buttonss">
                                                                            <button>Sell</button>
                                                                        </div>
                                                                    </div>
                                                                </div>



                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                            <div className="row">
                                                <div className="col-md-7 m-auto">
                                                    <div className="main-outer-content">
                                                        <div className="col-xl-12 col-lg-12 col-md-12  col-12  main-paddss">

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
                                                                <div className="anme-button text-center mt-5">
                                                                        <button>Create Now</button>
                                                                    </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                                            <div className="row">
                                                <div className="col-md-11 m-auto">
                                                    <div className="main-outer-content">
                                                        <div className="search-items">
                                                            <div className="search-in">
                                                                <form className="form-inline my-2 my-lg-0">
                                                                    <input class="m-auto" type="search" placeholder="Search Collection" aria-label="Search" />
                                                                </form>
                                                                <div className="icons-search">
                                                                    <i class="fas fa-search"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-lg-3 col-md-4 col-12 mb-3">
                                                                <div className="ITEM-CARD">
                                                                    <div className="upper-div-img">
                                                                        <img alt="" src="\roobin\live-auctions-image.png" className="img-fluid " />
                                                                    </div>


                                                                    <div className="lower-text-ares">

                                                                        <h4>Bored Ape Yacht Club</h4>
                                                                        <div className="price">
                                                                            <h6 className="mr-5">Price <span>0.081</span></h6>
                                                                            <h6>1 of 10</h6>
                                                                        </div>
                                                                        {/* <div className="datess">
                                                                            <div className="ncvb">
                                                                                <h5>86</h5>
                                                                                <p>days</p>
                                                                            </div>
                                                                            <div className="ncvb">
                                                                                <h5>03</h5>
                                                                                <p>hours</p>
                                                                            </div>
                                                                            <div className="ncvb">
                                                                                <h5>03</h5>
                                                                                <p>minutes</p>
                                                                            </div>
                                                                            <div className="ncvb">
                                                                                <h5>11</h5>
                                                                                <p>seconds</p>
                                                                            </div>
                                                                        </div> */}
                                                                        <div className="buttonss">
                                                                            <button>Buy Now</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col-lg-3 col-md-4 col-12 mb-3">
                                                                <div className="ITEM-CARD">
                                                                    <div className="upper-div-img">
                                                                        <img alt="" src="\roobin\nft2.jpeg" className="img-fluid " />
                                                                    </div>


                                                                    <div className="lower-text-ares">

                                                                        <h4>Bored Ape Yacht Club</h4>
                                                                        <div className="price">
                                                                            <h6 className="mr-5">Price <span>0.081</span></h6>
                                                                            <h6>1 of 10</h6>
                                                                        </div>
                                                                        {/* <div className="datess">
                                                                            <div className="ncvb">
                                                                                <h5>86</h5>
                                                                                <p>days</p>
                                                                            </div>
                                                                            <div className="ncvb">
                                                                                <h5>03</h5>
                                                                                <p>hours</p>
                                                                            </div>
                                                                            <div className="ncvb">
                                                                                <h5>03</h5>
                                                                                <p>minutes</p>
                                                                            </div>
                                                                            <div className="ncvb">
                                                                                <h5>11</h5>
                                                                                <p>seconds</p>
                                                                            </div>
                                                                        </div> */}
                                                                        <div className="buttonss">
                                                                            <button>Buy Now</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col-lg-3 col-md-4 col-12 mb-3">
                                                                <div className="ITEM-CARD">
                                                                    <div className="upper-div-img">
                                                                        <img alt="" src="\roobin\nft3.jpeg" className="img-fluid " />
                                                                    </div>


                                                                    <div className="lower-text-ares">

                                                                        <h4>Bored Ape Yacht Club</h4>
                                                                        <div className="price">
                                                                            <h6 className="mr-5">Price <span>0.081</span></h6>
                                                                            <h6>1 of 10</h6>
                                                                        </div>
                                                                        {/* <div className="datess">
                                                                            <div className="ncvb">
                                                                                <h5>86</h5>
                                                                                <p>days</p>
                                                                            </div>
                                                                            <div className="ncvb">
                                                                                <h5>03</h5>
                                                                                <p>hours</p>
                                                                            </div>
                                                                            <div className="ncvb">
                                                                                <h5>03</h5>
                                                                                <p>minutes</p>
                                                                            </div>
                                                                            <div className="ncvb">
                                                                                <h5>11</h5>
                                                                                <p>seconds</p>
                                                                            </div>
                                                                        </div> */}
                                                                        <div className="buttonss">
                                                                            <button>Buy Now</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-3 col-md-4 col-12 mb-3">
                                                                <div className="ITEM-CARD">
                                                                    <div className="upper-div-img">
                                                                        <img alt="" src="\roobin\nft6.jpeg" className="img-fluid " />
                                                                    </div>
                                                                    <div className="lower-text-ares">
                                                                        <h4>Bored Ape Yacht Club</h4>
                                                                        <div className="price">
                                                                            <h6 className="mr-5">Price <span>0.081</span></h6>
                                                                            <h6>1 of 10</h6>
                                                                        </div>
                                                                        {/* <div className="datess">
                                                                            <div className="ncvb">
                                                                                <h5>86</h5>
                                                                                <p>days</p>
                                                                            </div>
                                                                            <div className="ncvb">
                                                                                <h5>03</h5>
                                                                                <p>hours</p>
                                                                            </div>
                                                                            <div className="ncvb">
                                                                                <h5>03</h5>
                                                                                <p>minutes</p>
                                                                            </div>
                                                                            <div className="ncvb">
                                                                                <h5>11</h5>
                                                                                <p>seconds</p>
                                                                            </div>
                                                                        </div> */}
                                                                        <div className="buttonss">
                                                                            <button>Buy Now</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-3 col-md-4 col-12 mb-3">
                                                                <div className="ITEM-CARD">
                                                                    <div className="upper-div-img">
                                                                        <img alt="" src="\roobin\nft4.png" className="img-fluid " />
                                                                    </div>
                                                                    <div className="lower-text-ares">
                                                                        <h4>Bored Ape Yacht Club</h4>
                                                                        <div className="price">
                                                                            <h6 className="mr-5">Price <span>0.081</span></h6>
                                                                            <h6>1 of 10</h6>
                                                                        </div>
                                                                        {/* <div className="datess">
                                                                            <div className="ncvb">
                                                                                <h5>86</h5>
                                                                                <p>days</p>
                                                                            </div>
                                                                            <div className="ncvb">
                                                                                <h5>03</h5>
                                                                                <p>hours</p>
                                                                            </div>
                                                                            <div className="ncvb">
                                                                                <h5>03</h5>
                                                                                <p>minutes</p>
                                                                            </div>
                                                                            <div className="ncvb">
                                                                                <h5>11</h5>
                                                                                <p>seconds</p>
                                                                            </div>
                                                                        </div> */}
                                                                        <div className="buttonss">
                                                                            <button>Buy Now</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-3 col-md-4 col-12 mb-3">
                                                                <div className="ITEM-CARD">
                                                                    <div className="upper-div-img">
                                                                        <img alt="" src="\roobin\nft7.jpeg" className="img-fluid " />
                                                                    </div>


                                                                    <div className="lower-text-ares">

                                                                        <h4>Bored Ape Yacht Club</h4>
                                                                        <div className="price">
                                                                            <h6 className="mr-5">Price <span>0.081</span></h6>
                                                                            <h6>1 of 10</h6>
                                                                        </div>
                                                                        {/* <div className="datess">
                                                                            <div className="ncvb">
                                                                                <h5>86</h5>
                                                                                <p>days</p>
                                                                            </div>
                                                                            <div className="ncvb">
                                                                                <h5>03</h5>
                                                                                <p>hours</p>
                                                                            </div>
                                                                            <div className="ncvb">
                                                                                <h5>03</h5>
                                                                                <p>minutes</p>
                                                                            </div>
                                                                            <div className="ncvb">
                                                                                <h5>11</h5>
                                                                                <p>seconds</p>
                                                                            </div>
                                                                        </div> */}
                                                                        <div className="buttonss">
                                                                            <button>Buy Now</button>
                                                                        </div>
                                                                    </div>
                                                                </div>



                                                            </div>
                                                            <div className="col-lg-3 col-md-4 col-12 mb-3">
                                                                <div className="ITEM-CARD">
                                                                    <div className="upper-div-img">
                                                                        <img alt="" src="\roobin\nft8.webp" className="img-fluid " />
                                                                    </div>


                                                                    <div className="lower-text-ares">

                                                                        <h4>Bored Ape Yacht Club</h4>
                                                                        <div className="price">
                                                                            <h6 className="mr-5">Price <span>0.081</span></h6>
                                                                            <h6>1 of 10</h6>
                                                                        </div>
                                                                        {/* <div className="datess">
                                                                            <div className="ncvb">
                                                                                <h5>86</h5>
                                                                                <p>days</p>
                                                                            </div>
                                                                            <div className="ncvb">
                                                                                <h5>03</h5>
                                                                                <p>hours</p>
                                                                            </div>
                                                                            <div className="ncvb">
                                                                                <h5>03</h5>
                                                                                <p>minutes</p>
                                                                            </div>
                                                                            <div className="ncvb">
                                                                                <h5>11</h5>
                                                                                <p>seconds</p>
                                                                            </div>
                                                                        </div> */}
                                                                        <div className="buttonss">
                                                                            <button>Buy Now</button>
                                                                        </div>
                                                                    </div>
                                                                </div>



                                                            </div>
                                                            <div className="col-lg-3 col-md-4 col-12 mb-3">
                                                                <div className="ITEM-CARD">
                                                                    <div className="upper-div-img">
                                                                        <img alt="" src="\roobin\nft9.jpeg" className="img-fluid " />
                                                                    </div>


                                                                    <div className="lower-text-ares">
                                                                        <h4>Bored Ape Yacht Club</h4>
                                                                        <div className="price">
                                                                            <h6 className="mr-5">Price <span>0.081</span></h6>
                                                                            <h6>1 of 10</h6>
                                                                        </div>
                                                                        {/* <div className="datess">
                                                                            <div className="ncvb">
                                                                                <h5>86</h5>
                                                                                <p>days</p>
                                                                            </div>
                                                                            <div className="ncvb">
                                                                                <h5>03</h5>
                                                                                <p>hours</p>
                                                                            </div>
                                                                            <div className="ncvb">
                                                                                <h5>03</h5>
                                                                                <p>minutes</p>
                                                                            </div>
                                                                            <div className="ncvb">
                                                                                <h5>11</h5>
                                                                                <p>seconds</p>
                                                                            </div>
                                                                        </div> */}
                                                                        <div className="buttonss">
                                                                            <button>Buy Now</button>
                                                                        </div>
                                                                    </div>
                                                                </div>



                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Marketplace;
