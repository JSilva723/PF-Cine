import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CreateActor from "./CreateActor/CreateActor.jsx";
import CreateGenre from "./CreateGenre/CreateGenre.jsx";
import CreateMovies from "./CreateMovies/CreateMovies.js";
import DetailsMovies from "./Details/DetailsMovies";
import Home from "./home/Home.js";
import { Profile } from "./profile/Profile.js";
import SobreNosotros from "./SobreNosotros/SobreNosotros.js";
import Review from "./Review/Review.jsx";
import ShoppingCart from "./ShoppingCart/ShoppingCart.jsx";

import Admin from "./AdminPanel/Admin.jsx";

//Changes
import { AuthProvider } from "../contexts/AuthContext";
import Signup from "./Signup";
import Dashboard from "./Dashboard";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import PrivateUpdate from "./PrivateUpdate";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";

import ReviewToShow from "./ReviewToShow/ReviewToShow.jsx";
import Admin from './AdminPanel/Admin.jsx';


export const App = () => {
  return (
    <Router>

      <AuthProvider>
        <Routes>
          /*Rutas agregadas*/
          <Route
            exact
            path="/dash"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/update-profile"
            element={
              <PrivateUpdate>
                <UpdateProfile />
              </PrivateUpdate>
            }
          />
          /*Rutas agregadas*/ /*Rutas privadas*/
          <Route
            path="/admin"
            element={
    
                
                <Admin />
     
            }
          />
          <Route
            path="/admin/createmovies"
            element={
       
                <CreateMovies />
          
            }
          />
          <Route
            path="/admin/createactor"
            element={
            
              
                <CreateActor />
            
            }
          />
          <Route
            path="/admin/creategenero"
            element={
         
              
                <CreateGenre />
             
            }
          />
          /*Rutas privadas*/
          <Route path="/" element={<Home />} />
          <Route path="/review" element={<Review />} />
          <Route path="/MovieDetails/:id" element={<DetailsMovies />} />
          <Route path="/shoppingcart" element={<ShoppingCart />} />
          <Route path="/about" element={<SobreNosotros />} />
          <Route path="/portal" element={<Profile />} />
        </Routes>
      </AuthProvider>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/review/:id" element={<Review />} />
        <Route path="/reviewtoshow/:id" element={<ReviewToShow />} />
        <Route path="/MovieDetails/:id" element={<DetailsMovies />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
        <Route path="/about" element={<SobreNosotros />} />

        <Route path="/portal" element={<Profile />} />
      </Routes>

    </Router>
  );
};
