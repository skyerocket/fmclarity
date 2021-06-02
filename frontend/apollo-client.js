// ./apollo-client.js

import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    ssrMode: false,
    uri: "https://4rw88pnwg1.execute-api.us-east-1.amazonaws.com/dev/graphql",
    cache: new InMemoryCache(),
});

export default client;