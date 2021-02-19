/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateElement = /* GraphQL */ `
  subscription OnCreateElement {
    onCreateElement {
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
export const onUpdateElement = /* GraphQL */ `
  subscription OnUpdateElement {
    onUpdateElement {
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
export const onDeleteElement = /* GraphQL */ `
  subscription OnDeleteElement {
    onDeleteElement {
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
export const onCreateGymnastsApparatus = /* GraphQL */ `
  subscription OnCreateGymnastsApparatus {
    onCreateGymnastsApparatus {
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
export const onUpdateGymnastsApparatus = /* GraphQL */ `
  subscription OnUpdateGymnastsApparatus {
    onUpdateGymnastsApparatus {
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
export const onDeleteGymnastsApparatus = /* GraphQL */ `
  subscription OnDeleteGymnastsApparatus {
    onDeleteGymnastsApparatus {
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
