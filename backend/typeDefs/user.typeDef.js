const userTypeDef = `#graphql
  type User {
    _id:ID!,    
    name: String!
    username: String!,
    password: String!,
    profilePicture: String,
    gender: String!
 }

  type Query {
    users: [User!],
    authUser: User,
    user(userId:ID!): User,
  }

  type Mutation {
    signUp(input: SignUpInput): User,
    signin(input: SignInInput): User,
    logout: LogoutResponse
  }

  input SignUpInput {
    name: String,
    username: String!,
    password: String,
    gender: String!
  }

  input SignInInput {
    username: String!,
    password: String,
  }

  type LogoutResponse {
    message: String
  }

`;

export default userTypeDef;
