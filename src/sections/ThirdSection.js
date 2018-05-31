import React, { Component } from "react";
import './wow';
import WOW from "wowjs";

export default class ThirdSection extends Component {
  componentDidMount() {
    new WOW.WOW().init();
  }
  render() {
    return (
      <div className="Section">
        <div className="center">
          <h1 className="wow flipInY" data-wow-iteration="1">
            Hello World!
          </h1>
          <p>a how to about WOW.js</p>
        </div>
        <div className="center-photo">
          <img
            className="photo wow fadeInDown"
            data-wow-iteration="1"
            data-wow-offset="80"
            data-wow-delay=".5s"
            src="/alaska1.jpg"
          />
          <img
            className="photo wow fadeInDown"
            data-wow-iteration="1"
            data-wow-offset="80"
            data-wow-delay=".75s"
            src="/alaska2.jpg"
          />
          <img
            className="photo wow fadeInDown"
            data-wow-iteration="1"
            data-wow-offset="80"
            data-wow-delay="1s"
            src="/alaska3.jpg"
          />
        </div>
      </div>
    );
  }
}
