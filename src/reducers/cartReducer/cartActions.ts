export const getAddProductAction = (payload) => {
  return {
    type: "addProduct",
    payload
  };
};

export const getRemoveProductAction = (payload) => {
  return {
    type: "RemoveProduct",
    payload
  };
};
