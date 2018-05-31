import React, { Component } from "react";
import { bounceInDown, bounceOutDown } from "react-animations";
import Radium, { StyleRoot } from "radium";
import Waypoint from "react-waypoint";
//
const styles = {
  bounceInLeft: {
    animation: "x 1s",
    animationName: Radium.keyframes(bounceInDown, "bounceInDown")
  },
  bounceInRight: {
    animation: "x 1s",
    animationName: Radium.keyframes(bounceOutDown, "bounceOutDown")
  }
};
const lol = {
  visibility: "hidden"
};
export default class FirstSection extends Component {
  constructor() {
    super();
    this.state = {
      one: lol,
      two: lol,
      three: lol
    };
  }

  bounceIn = (time, state) => {
    time < 2
      ? this.setState({
          [state]: styles.bounceInLeft
        })
      : setTimeout(() => {
          this.setState({
            [state]: styles.bounceInLeft
          });
        }, time * 1000);
  };
  render() {
    return (
      <div className="Section row">
        <Waypoint
          onEnter={() => this.bounceIn(1, "one")}
          onLeave={this.bounceOut}
        >
          <div>
            <StyleRoot>
              <div style={this.state.one}>
                <div
                  className="h1 rounded dflex"
                  style={{
                    color: "red",
                    backgroundColor: "black",
                    height: "90px",
                    width: "200px"
                  }}
                >
                  ONE
                </div>
              </div>
            </StyleRoot>
          </div>
        </Waypoint>
        <Waypoint
          onEnter={() => this.bounceIn(2, "two")}
          onLeave={this.bounceOut}
        >
          <div>
            <StyleRoot>
              <div style={this.state.two}>
                <div
                  className="h1 rounded dflex"
                  style={{
                    color: "red",
                    backgroundColor: "black",
                    height: "90px",
                    width: "200px"
                  }}
                >
                  TWO
                </div>
              </div>
            </StyleRoot>
          </div>
        </Waypoint>

        <Waypoint
          onEnter={() => this.bounceIn(3, "three")}
          onLeave={this.bounceOut}
        >
          <div>
            <StyleRoot>
              <div style={this.state.three}>
                <div
                  className="h1 rounded dflex"
                  style={{
                    color: "red",
                    backgroundColor: "black",
                    height: "90px",
                    width: "200px"
                  }}
                >
                  THREE
                </div>
              </div>
            </StyleRoot>
          </div>
        </Waypoint>
      </div>
    );
  }
}
