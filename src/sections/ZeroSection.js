import React, { Component } from "react";

export default class ZeroSection extends Component {
  render() {
    return (
      <div className="container White-text">
        <h1>Animation Examples</h1>

        <div className="App Zero">
          <header className="App-header align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-md-3" />
                <div className="col-md-6">
                  <form>
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Add new to-do"
                        aria-label="To-do"
                        aria-describedby="basic-addon2"
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
          </header>
        </div>
      </div>
    );
  }
}
