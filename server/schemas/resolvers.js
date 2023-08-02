// This file is adapted from module 22 activity 24

const { User, Images } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    categories: async () => {
      return await Category.find();
    },
    products: async (parent, { category, name }) => {
      const params = {};

      if (category) {
        params.category = category;
      }

      if (name) {
        params.name = {
          $regex: name
        };
      }

      return await Product.find(params).populate('category');
    },
    product: async (parent, { _id }) => {
      return await Product.findById(_id).populate('category');
    },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id);
        return user;
      }
    },
    users: async () => {
      const users = await User.find();
      return users;
    },
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.products',
          populate: 'category'
        });

        return user.orders.id(_id);
      }

      throw AuthenticationError;
    },
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const order = new Order({ products: args.products });
      const line_items = [];

      const { products } = await order.populate('products');

      for (let i = 0; i < products.length; i++) {
        const product = await stripe.products.create({
          name: products[i].name,
          description: products[i].description,
          images: [`${url}/images/${products[i].image}`]
        });

        const price = await stripe.prices.create({
          product: product.id,
          unit_amount: products[i].price * 100,
          currency: 'usd',
        });

        line_items.push({
          price: price.id,
          quantity: 1
        });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`
      });

      return { session: session.id };
    },

    images: async (parent, args) => {
      const images = await Images.find();
      return images;
    },
    getUserImages: async (parent, args, context) => {
      if (context.user) {
        const userImages = await Images.find({ user: context.user._id });
        return userImages;
      }
    },
    image: async (parent, { imageId }) => {
      return Images.findOne({ _id: imageId });
    },
    getUserProfile: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id);
        return user;
      }
    },
    usersWithImages: async () => {
      try {
        const users = await User.find();
        const usersImages = users.map(async (user) => {
          const userImages = await Images.find({ user: user._id });
          return { ...user.toObject(), images: userImages };
        });
        return Promise.all(usersImages);
      } catch (error) {
        throw new Error("Error find user images");
      }
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addOrder: async (parent, { products }, context) => {
      if (context.user) {
        const order = new Order({ products });

        await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });

        return order;
      }

      throw AuthenticationError;
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

      return { token, user };
    },
    updateProduct: async (parent, { _id, quantity }) => {
      const decrement = Math.abs(quantity) * -1;

      return await Product.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });
    },
    uploadImage: async (
      parent,
      { userId, image, title, description, declaration, critique, price, selectedMedium, purchasePrice, canDownload, canPurchase }
    ) => {
      if (!userId) {
        throw new AuthenticationError("Must be logged in to upload an image!");
      }
      const user = await User.findById(userId);
      if (!user) {
        throw new Error("User does not exist");
      }
      try {
        const newImageDetails = await Images.create({
          image,
          title,
          description,
          declaration,
          critique: critique || false,
          price,
          canDownload: canDownload || false,
          purchasePrice,
          canPurchase: canPurchase || false,
          selectedMedium,
          user: userId,
        });
        return newImageDetails;
      } catch (error) {
        throw new Error("Failed to upload image: ", error.message);
      }
    },
    addComment: async (_, { imageId, comment }, context) => {
      console.log("User ID:", context.user ? context.user._id : "Not logged in");
      console.log("Image ID:", imageId);
      console.log("Comment:", comment);
      if (!context.user) {
        throw new AuthenticationError("Please log in to leave a critique");
      }
      const user = await User.findById(context.user._id);
      if (!user) {
        throw new Error("User does not exist");
      }
      try {
        const image = await Images.findById(imageId);
        if (!image) {
          throw new Error("Image does not exist");
        }
        const newComment = {
          user: context.user._id,
          comment,
          createdAt: new Date(),
        };
        image.comments.push(newComment);
        await image.save();
        return image;
      } catch (error) {
        console.error("Error adding comment:", error);
        throw new Error("Failed to add comment: ", error.message);
      }
    },
  },
};

module.exports = resolvers;
