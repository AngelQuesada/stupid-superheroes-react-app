import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth/context/AuthContext";

/**
 * Depending if you're logged it will show the private routes
 * or it will redirect you to the login page
 * @param {Routes} children bunch of routes that will be private
 * @returns children or a redirect to login
 */
export const PrivateRoute = ({ children }) => {

    const { logged } = useContext( AuthContext );
    const { pathname, search } = useLocation();

    const lastPath = pathname + search;

    localStorage.setItem('lastPath', lastPath);

    return (logged)
            ? children
            : <Navigate to="/login" />
}

