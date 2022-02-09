const bcrypt = require('bcrypt')
const Post = require('../models/Post');
const User = require('../models/User'); 

const resolvers = {
    Query: {
      getPosts: async () => {
        return Post.find();
      },
    },

    Mutation: {
      // normally is parent, args, context and info
      // destructure args
      register: async (_, { registerInput: { username, email, password, confirmPassword }}, context) => {
        // TODO Validate user data
        // TODO make sure user doesnt already exist
        // TODO has password before store
        // TODO create auth token
        password = await 
      }
    }
  };

module.exports = resolvers;