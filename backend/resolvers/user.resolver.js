import { users } from "../data/dummyData.js";

const userResolver = {
  Query: {
    users: () => users,
    authUser: () => {},
    user: (_, { userId }) => users.find((user) => user._id === userId),
  },

  Mutation: {},
};

export default userResolver;
