import React from "react";
import kufterx from "../images/kufterexchange.png";
import kufterp from "../images/kufterpay.png";
import kufterm from "../images/kufterm.png";
import kufteri from "../images/kufteri.png";
import twitter from "../images/twitter-brands.svg";
import medium from "../images/medium-brands.svg";
import telegram from "../images/telegram-brands.svg";

export default function Landingpage() {
  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <a className="navbar-brand" href="kufter.com">
            Kufter
          </a>
          <button
            className="navbar-toggler "
            type="button"
            data-toggle="collapse"
            data-target="./navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto ">
              <a
                className="nav-item nav-link active nav-font"
                href="kufter.com"
              >
                Home{" "}
              </a>
              <a className="nav-item nav-link nav-font" href="#product">
                Products
              </a>
              <a
                className="nav-item nav-link nav-font"
                href="https://drive.google.com/file/d/146sF4LyuAnOzTMTz57NK_UWgfLHF6afo/view?usp=sharing"
              >
                Whitepaper
              </a>
            </div>
          </div>
        </nav>
        <div className="container1">
          <div className="d-flex flex-column second_section_text">
            <h1 className="display-1 ">Kufter Token</h1>
            <h2 className="display-4 pt-3">Easy. Affordable. Accessible.</h2>
            <p className="display-5 pt-5">
              Kufter is on a mission to make cryptocurrency accessible for
              everyone
            </p>
          </div>
        </div>
      </div>
      <div className="white mt-5">
        <button
          type="button"
          class="text-center wb mt-5"
          href="https://drive.google.com/file/d/146sF4LyuAnOzTMTz57NK_UWgfLHF6afo/view?usp=sharing"
        >
          Check Whitepaper
        </button>
      </div>
      <div className="container-fluid">
        <div className="row ">
          <div className="col-10 text-center ml-5">
            <h1 className="display-1 product-color mt-5 product" id="product">
              Our Products
            </h1>

            <p className="mt-5">
              Our Products Kufter Coin is just what you’ve been looking for — a
              new, industry-leading token that gives users the chance
              <br /> to simplify their lives with one simple click. Our
              easy-to-use platform has a wide range of features that were
              <br /> created with the aim to help make crypto accessible for
              everyone, which will also make our money for our investors.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 pt-4">
            <div class="card">
              <img src={kufterx} class="card-img-top" alt="one" />
              <div class="card-body text-center">
                <h2 className="display-4 product-color">Kufter Exchange</h2>
                <p class="card-text">
                  Kufter exchange is a centralised exchange that aims to give
                  users the ability to access various types of low market cap
                  coins as early investors.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 pt-4">
            <div class="card">
              <img src={kufterp} class="card-img-top" alt="one" />
              <div class="card-body text-center">
                <h2 className="display-4 product-color">Kufter Pay</h2>
                <p class="card-text">
                  Kufter pay will give users the opportunity to order for kufter
                  debit card, the debit card can be used for both online and
                  offline payment.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 pt-4">
            <div class="card">
              <img src={kufterm} class="card-img-top" alt="one" />
              <div class="card-body text-center">
                <h2 className="display-4 product-color">Kufter Merchants</h2>
                <p class="card-text">
                  Kufter will partner will many big merchants that'll accept KFT
                  as a means of payment. ​ We will also roll out POS machines to
                  our merchants for the sole purpose of making crypto accessible
                  for everyone.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 pt-4">
            <div class="card">
              <img src={kufteri} class="card-img-top" alt="one" />
              <div class="card-body text-center">
                <h2 className="display-4 product-color">Kufter Inc.</h2>
                <p class="card-text">
                  Kufter will be amongst the first cryptocurrencies that will
                  have a running physical businesses in various countries where
                  KFT will be the only form of payment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" text-center mt-5">
        <h2 className="product-color display-3 ">Token Distribution</h2>
        <p className="mt-5 display-">Total supply: 500,000,000 </p>
      </div>
      <div className="row text-center mt-5 pt-5 token">
        <div className="col-lg-2 col-md-2 col-sm-12">
          <h2 className="product-color display-3">10%</h2>
          <p className=" display-">Team</p>
        </div>
        <div className="col-lg-2 col-md-2 col-sm-12">
          <h2 className="product-color display-3">15%</h2>
          <p className=" display-">Marketing</p>
        </div>
        <div className="col-lg-2 col-md-2 col-sm-12">
          <h2 className="product-color display-3">20%</h2>
          <p className=" display-">Sale</p>
        </div>
        <div className="col-lg-2 col-md-2 col-sm-12">
          <h2 className="product-color display-3">30%</h2>
          <p className=" display-">platform</p>
        </div>
        <div className="col-lg-2 col-md-2 col-sm-12">
          <h2 className="product-color display-3">25%</h2>
          <p className=" display-">Liquidity</p>
        </div>
      </div>
      <div>
        <h2 className="display-3 product-color mt-5 text-center">Roadmap</h2>
        <div className="row text-center mt-5 roadmap pr-5">
          <div className="col-lg-3 col-md-3 col-sm-12">
            <div>
              <h2 className="product-color">Quater 3</h2>
              <p>List on Gate.io Startup/ Liquidity Presale</p>
              <p>Cex/ Dex Listing</p>
              <p>Launch of Kufter Exchange</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12">
            <div>
              <h2 className="product-color">Quater 4</h2>
              <p>Kufter Pay</p>
              <p>Merchant Partnerships</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12">
            <div>
              <h2 className="product-color">Quater 1, 2022</h2>
              <p>Lunch of Kufter Offline Business</p>
              <p>KFT Buy Back</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <h2 className="text-center pt-5 product-color">
          Follow our social media channels for frequent updates
        </h2>
        <div className="d-flex flex-row mt-5">
          <ul>
            <li>
              <a
                href="https://twitter.com/kuftertoken"
                class="login"
                title="Login"
              >
                {" "}
                <img
                  src={twitter}
                  alt="kufter twitter logo"
                  className="futer"
                />{" "}
              </a>
            </li>
            <li>
              <a href="medium.com/@kuftertoken" class="login" title="Login">
                {" "}
                <img
                  src={medium}
                  alt="kufter twitter logo"
                  className="futer"
                />{" "}
              </a>
            </li>
            <li>
              <a href=" https://t.me/kufter" class="login" title="Login">
                {" "}
                <img
                  src={telegram}
                  alt="kufter twitter logo"
                  className="futer"
                />{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
