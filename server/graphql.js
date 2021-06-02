const { ApolloServer, gql } = require('apollo-server-lambda');

const typeDefs = gql`
  input ContractorInput {
    name: String!
    telephone: String!
    email: String!
    services: [String]!
  }

  type Query {
    contractors: [Contractor]
  }

  type Contractor {
    name: String!
    telephone: String!
    email: String!
    services: [String]!
  }

  type Mutation {
    addContractor(input: ContractorInput): Contractor
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
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

exports.graphqlHandler = server.createHandler();