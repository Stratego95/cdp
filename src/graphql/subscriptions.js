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
    }
  }
`;
export const onCreateTrainer = /* GraphQL */ `
  subscription OnCreateTrainer {
    onCreateTrainer {
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
export const onUpdateTrainer = /* GraphQL */ `
  subscription OnUpdateTrainer {
    onUpdateTrainer {
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
export const onDeleteTrainer = /* GraphQL */ `
  subscription OnDeleteTrainer {
    onDeleteTrainer {
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
export const onCreateGymnast = /* GraphQL */ `
  subscription OnCreateGymnast {
    onCreateGymnast {
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
export const onUpdateGymnast = /* GraphQL */ `
  subscription OnUpdateGymnast {
    onUpdateGymnast {
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
export const onDeleteGymnast = /* GraphQL */ `
  subscription OnDeleteGymnast {
    onDeleteGymnast {
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
