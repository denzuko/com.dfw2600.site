import React, { Component } from "react";
import {
  Grid,
  Card,
  CardHeader,
  Media,
  Container,
  Button
} from "spectre-react";

function cardFactory(card) {
  return {
    image: card.image || null,
    title: card.title,
    body: card.body,
    footer: card.footer || null
  };
}

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      isLoading: true
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: false,
      cards: [
        cardFactory({
          title: "2600 Meetings",
          image:
            "https://images.unsplash.com/photo-1484191914255-a429e6f819b4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=james-sutton-qXn5L9BqRbE-unsplash.jpg&w=640",
          body: (
            <p>
              A DFW 2600 meeting is a monthly gathering of local hackers,
              phreaks, nerds, geeks, activists, tinkerers, makers, retro gamers,
              developers, infosec professionals, and other interesting people.
            </p>
          ),
          footer: <Button>Add to calendar</Button>
        }),
        cardFactory({
          title: "Projects & Presentations",
          body: (
            <p>
              There is rarely any planed schedule for the meetings, anyone who
              is prepared and wishes to give a presentation or show off a
              project may at any time during a meeting. Also, no one will be
              forced to give a presentation at any point, ever.
            </p>
          )
        }),
        cardFactory({
          title: "2550 Meetings",
          body: (
            <p>
              2550 meetings (2600 hangouts) are unofficial meetings where a few
              or more of us from the group get together and just hang out (be it
              a movie, meal, hack night, etc.). 2550 meetings are rarely planned
              and usually quite spontaneous but usually announced via DFW2600
              public channels (on discord, via Twitter, meetups, sub-reddit,
              etc.).
            </p>
          )
        }),
        cardFactory({
          title: "2500 Meetings",
          body: (
            <p>
              2500 Meetings (CTFs, Bugbounties, Hackathons) are unofficial
              meetings where a few or more of us from the group get together and
              peer program on projects. 2500 meetings are never planned and
              usually follow the typical event seasons but usually coordenated
              via DFW2600 public channels (on discord, meetups, sub-reddit,
              etc.).
            </p>
          )
        })
      ]
    });
  }

  render() {
    return (
      <Container>
        <Grid.Row className="mt-2">
          {this.state.cards.map((card) => (
            <Grid.Col offset="mx" all={10}>
              <Card>
                <CardHeader>
                  <Card.Image>
                    {card.image ? (
                      <Media.Image src={card.image} responsive />
                    ) : (
                      ""
                    )}
                  </Card.Image>

                  <CardHeader.Title className="h3">
                    {card.title}
                  </CardHeader.Title>
                </CardHeader>

                <Card.Body>{card.body}</Card.Body>

                <Card.Footer>{card.footer}</Card.Footer>
              </Card>
            </Grid.Col>
          ))}
        </Grid.Row>
      </Container>
    );
  }
}
