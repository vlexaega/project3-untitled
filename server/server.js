const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const path = require('path');
const { authMiddleware } = require('./utils/auth');
const { Images } = require('./models/ImageDetails');

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001; 
const app = express();
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

// app.post("/upload-image", async(req,res) => {
//     const{base64} = req.body;
//     try {
//         Images.create({image:base64});
//         res.send({Status:"ok"})
//     } catch (error){
//         res.send({Status:"error", data:error});
//     }
// });

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