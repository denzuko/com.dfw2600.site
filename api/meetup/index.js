export default class Api {
  constructor(props) {
    super(props);
    this.state = {
      endpoint: "https://api.meetup.com/DFW2600".concat(
        "/",
        props.endpoint || ""
      ),
      authToken: props.authToken ? props.authToken : "",
      limit: props.limit ? "page".concat("=", props.limit || 1) : "",
      headers: {
        Accept: "application/json",
        "Accept-Language": "en-us",
        "Content-Language": "en-us"
      }
    };
  }

  authenticate() {
    this.state.headers["Authorization"] = this.state.authToken
      ? "Bearer".concat(" ", this.state.authToken)
      : null;
  }

  async findAll() {
    return await fetch(this.state.endpoint, {
      mode: "cors",
      headers: this.state.headers
    })
      .then((res) => res.json())
      .catch((e) => console.error(e));
  }

  async findById(props) {
    return await fetch(`${this.state.endpoint}/${props.id}`, {
      mode: "cors",
      headers: this.state.headers
    })
      .then((res) => res.json())
      .catch((e) => console.error(e));
  }
}
