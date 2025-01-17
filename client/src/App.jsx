import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import WelcomePage from "./Pages/WelcomePage"
import Navbar from "./Components/Navbar"
import { Toaster } from "sonner"
import HomePage from "./Pages/HomePage"
import AppContextProvider from "./Context/AppContext"
import Protected from "./Components/Protected"
import Register from "./Components/Register"

const App = () => {
  return (
    <div>
      <Toaster position="top-right" richColors />
      <AppContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/login" element={<WelcomePage />} />
            <Route path="/register" element={<Register />} />
            <Route element={<Protected />}>
              <Route path="/" element={<HomePage />} />
            </Route>
          </Routes>
        </Router>
      </AppContextProvider>
    </div>
  )
}

export default App
