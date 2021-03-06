import axios from "axios";

export const getData = (data) => {
    return (dispatch) => {
        return axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                return response.data
            })
            .then(data => {
                dispatch({
                    type:"GET_DATA",
                    payload: data
                })
            })
            .catch(error => {
                throw (error);
            });
    };
};