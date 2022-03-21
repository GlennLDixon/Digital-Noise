import React from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import { Home } from "./Home"

import { Login } from "./components/auth/Login"
import { Register } from "./components/auth/Register"
import ExplorePage from "./components/explore/ExplorePage"
import { MessagePage } from "./components/messages/MessagePage"
import { ProfilePage } from "./components/profile/profilePage"
import { PlayListDetails } from "./components/playlist/PlayListDetails"

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
                
                <Route exact path="/messages" element={
                    // <PrivateRoute>
                        <MessagePage />
                    // </PrivateRoute>
                } />                

                <Route exact path="/profile" element={
                    // <PrivateRoute>
                        <ProfilePage />
                    // </PrivateRoute>
                } /> 

                <Route path="/playlist/:id" element={<PlayListDetails />} />            

                <Route exact path="/explore" element={
                    // <PrivateRoute>
                        <ExplorePage />
                    // </PrivateRoute>
                } />                
                

            </Routes>
        </>
    )
}