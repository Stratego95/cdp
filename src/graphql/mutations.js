/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
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
