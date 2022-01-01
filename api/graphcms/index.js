import React, { useCallback } from "react";

import gql from "graphql-tag";

import useAutoLoad from "graphql-react/useAutoLoad.mjs";
import useCacheEntry from "graphql-react/useCacheEntry.mjs";
import useLoadGraphQL from "graphql-react/useLoadGraphQL.mjs";
import useWaterfallLoad from "graphql-react/useWaterfallLoad.mjs";

export function endpoint(region, projectId, env) {
  return `https://api-${region}.graphcms.com/v2/${projectId}/${env}`;
}

export function Api(cacheKey, query, endpointConf, req) {
  const cacheValue = useCacheEntry(cacheKey);
  const loadGraphQL = useLoadGraphQL();
  const load = useCallback(() =>
    loadGraphQL(
      cacheKey,
      endpoint(endpointConf.region, endpointConf.id, endpointConf.env),
      {
        method: req.method || "POST",
        headers: req.headers || {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: req.body || gql`query() {}`
      },
      [cacheKey, loadGraphQL]
    )
  );

  useAutoLoad(cacheKey, load);

  const isWaterfallLoading = useWaterfallLoad(cacheKey, load);

  return isWaterfallLoading
    ? null
    : cacheValue
    ? cacheValue.errors
      ? "Error!"
      : cacheValue.data.repo.stargazers.totalCount
    : "Loading…";
}
