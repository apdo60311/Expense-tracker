/**
 * This module defines the GraphQL type definitions for the Transaction entity and related queries and mutations.
 *
 * The `Transaction` type represents a financial transaction with the following fields:
 * - `_id`: The unique identifier of the transaction.
 * - `userId`: The ID of the user associated with the transaction.
 * - `description`: A description of the transaction.
 * - `category`: The category of the transaction.
 * - `amount`: The monetary amount of the transaction.
 * - `location`: The location of the transaction.
 * - `date`: The date of the transaction.
 *
 * The `Query` type defines two queries:
 * - `transactions`: Retrieves a list of all transactions.
 * - `transaction`: Retrieves a single transaction by its ID.
 *
 * The `Mutation` type defines three mutations:
 * - `createTransaction`: Creates a new transaction with the provided input.
 * - `updateTransaction`: Updates an existing transaction with the provided input.
 * - `deleteTransaction`: Deletes an existing transaction by its ID.
 *
 * The `CreateTransactionInput` and `UpdateTransactionInput` types define the input parameters for the corresponding mutations.
 */
const transactionTypeDef = `#graphql 

    type Transaction {
        _id: ID!,
        userId: ID!,
        description: String!,
        category: String!,
        amount: Float!,
        location: String,
        date: String,
    }

    type Query {
        transactions: [Transaction!],
        transaction(transactionId: ID!): Transaction,
    }

    type Mutation {
        createTransaction(input: CreateTransactionInput): Transaction!,
        updateTransaction(transactionId: ID!, input: UpdateTransactionInput): Transaction!,
        deleteTransaction(transactionId: ID!): Transaction!,
    }

    input CreateTransactionInput {
        userId: ID!,
        description: String!,
        category: String!,
        amount: Float!,
        location: String,
        date: String,
    }
    
    input UpdateTransactionInput {
        transactionId: ID!
        description: String,
        category: String,
        amount: Float,
        location: String,
        date: String,
    }
`;

export default transactionTypeDef;
