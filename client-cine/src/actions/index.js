import { Service } from '../utils/service'
import { REQUEST_FAILED, POST_REVIEW, GET_REVIEW } from './types'
import axios from "axios"

const api = new Service()

// -------------------------       Async action -------------------------------

// export const nombreFunction = () => ((dispatch) =>{
//   api.nombreMetodo() 
//     .then(res => {
//       // Procesamos res
//       dispatch({
//         type: Enviamos el type,
//         payload: Enviamos payload
//       });
//     })
//     .catch(err => {
//       dispatch({
//         type: REQUEST_FAILED,
//         payload: err
//       })
//     })
// })


// -----------------------------     Sync action ---------------------------------------

// export const nombreFunction = (attr) => {
//   return {
//     type: Enviamos el type,
//     payload: Enviamos pauload (attr)
//   };
// }; 


export const postReview = (payload) => {
    return async dispatch => {
        const json = await axios.post("/localhost:3001/comentarios", payload)
        return dispatch({
            type: POST_REVIEW,
            payload: json
        })
    }
}

export function getAllReview() {
    return async function (dispatch) {
        const json = await axios.get("/localhost:3001/comentarios")
        return dispatch({
            type: GET_REVIEW,
            payload: json.data
        })
    }
}