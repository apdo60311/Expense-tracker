/**
 * Merges the resolvers from the `user.resolver` and `transaction.resolver` modules
 * into a single `mergedResolvers` object, which can be exported and used by the
 * GraphQL server.
 *
 * @module resolvers
 * @exports {Object} mergedResolvers - The merged resolvers object.
 */
import { mergeResolvers } from "@graphql-tools/merge";
import userResolver from "./user.resolver.js";
import transactionResolver from "../resolvers/transaction.resolver.js";

const mergedResolvers = mergeResolvers(userResolver, transactionResolver);

export default mergedResolvers;
