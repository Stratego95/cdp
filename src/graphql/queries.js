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
      owner
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
        owner
      }
      nextToken
    }
  }
`;
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
          owner
        }
        apparatus {
          nextToken
        }
        createdAt
        updatedAt
        owner
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
        owner
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
          owner
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
          owner
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
