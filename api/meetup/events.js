import Api from "./index";

export default class Events extends Api {
  constructor() {
    super({ endpoint: "events" });
  }
}
