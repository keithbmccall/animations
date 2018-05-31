import React, { Component } from "react";
import { bounce, rollIn } from "react-animations";
import Radium, { StyleRoot } from "radium";

const styles = {
  bounce: {
    animation: "x 1s",
    animationName: Radium.keyframes(bounce, "bounce")
  },
  rollIn: {
    animation: "x 1s",
    animationName: Radium.keyframes(rollIn, "rollIn")
  }
};
export default class ZeroSection extends Component {
  constructor() {
    super();
    this.state = {
      toDos: [],
      textField: ""
    };
  }
  changeHandler = e => {
    this.setState(
      {
        textField: e.target.value
      },
      console.log(this.state)
    );
  };
  submitHandler = e => {
    e.preventDefault();
    let list = [...this.state.toDos];
    list.push(this.state.textField);
    this.setState({
      toDos: list,
      textField: ""
    });
  };

  render() {
    const lets = this.state.toDos.map((item, key) => (
      <StyleRoot key={key}>
        <div>
          <div style={styles.rollIn}>
            <h4>{item}</h4>
          </div>
        </div>
      </StyleRoot>
    ));
    return (
      <div className="container White-text">
        <h1>Example Animations</h1>
        <h5>Customizable List Animations</h5>
        <div className="App Zero">
          <header className="App-header align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-md-3" />
                <div className="col-md-6">
                  <form onSubmit={this.submitHandler}>
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="type something then press submit! -->"
                        aria-label="To-do"
                        aria-describedby="basic-addon2"
                        onChange={this.changeHandler}
                        value={this.state.textField}
                      />
                      <div className="input-group-append">
                        <input type="submit" />
                      </div>
                    </div>
                  </form>
                </div>
                <div className="col-md-3" />
              </div>
            </div>
            <div className="container">{lets}</div>
          </header>
          <StyleRoot>
            <div className="test row" style={styles.bounce}>
              <div style={{ width: "100vw", marginTop: "50vh" }}>
                <h1>V</h1>
              </div>
            </div>
          </StyleRoot>
        </div>
      </div>
    );
  }
}
