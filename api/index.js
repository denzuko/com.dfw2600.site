export default class Api {
  constructor(props) {
    this.state.endpoint = "" || props.endpoint;
    this.state.authToken = "" || props.authToken;
  }

  async findAll() {
    return await fetch(this.state.endpoint, {
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Accept-Language': 'en-us',
        'Content-Language': 'en-us',
        'Authorization': this.state.authToken? `Bearer ${this.state.authToken}` : null
  
    }).then((res) => res.json());
  }

  async findById(id) {
    return await fetch(`${this.endpoint}/${id}`).then((res) => res.json());
  }
}
