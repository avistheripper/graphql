const { ApolloServer, gql } = require('apollo-server-express');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { makeExecutableSchema } = require('graphql-tools');

const port = process.env.PORT || 9900;

const typeDefs = gql`
    type Query {
        message: String
    }
`;

const resolvers = {
    Query: {
        message: () => 'Echo message'
    }
};
const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
const path = '/graphql';
server.applyMiddleware({ app, path });

app.listen(port, () => console.log(`Server is running at ${port}`));

