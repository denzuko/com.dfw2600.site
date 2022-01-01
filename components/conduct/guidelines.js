import React, { Component } from "react";
import { Grid, Heading } from "spectre-react";

export default class Guidelines extends Component {
  render() {
    return (
      <Grid.Container>
        <Grid.Row>
          <Grid.Col all={8} offset="mx">
            <Heading renderAs="h2">Official 2600 Guidelines</Heading>
            <p style={{ "text-size": "50%" }}>
              These rules are taken directly from the main 2600 website.
            </p>
          </Grid.Col>
          <Grid.Col all={8} offset="mx">
            <ol>
              <li>
                We meet in a public area. Nobody is excluded. We have nothing to
                hide and we don't presume to judge who is worthy of attending
                and who is not. If law enforcement harasses us, it will backfire
                as it did at the infamous Washington DC meeting in 11/92. (You
                can find more information on this event in the Secret Service
                section of our web site.)
              </li>
              <li>
                We act in a responsible manner. We don't do illegal things and
                we don't cause problems for the place we're meeting in. *Most*
                2600 meetings are welcomed by the establishments we choose.
              </li>
              <li>
                We meet on the first Friday of the month between 5 pm and 8 pm
                local time. While there will always be people who can't make
                this particular time, the same will hold true for *any* time or
                day chosen. By having all of the meetings on the same day, it
                makes it very easy to remember, opens up the possibility for
                inter-meeting communication, and really causes hell for the
                federal agencies who want to monitor everything we do. (A few
                meetings have slight variations on the meeting time - these are
                noted accordingly.)
              </li>
              <li>
                While meetings are not limited to big cities, most of them take
                place in large metropolitan areas that are easily
                accessible.While it's convenient to have a meeting in your home
                town, we encourage people to go to meetings where they'll meet
                people from as wide an area as possible. So if there's a meeting
                within an hour or two of your town, go to that one rather than
                have two smaller meetings fairly close to each other. You always
                have the opportunity to get together with "home town hackers"
                any time you want.
              </li>
              <li>
                All meetings *must* contact us to let us know how things are
                going even if nothing unusual is happening. If we don't hear
                from your city on a regular basis, we'll have to stop
                publicizing the site since telling people to go to where no
                meeting is really doesn't do anyone a service. You can email us
                at meetings@2600.com or call us at (631) 751-2600. We also need
                a way of getting back in touch with you.
              </li>
              <li>
                Anyone can have meetings and set whatever rules they wish.
                However, if they're going to be affiliated with 2600, we ask
                that these few guidelines be observed. Thanks.
              </li>
            </ol>
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    );
  }
}
