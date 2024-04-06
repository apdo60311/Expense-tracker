/**
 * Merges the type definitions for the user and transaction types into a single merged type definition.
 *
 * @returns {Object} The merged type definitions.
 */
import { mergeTypeDefs } from "@graphql-tools/merge";
import userTypeDef from "./user.typeDef.js";
import transactionTypeDef from "./transaction.typeDef.js";

const mergedTypeDefs = mergeTypeDefs([userTypeDef, transactionTypeDef]);

export default mergedTypeDefs;
