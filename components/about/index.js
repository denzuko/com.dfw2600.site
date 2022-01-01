import React, { Component } from "react";
import { Grid, Heading } from "spectre-react";

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Dallas 2600 Meetups"
    };
  }

  render() {
    return (
      <Grid.Container>
        <Grid.Row all={10}>
          <Grid.Col offset="mr" all={8}>
            <Heading renderAs="h3">{this.state.title}</Heading>
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    );
  }
}
