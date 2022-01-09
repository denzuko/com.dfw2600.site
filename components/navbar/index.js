import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Button, Media } from "spectre-react";

export default class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      background: props.backgroundColor || "#000",
      links: []
    };
  }

  componentDidMount() {
    this.setState({
      links: [
        { url: "/about", text: "About" },
        { url: "/topics", text: "Articles" },
        { url: "/code-of-conduct", text: "Conduct" }
      ]
    });
  }

  render() {
    return (
      <Navbar style={{ background: this.state.background }}>
        <Navbar.Section>
          <Navbar.Brand>
            <Link to="/">
              <Media.Image
                style={{ height: 128 }}
                src="https://pbs.twimg.com/profile_images/583692287537979392/BecmYOgA_400x400.png"
              />
            </Link>
          </Navbar.Brand>
        </Navbar.Section>

        <Navbar.Section>
          {this.state.links.map((_) => (
            <Button key={_.url} link>
              <Link to={_.url}>{_.text}</Link>
            </Button>
          ))}
        </Navbar.Section>
      </Navbar>
    );
  }
}
