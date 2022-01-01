import gql  from "graphql-tag";
import Api from "../api/graphcms";

export default class Articles {

  constructor() {
    this.endpoint = {
      'id': 'ckxt96n5f2iw101z9h3q1cq6k',
      'env': 'master',
      'region': 'us-east-1'
    }

    this.cacheKey = 'Article'
  }

  fetchPosts() {
    return Api({
    cacheKey: this.cacheKey,
    endpointConf: this.endpointConf,
    query: gql`
      query {
        posts {
          id
          title
          body
          createAt
          coverImage {
            id
            url
          }
          trending
        }
      }`
    })
  }

  fetchPost({postId}) {
    return Api({
      cacheKey: `${this.cacheKey}-${postId}`,
      endpointConf: this.endpoint
      query: gql`
      query getPost($id: Int) {
        posts(id: $id) {
          id: $id,
          title,
          body,
          author
        }
      }`
    })
  }
  
}
