import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Grid } from "spectre-react";

import About from "./components/about";
import Home from "./components/home";
import Topics from "./components/topic";
import Banner from "./components/navbar";
import CodeOfConduct from "./components/conduct";
import Guidelines from "./components/conduct/guidelines";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      routes: [
        { path: "/", component: <Home /> },
        { path: "/about", component: <About /> },
        { path: "/topics", component: <Topics /> },
        { path: "/conduct", component: <CodeOfConduct /> },
        { path: "/meeting-guidelines", component: <Guidelines /> }
      ]
    };
  }
  render() {
    return (
      <Router>
        <Grid.Container>
          <Grid.Row>
            <Grid.Col className="bg-secondary" all={12}>
              <Banner />
            </Grid.Col>
          </Grid.Row>
        </Grid.Container>

        <p></p>

        <Switch>
          {this.state.routes.map((_) => (
            <Route path={_.path}>{_.component}</Route>
          ))}
        </Switch>
      </Router>
    );
  }
}
