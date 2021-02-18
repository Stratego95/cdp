/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
export const getTrainer = /* GraphQL */ `
  query GetTrainer($id: ID!) {
    getTrainer(id: $id) {
      id
      name
      gymnasts {
        id
        name
        trainer {
          id
          name
          createdAt
          updatedAt
        }
        apparatus {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
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
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      apparatus {
        id
        name
        gymnast {
          id
          name
          createdAt
          updatedAt
        }
        elments {
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
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
        }
        apparatus {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getGymnastsApparatus = /* GraphQL */ `
  query GetGymnastsApparatus($id: ID!) {
    getGymnastsApparatus(id: $id) {
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
        }
        apparatus {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      elments {
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
      createdAt
      updatedAt
    }
  }
`;
export const listGymnastsApparatuss = /* GraphQL */ `
  query ListGymnastsApparatuss(
    $filter: ModelGymnastsApparatusFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGymnastsApparatuss(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        gymnast {
          id
          name
          createdAt
          updatedAt
        }
        elments {
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
