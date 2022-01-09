import React from "react";
import { useRouteMatch, Link, Switch, Route } from "react-router-dom";
import { Heading, Tile, Grid, Media, Button } from "spectre-react";
import { Helmet } from "react-helmet";

import Topic from "./singleton";

function tileFactory(data) {
  return { author: data.author, article: data.article, meta: data.meta };
}

export default function Topics(props) {
  const { path, url } = useRouteMatch();

  let state = {
    title: "DFW2600 Articles",
    description: "",
    contentType: "blog",
    url: "/topics",
    tiles: [
      tileFactory({
        author: {
          image: "https://picturepan2.github.io/spectre/img/avatar-2.png",
          name: "Avatar"
        },
        article: {
          title: <Link to={`${url}/rendering`}>Rendering with React</Link>,
          description: "Lorim Ipsum Delorium"
        }
      }),
      tileFactory({
        author: {
          image: "https://picturepan2.github.io/spectre/img/avatar-2.png",
          name: "Avatar"
        },
        article: {
          title: <Link to={`${url}/props-vs-state`}>Props vs State</Link>,
          description: "Lorim Ipsum Delorium"
        }
      }),
      tileFactory({
        author: {
          image: "https://picturepan2.github.io/spectre/img/avatar-2.png",
          name: "Avatar"
        },
        article: {
          title: <Link to={`${url}/components`}>Components</Link>,
          description: "Lorim Ipsum Delorium"
        }
      })
    ]
  };

  return (
    <>
      <Helmet>
        <title>DFW2600 Articles</title>
        <meta name="description" value={state.title} />
        <meta property="og:description" value={state.title} />
      </Helmet>
      <Grid.Container>
        <Heading>Articles</Heading>
        <Grid.Row md={12}>
          <Grid.Col mx={2} all={6} offset="mr">
            {state.tiles.map((data) => (
              <Tile>
                <Tile.Icon>
                  <Media.Figure className="avatar avatar-lg">
                    <Media.Image
                      src={data.author.image}
                      alt={data.author.name}
                    />
                  </Media.Figure>
                </Tile.Icon>

                <Tile.Content>
                  <Tile.Title>{data.article.title}</Tile.Title>
                  <Tile.Subtitle>{data.article.description}</Tile.Subtitle>
                  <Button.Group>
                    <Button small primary>
                      Read More
                    </Button>
                    <Button small>Bookmark</Button>
                  </Button.Group>
                </Tile.Content>
              </Tile>
            ))}
          </Grid.Col>

          <Grid.Col>
            <Switch>
              <Route exact path={path}>
                Please select a topic.
              </Route>
              <Route path={`${path}/:topicId`}>
                <Topic />
              </Route>
            </Switch>
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </>
  );
}
