import React from "react";
import { render } from "react-dom";

import App from "./app";
import * as serviceWorker from "./serviceWorker";

import "./index.scss";

render(<App />, document.querySelector("body"));

serviceWorker.unregister();
