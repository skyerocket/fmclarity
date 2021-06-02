const { ApolloServer, gql } = require('apollo-server-lambda');

const typeDefs = gql`
  type Query {
    contractors: [Contractor]
  }

  type Contractor {
    name: String!
    telephone: String!
    email: String!
  }

  type Mutation {
    addContractor(name: String!,
        telephone: String!,
        email: String!,
        ): Contractor
  }
`;

const contractors = [
    {
        name: 'CPB Contractors', 
        telephone: '(03)92287700',
        email: 'test@gmail.com',
        services: ['serviceA', 'serviceB', 'serviceC']
    },
    {
        name: 'Another One', 
        telephone: '(03)92287700',
        email: 'test@gmail.com',
        services: ['WethebestMusic']
    },
]

const resolvers = {
  Query: {
    contractors: () => contractors,
  },
  Mutation: {
    addContractor: (parent, args) => {
       const contractor = {
        name: args.name,
        telephone: args.telephone,
        email: args.email,
        // services: args.services
      }
      contractors.push(contractor)
      return contractor
    }
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

exports.graphqlHandler = server.createHandler({
  cors: {
    origin: '*',
    credentials: true,
  },
});