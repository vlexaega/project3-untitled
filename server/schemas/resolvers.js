// This file is adapted from module 22 activity 24

const { User, Images } = require('../models');
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
        images: async (parent, args) => {
            const images = await Images.find();
            return images;
        },
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
        uploadImage: async (parent, { userId, image, title, description, declaration, critique }) => {
            if (!userId) {
                throw new AuthenticationError('Must be logged in to upload an image!')
            }
            const user = await User.findById(userId);
            if (!user) {
                throw new Error ('User does not exist');
            }
            try {
                const newImageDetails = await Images.create({ 
                    image,
                    title,
                    description,
                    declaration,
                    critique: critique || false,
                    user: userId,
                 });
                return newImageDetails;

            } catch (error) {
                throw new Error("Failed to upload image: ", error.message);
            }
        },
    }
};

module.exports = resolvers