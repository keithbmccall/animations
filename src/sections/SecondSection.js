import React, { Component } from "react";
import Particles from "react-particles-js";
import { rubberBand } from "react-animations";
import Radium, { StyleRoot } from "radium";
import Waypoint from "react-waypoint";
//
const styles = {
  rubberBand: {
    animation: "x 2s",
    animationName: Radium.keyframes(rubberBand, "rubberBand")
  }
};

export default class SectionSection extends Component {
  constructor() {
    super();
    this.state = {
      which: {}
    };
  }
  rubberBand = () => {
    this.setState({
      which: styles.rubberBand
    });
  };
  render() {
    return (
      <div className="Particles position-relative">
        <Waypoint onEnter={this.rubberBand} onLeave={this.bounceOut}>
          <div>
            <StyleRoot>
              <div className="position-absolute Wide" style={this.state.which}>
                <div className="h4 Lil-font">
                  Mouse<br /> Reactive <br />Animations!
                </div>
              </div>
            </StyleRoot>
          </div>
        </Waypoint>
        <Particles
          params={{
            particles: {
              number: { value: 40, density: { enable: true, value_area: 800 } },
              color: { value: "#ffffff" },
              shape: {
                type: "circle",
                stroke: { width: 0, color: "#000000" },
                polygon: { nb_sides: 5 },
                image: { src: "img/github.svg", width: 100, height: 100 }
              },
              opacity: {
                value: 0.5,
                random: false,
                anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
              },
              size: {
                value: 3,
                random: true,
                anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1
              },
              move: {
                enable: true,
                speed: 6,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: { enable: false, rotateX: 600, rotateY: 1200 }
              }
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: { enable: true, mode: "repulse" },
                onclick: { enable: true, mode: "push" },
                resize: true
              },
              modes: {
                grab: { distance: 400, line_linked: { opacity: 1 } },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 8,
                  speed: 3
                },
                repulse: { distance: 200, duration: 0.4 },
                push: { particles_nb: 4 },
                remove: { particles_nb: 2 }
              }
            },
            retina_detect: true
          }}
        />
      </div>
    );
  }
}
