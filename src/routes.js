import { BrowserRouter, Routes, Route } from "react-router-dom"

// Components
import { Header } from "./components/Header"
// Pages
import Home from "./pages/Home"
import PageNotFound from "./pages/PageNotFound"


export default function RoutesApp() {
    return (
        <BrowserRouter>

            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    )
}
