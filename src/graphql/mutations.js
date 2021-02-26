/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createGymnasticElement = /* GraphQL */ `
  mutation CreateGymnasticElement(
    $input: CreateGymnasticElementInput!
    $condition: ModelGymnasticElementConditionInput
  ) {
    createGymnasticElement(input: $input, condition: $condition) {
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
export const updateGymnasticElement = /* GraphQL */ `
  mutation UpdateGymnasticElement(
    $input: UpdateGymnasticElementInput!
    $condition: ModelGymnasticElementConditionInput
  ) {
    updateGymnasticElement(input: $input, condition: $condition) {
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
export const deleteGymnasticElement = /* GraphQL */ `
  mutation DeleteGymnasticElement(
    $input: DeleteGymnasticElementInput!
    $condition: ModelGymnasticElementConditionInput
  ) {
    deleteGymnasticElement(input: $input, condition: $condition) {
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
export const createTrainer = /* GraphQL */ `
  mutation CreateTrainer(
    $input: CreateTrainerInput!
    $condition: ModelTrainerConditionInput
  ) {
    createTrainer(input: $input, condition: $condition) {
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
export const updateTrainer = /* GraphQL */ `
  mutation UpdateTrainer(
    $input: UpdateTrainerInput!
    $condition: ModelTrainerConditionInput
  ) {
    updateTrainer(input: $input, condition: $condition) {
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
export const deleteTrainer = /* GraphQL */ `
  mutation DeleteTrainer(
    $input: DeleteTrainerInput!
    $condition: ModelTrainerConditionInput
  ) {
    deleteTrainer(input: $input, condition: $condition) {
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
export const createGymnast = /* GraphQL */ `
  mutation CreateGymnast(
    $input: CreateGymnastInput!
    $condition: ModelGymnastConditionInput
  ) {
    createGymnast(input: $input, condition: $condition) {
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
export const updateGymnast = /* GraphQL */ `
  mutation UpdateGymnast(
    $input: UpdateGymnastInput!
    $condition: ModelGymnastConditionInput
  ) {
    updateGymnast(input: $input, condition: $condition) {
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
export const deleteGymnast = /* GraphQL */ `
  mutation DeleteGymnast(
    $input: DeleteGymnastInput!
    $condition: ModelGymnastConditionInput
  ) {
    deleteGymnast(input: $input, condition: $condition) {
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
export const createApparatus = /* GraphQL */ `
  mutation CreateApparatus(
    $input: CreateApparatusInput!
    $condition: ModelApparatusConditionInput
  ) {
    createApparatus(input: $input, condition: $condition) {
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
export const updateApparatus = /* GraphQL */ `
  mutation UpdateApparatus(
    $input: UpdateApparatusInput!
    $condition: ModelApparatusConditionInput
  ) {
    updateApparatus(input: $input, condition: $condition) {
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
export const deleteApparatus = /* GraphQL */ `
  mutation DeleteApparatus(
    $input: DeleteApparatusInput!
    $condition: ModelApparatusConditionInput
  ) {
    deleteApparatus(input: $input, condition: $condition) {
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
