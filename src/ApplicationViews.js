import React from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import { Home } from "./Home"
import { SearchBar } from "./components/explore/ExploreSearchBar"
import { Login } from "./components/auth/Login"
import { Register } from "./components/auth/Register"

export const ApplicationViews = ({ isAuthenticated, setIsAuthenticated }) => {

    const PrivateRoute = ({ children }) => {
        return isAuthenticated ? children : <Navigate to="/login" />;
    }

    const setAuthUser = (user) => {
    sessionStorage.setItem("digital_user", JSON.stringify(user))
    setIsAuthenticated(sessionStorage.getItem("digital_user") !== null)
    }

    return (
        <>
            <Routes>
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/" element={<Home />} />

                <Route exact path="/login" element={<Login setAuthUser={setAuthUser} />} />

                <Route exact path="/register" element={<Register />} />

                <Route exact path="/Explore" element={<PrivateRoute><SearchBar /></PrivateRoute>} />                

            </Routes>
        </>
    )
}