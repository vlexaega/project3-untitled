// This file is adapted from module 22 activity 24

const { User, ImageDetails } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        user: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id)
                return user
            }
        },
        users: async () =>{
            const users = await User.find();
            return users;
        },
        images: (parent, args) => {},
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw AuthenticationError;
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw AuthenticationError;
            }

            const token = signToken(user);

            return { token, user }
        },
        uploadImage: async (parent, { image }) => {
            try {
                const newImageDetails = await ImageDetails.create({ image });
                return newImageDetails;
            } catch (error) {
                throw new Error("Failed to upload image");
            }
        },
    }
};

module.exports = resolvers