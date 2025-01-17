import React, { createContext, useState } from "react"
import { useCookies } from "react-cookie"

export const AppContext = createContext(null)
const AppContextProvider = ({ children }) => {
  const [cookies, setCookies] = useCookies(["access_token"])
  const [isAuthenticated, setIsAuthenticated] = useState(
    cookies.access_token != null
  )

  const contextValues = {
    setCookies,
    isAuthenticated,
    setIsAuthenticated,
  }
  return (
    <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
  )
}

export default AppContextProvider
