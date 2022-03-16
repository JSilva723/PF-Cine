import React, { useState } from "react"

const Review = () => {

    const [input, setInput] = useState()
    const [score, setScore] = useState()

    const onChange = (e) => {
        setInput(e.target.value)
    }

    const onClick = number => {
        setScore(number)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log({input, score})
        // aca se debe hacer un post con el username, score y review
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>Tu opinión nos importa, ¡Evalúa esta pelicula!</h3>
                <span>¿Cuántas estrellas le das a esta pelicula?</span>
                <span>(Selecciona de 1 a 5 estrellas en tu respuesta, siendo 1 la peor valoración y 5 la mejor).</span>
                <div>
                    <span onClick={()=>onClick(1)}>★</span>
                    <span onClick={()=>onClick(2)}>★</span>
                    <span onClick={()=>onClick(3)}>★</span>
                    <span onClick={()=>onClick(4)}>★</span>
                    <span onClick={()=>onClick(5)}>★</span>
                </div>
                <div>
                    <h4>¡Cuéntanos que te pareció la pelicula!</h4>
                    <textarea cols="20" rows="10" onChange={onChange}></textarea>
                </div>
                <button>Publicar comentario</button>
            </form>
        </div>
    )
}

export default Review;