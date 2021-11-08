/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
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
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
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
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
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
export const createCartItem = /* GraphQL */ `
  mutation CreateCartItem(
    $input: CreateCartItemInput!
    $condition: ModelCartItemConditionInput
  ) {
    createCartItem(input: $input, condition: $condition) {
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
export const updateCartItem = /* GraphQL */ `
  mutation UpdateCartItem(
    $input: UpdateCartItemInput!
    $condition: ModelCartItemConditionInput
  ) {
    updateCartItem(input: $input, condition: $condition) {
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
export const deleteCartItem = /* GraphQL */ `
  mutation DeleteCartItem(
    $input: DeleteCartItemInput!
    $condition: ModelCartItemConditionInput
  ) {
    deleteCartItem(input: $input, condition: $condition) {
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
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
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
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
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
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
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
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
