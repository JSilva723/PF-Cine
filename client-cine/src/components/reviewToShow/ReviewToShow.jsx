import React from "react"
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getAllReview } from "../../actions";


const ReviewToShow = () => {
    // const [] = useState();
    const comentarios = useSelector(state => state.comentarios);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllReview())
    }, [dispatch])

    return (
        <div>
            {
                comentarios && comentarios.map(c => {
                    return (
                        <div>
                            <div>{c.puntuación}</div>
                            <p>{c.comentario}</p>
                            <br></br>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ReviewToShow;