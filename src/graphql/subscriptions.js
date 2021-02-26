/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateGymnasticElement = /* GraphQL */ `
  subscription OnCreateGymnasticElement {
    onCreateGymnasticElement {
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
export const onUpdateGymnasticElement = /* GraphQL */ `
  subscription OnUpdateGymnasticElement {
    onUpdateGymnasticElement {
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
export const onDeleteGymnasticElement = /* GraphQL */ `
  subscription OnDeleteGymnasticElement {
    onDeleteGymnasticElement {
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
export const onCreateTrainer = /* GraphQL */ `
  subscription OnCreateTrainer($owner: String!) {
    onCreateTrainer(owner: $owner) {
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
export const onUpdateTrainer = /* GraphQL */ `
  subscription OnUpdateTrainer($owner: String!) {
    onUpdateTrainer(owner: $owner) {
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
export const onDeleteTrainer = /* GraphQL */ `
  subscription OnDeleteTrainer($owner: String!) {
    onDeleteTrainer(owner: $owner) {
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
export const onCreateGymnast = /* GraphQL */ `
  subscription OnCreateGymnast($owner: String!) {
    onCreateGymnast(owner: $owner) {
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
export const onUpdateGymnast = /* GraphQL */ `
  subscription OnUpdateGymnast($owner: String!) {
    onUpdateGymnast(owner: $owner) {
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
export const onDeleteGymnast = /* GraphQL */ `
  subscription OnDeleteGymnast($owner: String!) {
    onDeleteGymnast(owner: $owner) {
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
export const onCreateApparatus = /* GraphQL */ `
  subscription OnCreateApparatus {
    onCreateApparatus {
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
export const onUpdateApparatus = /* GraphQL */ `
  subscription OnUpdateApparatus {
    onUpdateApparatus {
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
export const onDeleteApparatus = /* GraphQL */ `
  subscription OnDeleteApparatus {
    onDeleteApparatus {
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
