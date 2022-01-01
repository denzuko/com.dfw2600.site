import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Heading, Grid, Container } from "spectre-react";

export default class CodeOfConduct extends Component {
  render() {
    return (
      <Container>
        <Grid.Row>
          <Grid.Col offset="mx" all={8}>
            <Heading renderAs="h3">Code of Conduct</Heading>
            <p>
              We meet in a public area. Nobody is excluded. There is no
              admission charge or dues of any sort. It’s preferable to have
              meetings in as open a spot as possible rather than behind closed
              doors. This ensures that new people who don’t know about the
              meetings will be drawn in. We have nothing to hide and we don’t
              presume to judge who is worthy of attending and who is not. If law
              enforcement harasses us, it will backfire as it did at the
              infamous Washington DC meeting in 11/92.
            </p>
            <p>
              We act in a responsible manner. We don’t do illegal things and we
              don’t cause problems for the place we’re meeting in. Most 2600
              meetings are welcomed by the establishments we choose.
            </p>
            <p>
              We be inclusive and respectful to members and the general public.
              While not it is a hacker tradition to be anti-censorship we still
              like to keep to the "Nobody is excluded" and by being inclusive to
              the uninitated, curious normie, and visiting grey beard alike.
            </p>
            <p>
              We have built a reputation of being a very positive environment
              where no one will get "flamed" by someone that is super "1337." If
              you think you're better or smarter than someone, keep your
              arrogance to yourself, but not the knowledge. We like to continue
              to see such a friendly environment and learn even more from it as
              well.
            </p>

            <p>
              <em>
                Based on the original{" "}
                <Link to="/meeting-guidelines">2600 Meeting Guidelines.</Link>
              </em>
            </p>
          </Grid.Col>
        </Grid.Row>
      </Container>
    );
  }
}
