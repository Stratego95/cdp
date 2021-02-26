/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGymnasticElement = /* GraphQL */ `
  query GetGymnasticElement($id: ID!) {
    getGymnasticElement(id: $id) {
      id
      identifier
      description
      group
      difficulty
      apparatus
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listGymnasticElements = /* GraphQL */ `
  query ListGymnasticElements(
    $filter: ModelGymnasticElementFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGymnasticElements(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        identifier
        description
        group
        difficulty
        apparatus
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getTrainer = /* GraphQL */ `
  query GetTrainer($id: ID!) {
    getTrainer(id: $id) {
      id
      name
      gymnasts {
        items {
          id
          name
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listTrainers = /* GraphQL */ `
  query ListTrainers(
    $filter: ModelTrainerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTrainers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        gymnasts {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getGymnast = /* GraphQL */ `
  query GetGymnast($id: ID!) {
    getGymnast(id: $id) {
      id
      name
      trainer {
        id
        name
        gymnasts {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      apparatus {
        items {
          id
          name
          elements
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listGymnasts = /* GraphQL */ `
  query ListGymnasts(
    $filter: ModelGymnastFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGymnasts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        trainer {
          id
          name
          createdAt
          updatedAt
          owner
        }
        apparatus {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getApparatus = /* GraphQL */ `
  query GetApparatus($id: ID!) {
    getApparatus(id: $id) {
      id
      name
      gymnast {
        id
        name
        trainer {
          id
          name
          createdAt
          updatedAt
          owner
        }
        apparatus {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      elements
      createdAt
      updatedAt
    }
  }
`;
export const listApparatuss = /* GraphQL */ `
  query ListApparatuss(
    $filter: ModelApparatusFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listApparatuss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        gymnast {
          id
          name
          createdAt
          updatedAt
          owner
        }
        elements
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
