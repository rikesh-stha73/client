import { setProducts, setLoading, setErrors, setPagination } from "../slices/product";
import axios from "axios";


export const getProducts = (page, favouriteToggle) => async (dispatch) => {
    dispatch(setLoading());
    try {
        const { data } = await axios.get(`/api/products`);
        const { products, pagination } = data;
        dispatch(setProducts(products));
        dispatch(setPagination(pagination));
    } catch (error) {
        dispatch(setErrors(error.response && error.response.date.message ? error.response.date.message : error.message ? error.message: 'An unexpected error occured'));
    }
}