/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
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
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getCartItem = /* GraphQL */ `
  query GetCartItem($id: ID!) {
    getCartItem(id: $id) {
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
export const listCartItems = /* GraphQL */ `
  query ListCartItems(
    $filter: ModelCartItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCartItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
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
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        items {
          id
          size
          count
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
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listCategorys = /* GraphQL */ `
  query ListCategorys(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
