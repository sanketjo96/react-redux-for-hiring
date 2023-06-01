/**
 * Here is a section of sample cartReducer
 * 1. Choose shape of your own state
 * 2. addProduct should add product to the cart, adding same product again should increase qty and price
 * 3. Remove product should remove products with quantity.
 */

export const cartReducer = (state = {}, action) => {
  switch (action.type) {
    case "addProduct":
      return {
        ...state
      };
    case "RemoveProduct":
      return {
        ...state
      };
    default:
      return state;
  }
};
