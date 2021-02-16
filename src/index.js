const { ApolloServer } = require('apollo-server');
const gql = require ('graphql-tag);');

const typeDefs = gql`
    type Query {
        sayhi: String!
    }
`;

const resolvers = {
    Query: {
        sayHi: () => 'Um, hai.'
    }
};

const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers
});

server.listen({ port: 5000}).then((res) => {
    console.log(`Server running at ${res.url}`);
});