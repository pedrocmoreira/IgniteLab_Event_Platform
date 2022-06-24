import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4rr6hrz1im301z67bvf2uth/master',
  cache: new InMemoryCache()
});