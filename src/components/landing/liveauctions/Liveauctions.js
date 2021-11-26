import  { React,useState } from 'react';
import { Link } from 'react-router-dom';

import './liveacution.scss';
import ReactApexChart from "react-apexcharts";
const LiveAucations = () => {
    const [options, setobject] = useState(
        {
          chart: {
            height: 350,
            type: 'area'
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth'
          },
        //   xaxis: {
        //     type: 'datetime',
        //     categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
        //   },
          tooltip: {
            x: {
              format: 'dd/MM/yy HH:mm'
            },
          },
        },
      )
      const [series, setseries] = useState(
        [
          {
            name: 'series1',
            data: [31, 40, 28, 51, 42, 109, 100]
          }
          // {
          //   name: 'series2',
          //   data: [11, 32, 45, 32, 34, 52, 41]
          // }
        ]
      )
    
    return (
        <>

            <section className="live-auctions ">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-12">
                            <div className="outer-main">
                                <div className="ff">
                                    <div className="img">
                                        <img src="\roobin\rhp2.png" alt="" className=" img-sddf" />
                                    </div>
                                    <div className="buttonss">
                                        <button>Dashboard</button>
                                    </div>
                                </div>
                                <div className="ff">
                                    <div className="img">
                                        <img src="\roobin\icon2.png" alt="" className=" img-sddf" />
                                    </div>
                                    <div className="buttonss">
                                        <Link to="/marketplace"><button>Marketplace</button></Link>
                                    </div>
                                </div>
                                <div className="ff">
                                    <div className="img">
                                        <img src="\roobin\icon3.png" alt="" className=" img-sddf" />
                                    </div>
                                    <div className="buttonss">
                                        <button>Wallet</button>
                                    </div>
                                </div>
                                <div className="ff">
                                    <div className="img">
                                        <img src="\roobin\icon4.png" alt="" className=" img-sddf" />
                                    </div>
                                    <div className="buttonss">
                                        <button>Staking</button>
                                    </div>
                                </div>

                                <div className="ff">
                                    <div className="img">
                                        <img src="\roobin\icon5.png" alt="" className=" img-sddf" />
                                    </div>
                                    <div className="buttonss">
                                        <button>Launchpad</button>
                                    </div>
                                </div>
                                <div className="ff">
                                    <div className="img">
                                        <img src="\roobin\icon6.png" alt="" className="img-sddf" />
                                    </div>
                                    <div className="buttonss">
                                        <button>News</button>
                                    </div>
                                </div>
                                <div className="ff">
                                    <div className="img">
                                        <img src="\roobin\icon7.png" alt="" className="img-sddf" />
                                    </div>
                                    <div className="buttonss">
                                        <button>Minigames</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-9 col-lg-8 main-image-ss">
                            <div className="image-back-main ">
                                {/* <img src="\roobin\background-new.png" alt="" className="img-fluid img-sddf" /> */}
                                {/* <h4>THE BEST PLACE TO COLLECT BUY<br></br>AND SELL <span>AWESOME NFT</span></h4> */}
                                <div className="row">
                                    <div className="col-sm-4 p-0">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="buttonssss">
                                                    <button>
                                                        xRHP
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="buttonsssss">
                                                    <button>
                                                        xHOW
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="upper-mains">
                                                    <div className="description">
                                                        <h5>XRHP HOLDINGS : 1.100.000</h5>
                                                        <h5>TOTAL USD PAID : 1.100$</h5>
                                                    </div>
                                                    <div className="outer">
                                                        <div className="innerleft">
                                                            <h6>Actual Price USD</h6>
                                                            <h6>24H Change</h6>
                                                            <h6>Market Cap USD</h6>
                                                            <h6>Market Cap 24th Change</h6>
                                                            <h6>Holders</h6>
                                                            <h6>Holders Change 24th</h6>
                                                            <h6>Total Supply</h6>
                                                        </div>
                                                        <div className="innerright">
                                                        <h6>0.00003421</h6>
                                                            <h6>0.21%</h6>
                                                            <h6>17.938</h6>
                                                            <h6>0.0231</h6>
                                                            <h6>112122</h6>
                                                            <h6>0.23%</h6>
                                                            <h6>5.000.000.000</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-offset-1 ml-md-auto">
                                        <div className="card-main-dash">
                                            <div className="inner-chart">
                                                <h4>xRHP HOLDINGS : 1.1.00.00</h4>
                                                <h4>TOTAL USD PAID : 1.100$</h4>
                                                <div id="chart">
                                                <ReactApexChart options={options} series={series} type="area" height={300} />
                                                </div>
                                                <div className="minds mb-1">
                                                    <p>MAX 0.0006146</p>
                                                    <p>MIN 0.0003307</p>
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

export default LiveAucations;
