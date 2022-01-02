import { useParams } from "react-router-dom";
import { Grid, Heading } from "spectre-react";

export default function Topic(props) {
  let { topicId } = useParams();

  return (
    <Grid.Container>
      <Heading renderAs="h3">{topicId}</Heading>
    </Grid.Container>
  );
}
