const { graphqlExpress } = require('apollo-server-express');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { makeExecutableSchema } = require('graphql-tools');

const port = process.env.PORT || 9900;

const typeDefs = `
    type Query {
        message: String
    }
`;

const resolvers = {
    Query: {
        message: () => 'Echo message'
    }
};
const schema = makeExecutableSchema({typeDefs, resolvers});

const app = express();
app.use(cors(), bodyParser.json());
app.use('/graphql', graphqlExpress({schema}));


app.get('/', (req, res) => {
    res.sendStatus(200);
});


app.listen(port, () => console.log(`Server is running at ${port}`));

