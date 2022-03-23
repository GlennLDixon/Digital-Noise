import React, {useState} from "react"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "../ApplicationViews"
import "./DigitalNoise.css"

export const DigitalNoise = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("digital_user") !== null)

    const setAuthUser = (user) => {
        sessionStorage.setItem("digital_user", JSON.stringify(user))
        setIsAuthenticated(sessionStorage.getItem("digital_user") !== null)
    }

    const clearUser = () => {
        sessionStorage.clear();
        setIsAuthenticated(sessionStorage.getItem("digital_user") !== null)
    }

    return (
        <>
            <NavBar clearUser={clearUser} isAuthenticated={isAuthenticated}/>
            <ApplicationViews setAuthUser={setAuthUser} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
        </>
    )
}