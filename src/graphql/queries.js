/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        image
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getElement = /* GraphQL */ `
  query GetElement($id: ID!) {
    getElement(id: $id) {
      id
      name
      description
      image
      value
      apparatus
      group
      compositionRules
      createdAt
      updatedAt
    }
  }
`;
export const listElements = /* GraphQL */ `
  query ListElements(
    $filter: ModelElementFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listElements(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        image
        value
        apparatus
        group
        compositionRules
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
