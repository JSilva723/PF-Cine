import React from "react";
import { Route, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";


export default function PrivateRoute({
  rol: Rol,
  component: Component,
  ...rest
}) {
  const { user, currentUser } = useAuth();


  return <>{user && user.rol === `${Rol}` ? <Component /> : <Navigate to="/" />}</>;

}
