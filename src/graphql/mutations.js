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
export const updateTrainer = /* GraphQL */ `
  mutation UpdateTrainer(
    $input: UpdateTrainerInput!
    $condition: ModelTrainerConditionInput
  ) {
    updateTrainer(input: $input, condition: $condition) {
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
export const deleteTrainer = /* GraphQL */ `
  mutation DeleteTrainer(
    $input: DeleteTrainerInput!
    $condition: ModelTrainerConditionInput
  ) {
    deleteTrainer(input: $input, condition: $condition) {
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
