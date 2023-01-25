import { Route, Routes } from "react-router"
import { Home } from "../components/Home"
import { Todos } from "../components/Todos"


export const RoutesPages = () => {
    return (
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos" element={<Todos />} />
       </Routes>
    )
}