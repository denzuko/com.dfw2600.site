import React, { Component } from "react";
import { Grid, Heading } from "spectre-react";
import { Helmet } from "react-helmet";

export default class Dallas2600 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Dallas 2600 Meetups"
    };
  }

  render() {
    return (
      <>
        <Helmet>
          <title>Allen, Richardson, Dallas, Deep Ellum</title>
        </Helmet>
        <Grid.Container>
          <Grid.Row all={10}>
            <Grid.Col offset="mr" all={8}>
              <Heading renderAs="h3">Dallas Metroplex Meetups</Heading>
              <Grid.Col></Grid.Col>
            </Grid.Col>
          </Grid.Row>
        </Grid.Container>
      </>
    );
  }
}
