import React, { Component } from "react";
import {
  Experiment,
  emitter,
  Variant,
  experimentDebugger
} from "@marvelapp/react-ab-test";

import Dallas2600 from "./dallas2600";
import Ndfw2600 from "./ndfw2600";

export default class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      defaultVariant: "dallas2600"
    };

    // experimentDebugger.enable();

    emitter.defineVariants("CityGroupExp", ["dallas2600", "ndfw2600"]);
  }

  componentDidMount() {
    emitter.emitWin("CityGroupExp");
  }

  render() {
    return (
      <Experiment name="CityGroupExp">
        <Variant name="dallas2600">
          <Dallas2600 />
        </Variant>
        <Variant name="ndfw2600">
          <Ndfw2600 />
        </Variant>
      </Experiment>
    );
  }
}
