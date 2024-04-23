import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Home from "./pages/Home"
import { useContext } from "react"
import { AppContext } from "./components/AppContext"

const MainRoutes = () => {
  const {isLoggedIn} = useContext(AppContext)
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/user/:id' element={isLoggedIn ? <Home /> : <Login />} />
    </Routes>
  )
}

export default MainRoutes