/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createElement = /* GraphQL */ `
  mutation CreateElement(
    $input: CreateElementInput!
    $condition: ModelElementConditionInput
  ) {
    createElement(input: $input, condition: $condition) {
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
export const updateElement = /* GraphQL */ `
  mutation UpdateElement(
    $input: UpdateElementInput!
    $condition: ModelElementConditionInput
  ) {
    updateElement(input: $input, condition: $condition) {
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
export const deleteElement = /* GraphQL */ `
  mutation DeleteElement(
    $input: DeleteElementInput!
    $condition: ModelElementConditionInput
  ) {
    deleteElement(input: $input, condition: $condition) {
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
export const createGymnastsApparatus = /* GraphQL */ `
  mutation CreateGymnastsApparatus(
    $input: CreateGymnastsApparatusInput!
    $condition: ModelGymnastsApparatusConditionInput
  ) {
    createGymnastsApparatus(input: $input, condition: $condition) {
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
export const updateGymnastsApparatus = /* GraphQL */ `
  mutation UpdateGymnastsApparatus(
    $input: UpdateGymnastsApparatusInput!
    $condition: ModelGymnastsApparatusConditionInput
  ) {
    updateGymnastsApparatus(input: $input, condition: $condition) {
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
export const deleteGymnastsApparatus = /* GraphQL */ `
  mutation DeleteGymnastsApparatus(
    $input: DeleteGymnastsApparatusInput!
    $condition: ModelGymnastsApparatusConditionInput
  ) {
    deleteGymnastsApparatus(input: $input, condition: $condition) {
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
