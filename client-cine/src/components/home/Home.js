import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from '../Navbar/navbar.jsx'
import MapView from '../mapView/MapView.js'

import {
  FalseInfo,
  FalseGenres,
  FiltrarGenero
} from "../../store/actions";

import Movies from "../Movies/Movies.js"
import Pagination from "../Movies/Pagination"

import FiltroGeneros from "../filters/filterGenre.js";


export const Home = () => {

  //*dispatch de prueba para las pelis falas que luego sera usado en mostar todas laspelis
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FalseInfo());
  }, [dispatch]);
  const pelisfalsas = useSelector((state) => state.PelisAll);

  const [container, setContainer] = useState([]);

  React.useEffect(() => { //luego se añadira filter aqui para decidir si se muestran los resultados filtrados o las pelis
    if (pelisfalsas !== 0) {
      setContainer(pelisfalsas);
    }
  }, [pelisfalsas]);

  //*

  //*paginado 
  const [loading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(2);

  const indexOfLastPost = currentPage * moviesPerPage;
  const indexOfFirstPost = indexOfLastPost - moviesPerPage;
  const currentPost = container.slice(indexOfFirstPost, indexOfLastPost);


//* Filtros
const FiltradoGeneros = (arg) => {
    dispatch(FiltrarGenero(arg));
  };
  const pelisFiltradas = useSelector((state) => state.PelisFiltred);
 /*if(pelisFiltradas.length !== 0){
  setContainer(pelisFiltradas)
 }*/

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  //*

dispatch(FalseGenres())
  return (
    <div>
      <div>
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="ls" sx={{ height: "auto" }}>
            <Navbar />
          </Container>
        </React.Fragment>
      </div>

      <div className="Home__Wellcome!">
        <h1>Wellcome!!!</h1>
      </div>

      <div className='filterContainer'>
       <FiltroGeneros
              FalseGenres={FalseGenres}
              FiltradoGeneros={FiltradoGeneros}
            />
      </div>


      <div className="Home__PelisContainer">
        <Movies moviesInfo={currentPost} loading={loading} />
      </div>
      <div>
        <Pagination
          className="Home__pagination__li"
          moviesPerPage={moviesPerPage}
          totalMovies={container.length}
          paginate={paginate}
        />
      </div>
      <div className='mapContainer'>
      <MapView />
      </div>
    </div>
  )
}
