import React, { Component } from "react";
import { TrackDocument, TrackedDiv } from "react-track";
import { topTop, calculateScrollY } from "react-track/tracking-formulas";
import { tween, combine } from "react-imation";
import {
  rgb,
  rgba,
  scale,
  rotate,
  px,
  percent,
  translate3d
} from "react-imation/tween-value-factories";

export default class TrackSection extends Component {
  render() {
    return (
      <div className="Section">
        <TrackDocument formulas={[topTop, calculateScrollY]}>
          {(topTop, scrollY) => (
            <TrackedDiv formulas={[topTop]}>
              {posTopTop => (
                <div
                className="Spin"
                  style={tween(scrollY, [
                    [posTopTop-300, { transform: rotate(0) }],
                    [posTopTop+100, { transform: rotate(180) }]
                  ])}
                >
                 <h3> {scrollY} {posTopTop}</h3>
                </div>
              )}
            </TrackedDiv>
          )}
        </TrackDocument>
      </div>
    );
  }
}
