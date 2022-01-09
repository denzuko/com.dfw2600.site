import Api from "./index";

export default class Photos extends Api {
  constructor() {
    super({ endpoint: "photos" });
  }
}
