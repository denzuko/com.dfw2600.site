import { useCallback } from "react";

import gql from "graphql-tag";

import useAutoLoad from "graphql-react/useAutoLoad.mjs";
import useCacheEntry from "graphql-react/useCacheEntry.mjs";
import useLoadGraphQL from "graphql-react/useLoadGraphQL.mjs";
import useWaterfallLoad from "graphql-react/useWaterfallLoad.mjs";

export default class Api {
  constructor(props) {
    this.state = {
      cacheKey: props.cacheKey || "",
      region: props.projectRegion || "us-east-1",
      id: props.projectId || "",
      env: props.projectEnv || "master",
      method: props.reqMethod || "POST",
      headers: props.reqHeaders || {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      query: props.query || gql`query() {}`,
      vars: props.vars || []
    };

    useAutoLoad(this.state.cacheKey, this.load());
  }

  isWaterfallLoading() {
    return useWaterfallLoad(this.state.cacheKey, this.load());
  }

  endpoint() {
    return `https://api-${this.state.region}.graphcms.com/v2/${this.state.id}/${this.state.env}`;
  }

  cacheValue() {
    return useCacheEntry(this.state.cacheKey);
  }

  loadGraphQL() {
    return useLoadGraphQL();
  }

  load() {
    return useCallback(() =>
      this.loadGraphQL(
        this.state.cacheKey,
        this.endpoint(),
        {
          method: this.state.method,
          headers: this.state.headers,
          body: this.state.query
        },
        [this.state.cacheKey, this.loadGraphQL(), this.state.vars]
      )
    );
  }

  findAll() {
    return this.isWaterfallLoading()
      ? null
      : this.cacheValue()
      ? this.cacheValue().errors
        ? "Error!"
        : this.cacheValue().data
      : "Loading…";
  }
}
