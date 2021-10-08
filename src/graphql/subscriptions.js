/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct {
    onCreateProduct {
      id
      name
      description
      price
      image {
        bucket
        region
        key
      }
      category {
        id
        name
        description
        createdAt
        updatedAt
      }
      countInStock
      shipped
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct {
    onUpdateProduct {
      id
      name
      description
      price
      image {
        bucket
        region
        key
      }
      category {
        id
        name
        description
        createdAt
        updatedAt
      }
      countInStock
      shipped
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct {
    onDeleteProduct {
      id
      name
      description
      price
      image {
        bucket
        region
        key
      }
      category {
        id
        name
        description
        createdAt
        updatedAt
      }
      countInStock
      shipped
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCartItem = /* GraphQL */ `
  subscription OnCreateCartItem {
    onCreateCartItem {
      id
      product {
        id
        name
        description
        price
        image {
          bucket
          region
          key
        }
        category {
          id
          name
          description
          createdAt
          updatedAt
        }
        countInStock
        shipped
        createdAt
        updatedAt
      }
      size
      count
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCartItem = /* GraphQL */ `
  subscription OnUpdateCartItem {
    onUpdateCartItem {
      id
      product {
        id
        name
        description
        price
        image {
          bucket
          region
          key
        }
        category {
          id
          name
          description
          createdAt
          updatedAt
        }
        countInStock
        shipped
        createdAt
        updatedAt
      }
      size
      count
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCartItem = /* GraphQL */ `
  subscription OnDeleteCartItem {
    onDeleteCartItem {
      id
      product {
        id
        name
        description
        price
        image {
          bucket
          region
          key
        }
        category {
          id
          name
          description
          createdAt
          updatedAt
        }
        countInStock
        shipped
        createdAt
        updatedAt
      }
      size
      count
      createdAt
      updatedAt
    }
  }
`;
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder {
    onCreateOrder {
      id
      items {
        id
        product {
          id
          name
          description
          price
          countInStock
          shipped
          createdAt
          updatedAt
        }
        size
        count
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder {
    onUpdateOrder {
      id
      items {
        id
        product {
          id
          name
          description
          price
          countInStock
          shipped
          createdAt
          updatedAt
        }
        size
        count
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder {
    onDeleteOrder {
      id
      items {
        id
        product {
          id
          name
          description
          price
          countInStock
          shipped
          createdAt
          updatedAt
        }
        size
        count
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory {
    onDeleteCategory {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
