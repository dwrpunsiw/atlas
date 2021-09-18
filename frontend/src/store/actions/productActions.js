import axios from "axios";
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAILED,
} from "../../shared/constants/productConstants";

export const listProducts = () => async (dispatch) => {
  // inside react-thunk
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });

    // request data to server
    const { data } = await axios.get("/api/products");

    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAILED,
      error:
        error.message && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
