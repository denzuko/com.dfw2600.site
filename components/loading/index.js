import React, { Component } from "react";
import { Grid } from "spectre-react";

export default class Loader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Grid.Container className="loading-lg" />;
  }
}
