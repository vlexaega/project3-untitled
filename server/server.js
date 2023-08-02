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
const stripe = require('stripe')('sk_test_51Nag9dL4xPozXGUQJXRSnIfcjbtm6WGtw0LDGOBCCPI3BZWOVDOaXLTpnPVuehnw0M2LCSL00DyiRZaqBSyebnac00kYtivAof');
const domain = 'http://localhost:3001';
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
app.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: '{{PRICE_ID}}',
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${domain}?success=true`,
      cancel_url: `${domain}?canceled=true`,
    });
    res.redirect(303, session.url);
  });
  app.listen(3001, () => console.log('Running on port 3001'));
//call the function to start the server
startApolloServer();