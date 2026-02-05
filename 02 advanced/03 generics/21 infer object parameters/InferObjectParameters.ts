/**
 * The following example shows how to infer stacked object parameters from an object and use it for another object
 */

namespace InferObjectParameters {
  interface IRouteSearchParams<THash, TQuery> {
    hash?: THash;
    query?: TQuery;
  }

  interface ISearch<THash, TQuery> {
    hash?: keyof THash;
    query?: (keyof TQuery)[];
  }

  // infer the type of prop hash, as far as it is part of T
  type InferHash<T> = T extends { hash: infer THash } ? THash : {};

  // infer the type of prop query, as far as it is part of T
  type InferQuery<T> = T extends { query: infer TQuery } ? TQuery : {};

  const configure = <T extends IRouteSearchParams<any, any>>(
    config: T,
    search: ISearch<InferHash<T>, InferQuery<T>>,
  ): T => {
    return config;
  };

  const config = configure(
    {
      hash: { bank: "bank" },
      query: { firstname: "firstname", lastname: "lastname" },
    },
    {
      hash: "bank", // here we can access "bank" type safe as it was inferred
      query: ["firstname", "lastname"], // and here we can infer all props of query
    },
  );
}
