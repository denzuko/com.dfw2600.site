import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import * as Analytics from "react-google-analytics";
import { Grid } from "spectre-react";

import Loading from "./components/loading";
import About from "./components/about";
import Home from "./components/home";
import Topics from "./components/topic";
import Banner from "./components/navbar";
import CodeOfConduct from "./components/conduct";
import Guidelines from "./components/conduct/guidelines";

const routeFactory = (props) => ({
  path: `/${props.slug}` || "/",
  key: props.slug || "ROOT",
  component: props.component,
  isRestricted: props.restricted || false,
  isExact: props.exact || true,
  childProps: props.childProps || {}
});

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gaTRackingCode: props.gaTrackingCode || "UA-xxxx",
      loading: true,
      routes: [
        routeFactory({
          slug: "about",
          component: About,
          childProps: { campaign: this.state.gaTRackingCode }
        }),
        routeFactory({ slug: "topics", component: Topics }),
        routeFactory({ slug: "code-of-conduct", component: CodeOfConduct }),
        routeFactory({ slug: "meeting-guidelines", component: Guidelines })
      ]
    };
  }
  willTransitionTo(transition, params, query, props) {
    Analytics("send", "pageview", { page: transition.path });
  }

  componentDidMount() {
    this.setState({ loading: false });
    Analytics("create", this.state.gaTRackingCode);
    Analytics("send", "pageview");
  }

  render() {
    if (this.state.loading) return <Loading />;

    return (
      <Router>
        <Helmet
          defaultTitle="DFW2600 - Dallas Fort Worth Hacker 2600 Meetup"
          titleTemplate="DFW2600 - %s">
          <html lang="en" amp />
          <meta charset="UTF-8" />
          <title>Home | DFW2600 - Dallas Fort Worth Hacker 2600 Meetup</title>
          <meta name="viewport" content="initial-scale=1.5" />
          <link rel="icon" type="image/x-icon" href="/assets/img/fav.ico" />
          <meta name="theme-color" content="#232323" />
          <meta
            name="description"
            content="Dalls Forth Worth 2600 hacker meetup"
          />
          <meta
            name="keywords"
            content="hacking phreaking infosec 2600 bbs maker"
          />
          <meta
            property="og:description"
            content="Dalls Forth Worth 2600 hacker meetup"
          />
          <meta property="og:site_name" content="DFW2600" />
          <meta name="author" content="Da Planet Security" />
          <link
            rel="alternate"
            type="application/rss+xml"
            title="DFW2600 Articles"
            href="/rss.xml"
          />
          <link
            rel="alternate"
            type="application/atom+xml"
            title="DFW2600 Articles"
            href="/atom.xml"
          />
          <link
            rel="stylesheet"
            href="https://unpkg.com/spectre.css/dist/spectre.min.css"
          />
          <link
            rel="stylesheet"
            href="https://unpkg.com/spectre.css/dist/spectre-exp.min.css"
          />
          <link
            rel="stylesheet"
            href="https://unpkg.com/spectre.css/dist/spectre-icons.min.css"
          />
          <script
            rel="prefetch"
            as="script"
            src="https://cdn.polyfill.io/v3/polyfill.min.js?features=default,es6,es7&flags=gated"
          />
          <link rel="license" type="text/plain" src="/assets/LICENSE" />
          <noscript>
            {`
            <p>Please enable javascript to access this application.</p>
            <p>
              If using a TUI browser then feel free to access the
              <a href="https://docs.dapla.net">developer support</a> portal.
            </p>
          `}
          </noscript>
        </Helmet>
        <Grid.Container>
          <Grid.Row>
            <Grid.Col className="bg-secondary" all={12}>
              <Banner />
            </Grid.Col>
          </Grid.Row>
        </Grid.Container>

        <p></p>
        <Analytics.Initializer />

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          {this.state.routes.map((route, i) => (
            <Route
              key={route.key}
              path={route.path}
              component={route.component}>
              {route.childProps}
            </Route>
          ))}

          <Route component={() => <h1>Not Found!</h1>} />
        </Switch>
      </Router>
    );
  }
}
