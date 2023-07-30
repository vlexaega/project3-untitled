const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const path = require('path');
const { authMiddleware } = require('./utils/auth');

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001; 
const app = express();
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

//need to increase the body-parser size limit
//found this via link https://reactgo.com/request-entity-too-large-node/
app.use(express.json({limit: '25mb'}));
app.use(express.urlencoded({limit: '25mb'}));

//creating the new instance of an Apollo server with graphQL schema
const startApolloServer = async () => {
    await server.start();

    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    //line to serve up static assets from client/images folder
    app.use('/images', express.static(path.join(__dirname, '../client/images')));

    app.use('/graphql', expressMiddleware(server, {
        context: authMiddleware
    }));

    if (process.env.NODE_ENV === 'production') {
        app.use(express.static(path.join(__dirname, '../client/dist')));
        app.get('*', (req, res) => {
            res.sendFile(path.join(__dirname, '../client/dist/index.html'));
        });
    }

    db.once('open', () => {
        app.listen(PORT, () => {
            console.log(`API server running on port ${PORT}!!`);
            console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
        });
    });
};

//call the function to start the server
startApolloServer();