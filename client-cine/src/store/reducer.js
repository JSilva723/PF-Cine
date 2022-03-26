const initialState = {
  PelisAll: [],
  ProductAll: [],
  GenresAll: [],
  CastAll: [],
  TopPelis: [],
  NextReleases: [],
  Promotions: [],
  ShoppingCart: [],
  PelisDetails: [],
  PelisComments: [],
  ProductDetails: [],
  ProductComments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ALLMOVIES": {
      return {
        ...state,
        PelisAll: state.PelisAll.concat(action.payload.pelis),
      };
    }
    case "ALLPRODUCTS": {
      return {
        ...state,
        ProductAll: state.ProductAll.concat(action.payload.produs),
      };
    }

    case "DETAILEDMOVIE": {
      state = initialState;
      return {
        ...state,
        PelisDetails: action.payload.detis,
      };
    }
    case "DETAILEDPRODUCT": {
      state = initialState;
      return {
        ...state,
        ProductDetails: action.payload.produs,
      };
    }
    case "BESTMOVIES": {
      let pelis = [...state.PelisAll]
      let arreglar = pelis.sort((a, b) =>
        a.puntuación < b.puntuación ? 1 : b.puntuación < a.puntuación ? -1 : 0
      )
      let arregloFinal = arreglar.slice(0, 3)
      return {
        ...state,
        TopPelis: arregloFinal,
      };

    }
    case "GENRES": {
      return {
        ...state,
        GenresAll: state.GenresAll.concat(action.payload.generos),
      };
    }
    case "CAST": {
      return {
        ...state,
        CastAll: state.CastAll.concat(action.payload.actores),
      };
    }
    case "GET_REVIEW_BY_MOVIEID": {
      return {
        ...state,
        PelisComments: action.payload,
      };
    }
    case "POST_REVIEW": {
      return {
        ...state,
      };
    }
    case "PELI_NAME":
      state = initialState;
      return {
        ...state,
        PelisAll: action.payload,
      };
    case "FILTER_REVIEWBYRATING":
      let comentariosByRating;
      if (action.payload === "asc") {
        console.log(action.payload)
        comentariosByRating = state.PelisComments.sort(function (a, b) {
          if (a.puntuación < b.puntuación) {
            return -1
          }
          if (a.puntuación > b.puntuación) {
            return 1
          }
          return 0
        })
      }
      if (action.payload === "des") {
        console.log(action.payload)
        comentariosByRating = state.PelisComments.sort(function (a, b) {
          if (a.puntuación > b.puntuación) {
            return -1
          }
          if (a.puntuación < b.puntuación) {
            return 1
          }
          return 0
        })
      }
      return {
        ...state,
        PelisComments: comentariosByRating
      }

    default: {
      return state;
    }
  };
}

export default reducer;
