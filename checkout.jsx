import React from "react";
import "./checkout.css";

export const WebCheckOut = () => {
  return (
    <div className="web-check-out">
      <div className="div">
        <div className="group">
          <div className="overlap-group">
            <div className="overlap">
              <div className="text-wrapper">SIGN IN</div>
            </div>
            <div className="navbar">
              <div className="text-wrapper-2">HOME</div>
              <div className="text-wrapper-3">SHOP</div>
              <div className="text-wrapper-4">COLLECTION</div>
              <div className="text-wrapper-5">CONTACT US</div>
            </div>
            <img className="cart" alt="Cart" src="f7-cart.svg" />
            <img className="lucide-search" alt="Lucide search" src="lucide-search.svg" />
            <img className="vector" alt="Vector" src="vector.svg" />
          </div>
        </div>
        <img className="faded-middle-divide" alt="Faded middle divide" src="faded-middle-divide.svg" />
        <div className="group-2">
          <div className="pay-with-card">PAY WITH CARD</div>
          <div className="overlap-2">
            <div className="text-wrapper-6">Full name on card</div>
            <img className="credit-card" alt="Credit card" src="credit-card.svg" />
          </div>
          <div className="card-information">CARD INFORMATION</div>
          <div className="overlap-group-wrapper">
            <div className="div-wrapper">
              <div className="text-wrapper-7">Email</div>
            </div>
          </div>
          <div className="cardholder-name">CARDHOLDER NAME</div>
          <div className="billing-address">BILLING ADDRESS</div>
          <p className="p">Securely save my information for 1-click checkout</p>
          <div className="overlap-3">
            <div className="text-wrapper-8">PURCHASE</div>
          </div>
          <div className="tick-box" />
          <div className="overlap-4">
            <div className="text-wrapper-9">1234 1234 1234 1234</div>
            <div className="overlap-wrapper">
              <div className="overlap-5">
                <img className="line" alt="Line" src="line-4.svg" />
                <div className="text-wrapper-10">MM / YY</div>
                <img className="img" alt="Line" src="line-6.svg" />
                <div className="text-wrapper-11">CVC</div>
                <img className="logos-amex-digital" alt="Logos amex digital" src="logos-amex-digital.svg" />
                <img className="logos-mastercard" alt="Logos mastercard" src="logos-mastercard.svg" />
                <img className="logos-visa" alt="Logos visa" src="logos-visa.svg" />
              </div>
            </div>
          </div>
          <div className="overlap-6">
            <div className="text-wrapper-12">Address</div>
            <img className="line-2" alt="Line" src="line-7.svg" />
            <div className="text-wrapper-13">Nigeria</div>
          </div>
        </div>
        <div className="group-3">
          <div className="overlap-7">
            <div className="text-wrapper-14">SHIPPING</div>
            <div className="text-wrapper-15">TOTAL</div>
            <div className="n">N950,000</div>
            <div className="overlap-group-2">
              <div className="n-2">N950,000</div>
              <div className="n-2">N950,000</div>
            </div>
            <div className="text-wrapper-16">GALAXY EARRINGS</div>
            <div className="text-wrapper-17">1 Item</div>
            <div className="text-wrapper-18">Free</div>
            <div className="text-wrapper-19">1 x</div>
            <div className="text-wrapper-20">ORDER SUMMARY</div>
            <img className="rectangle" alt="Rectangle" src="rectangle-34.png" />
            <img className="line-3" alt="Line" src="line-8.svg" />
          </div>
        </div>
        <img className="bx-arrow-back" alt="Bx arrow back" src="bx-arrow-back.svg" />
      </div>
    </div>
  );
};