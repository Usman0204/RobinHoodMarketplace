import './App.scss';
import React from 'react';
import Landing from './components/landing/Landing.js';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Footer from './components/landing/footer/Footer.js';
import Navbar from './components/landing/header/Navbar.js';
// import CreateNft from './components/createnft/CreateNft';
// import Explore from './components/explore/Explore.js';
// import DetailPage from './components/detailpage/DetailPage.js';
// import NftRent from './components/rentdetail/Nftrent.js';
// import DetailBid from './components/detailpage/DetailBid';
// import DetailRent from './components/detailpage/Detailrent';
// import DetailSwap from './components/detailpage/Detailswap';
// import CollectionDetail from './components/collection-detail/Collection-detail';
// import Collection from './components/collection-detail/Collection-main';
// import NftSwap from './components/Nft-swap-detail/NftSwap';
// import LiveAuctions from './components/liveauction/LiveAuction';
// import BuyNow from './components/buynow/BuyNow';
// import SellerLeaderBoard from './components/sellerleaderboard/SellerLeaderBoard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useWeb3React } from '@web3-react/core';
// import CreateItem from './components/createitem/Createitem';
// import Profile from './components/profile/Profile';
import Marketplace from './components/marketplace/Marketplace';

function App() {
  const { account } = useWeb3React();
  return (
    <>
      <ToastContainer />
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Landing} />
          {/* {account &&
            <Route exact path='/createnft' component={CreateNft} />
          } */}
          {/* <Route exact path='/createitem' component={CreateItem} /> */}
          {/* <Route exact path='/profile' component={Profile} />
          <Route exact path='/collection' component={CreateItem} /> */}
          <Route exact path='/marketplace' component={Marketplace} />
          {/* <Route exact path='/liveauctions' component={LiveAuctions} />
          <Route exact path='/buynow' component={BuyNow} />
          <Route exact path='/sellerleaderboard' component={SellerLeaderBoard} />
          <Route exact path='/itemdetail' component={DetailPage} />
          <Route exact path='/Nftrent' component={NftRent} />
          <Route exact path='/detailbid' component={DetailBid} />
          <Route exact path='/detailrent' component={DetailRent} />
          <Route exact path='/detailswap' component={DetailSwap} />
          <Route exact path='/collection' component={Collection} />
          <Route exact path='/collectiondetail' component={CollectionDetail} />
          <Route exact path='/nftswap' component={NftSwap} /> */}
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
