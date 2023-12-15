const getProduct = (searchQuery) => {
  return async (dispatch) => {
    const url = `https://my-json-server.typicode.com/chois98/shopping-site/products?q=${searchQuery}`;
    const response = await fetch(url);
    const data = await response.json();
    dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data } });
  };
};

export const productsAction = { getProduct };
