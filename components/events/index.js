import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Heading, Grid } from "spectre-react";

import meetupEvents from "../api/meetup/events";

export default class EventView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      events: []
    };
  }
  componentDidMount() {
    this.setState({ events: meetupEvents.findAll() });
  }

  render() {
    return (
      <Grid.Container>
        <Heading renderAs="h2">Events Calendar</Heading>
        <Grid.Row className="mt-2">
          {this.state.events.map((key, event) => (
            <Grid.Col all={8} key={key}>
              <Heading>{event.name}</Heading>
              <small>
                <Link external to={event.link}>
                  read on meetup
                </Link>
              </small>
              <p>{event.description}</p>
            </Grid.Col>
          ))}
        </Grid.Row>
      </Grid.Container>
    );
  }
}
