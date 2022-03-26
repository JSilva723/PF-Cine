import React from "react";
import Movie from "./Movie";

export default function Movies({items}) {
  return (
    <div className="moviesInfo">
      {
        items.map((e) => (
          <Movie
            key={e.id}
            id={e.id}
            titulo={e.titulo}
            poster={e.poster}
            puntuación={e.puntuación}
            clasificacion={e.clasificacion}
            director={e.director}
          />
        ))
      }
    </div>
  );
}
