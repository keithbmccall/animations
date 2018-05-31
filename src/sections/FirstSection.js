import React, { Component } from "react";
import { bounceInLeft, bounceOutRight } from "react-animations";
import Radium, { StyleRoot } from "radium";
import Waypoint from "react-waypoint";
//
const styles = {
  bounceInLeft: {
    animation: "x 1s",
    animationName: Radium.keyframes(bounceInLeft, "bounceInLeft")
  },
  bounceInRight: {
    animation: "x 1s",
    animationName: Radium.keyframes(bounceOutRight, "bounceOutRight")
  }
};
export default class FirstSection extends Component {
  constructor() {
    super();
    this.state = {
      which: styles.bounceOutRight
    };
  }
  bounceIn = () => {
    console.log("polo");
    this.setState({
      which: styles.bounceInLeft
    });
  };
  bounceOut = () => {
    this.setState({
      which: styles.bounceOutRight
    });
  };
  render() {
    return (
      <div className="Section">
        <Waypoint onEnter={this.bounceIn} onLeave={this.bounceOut}>
          <div>
            <StyleRoot>
              <div className="test" style={this.state.which}>
                <div className="h1 Big-font">Bounce In!</div>
              </div>
            </StyleRoot>
          </div>
        </Waypoint>
      </div>
    );
  }
}
