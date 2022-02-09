const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
const { MONGODB } = require("./config");
const { typeDefs, resolvers } = require('./schemas');

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect(MONGODB, { useNewUrlParser: true })
  .then(() => {
    console.log("Mongo connected");
    return server.listen({ port: 5000 });
  })
  .then((res) => {
    console.log(`Server running at ${res.url}`);
  });

    // TODO Validate user data
        // TODO make sure user doesnt already exist
        // TODO has password before store
        // TODO create auth token
      }