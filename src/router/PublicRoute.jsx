import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/context/AuthContext";

/**
 * Depending if you're logged it will show the public route (login)
 * or it will redirect you to the marvel page
 * @param {Routes} children bunch of routes that will be private
 * @returns children or a redirect to login
 */
export const PublicRoute = ({ children }) => {

    const { logged } = useContext( AuthContext );
    
    const lastPath = localStorage.getItem('lastPath') || '/';

    return (logged)
            ? <Navigate to={lastPath} />
            : children
}

