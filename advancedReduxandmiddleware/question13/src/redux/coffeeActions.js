import axios from "axios";

const API = "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee";

export const fetchCoffee = (sort) => async (dispatch) => {
  dispatch({ type: "FETCH_COFFEE_REQUEST" });
  try {
    const url = sort
      ? `${API}?sort=price&order=${sort}`
      : API;
    const res = await axios.get(url);
    dispatch({ type: "FETCH_COFFEE_SUCCESS", payload: res.data.data });
  } catch (error) {
    dispatch({ type: "FETCH_COFFEE_FAILURE", payload: error.message });
  }
};

export const setSort = (sort) => ({
  type: "SET_SORT",
  payload: sort
});
