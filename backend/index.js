/**
 * Initializes an Express.js server and sets up an Apollo GraphQL server.
 * The server listens on port 4000 and provides a GraphQL API endpoint at the root URL.
 * The GraphQL API uses the resolvers and type definitions defined in the `./resolvers/index.js` and `./typeDefs/index.js` files, respectively.
 * The server also includes middleware to handle CORS and JSON request bodies.
 */
import express from "express";
import http from "http";
import cors from "cors";

import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { startStandaloneServer } from "@apollo/server/standalone";

import mergedResolvers from "./resolvers/index.js";
import mergedTypeDefs from "./typeDefs/index.js";

// Required logic for integrating with Express
const app = express();
// Our httpServer handles incoming requests to our Express app.
// Below, we tell Apollo Server to "drain" this httpServer,
// enabling our servers to shut down gracefully.
const httpServer = http.createServer(app);

//* using ApolloServerPluginDrainHttpServer plugin to ensure server closes successfully
const server = new ApolloServer({
  resolvers: mergedResolvers,
  typeDefs: mergedTypeDefs,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

// Ensure we wait for our server to start
await server.start();

// Set up our Express middleware to handle CORS, body parsing,
// and our expressMiddleware function.
app.use(
  "/",
  cors(),
  express.json(),
  // expressMiddleware accepts the same arguments:
  // an Apollo Server instance and optional configuration options
  expressMiddleware(server, {
    context: async ({ req }) => ({ token: req.headers.token }),
  })
);

// Modified server startup
await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));

console.log(`🚀 Server ready at http://localhost:4000/`);
