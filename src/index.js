import React from "react"
import ReactDOM from "react-dom/client"
import GlobalStyles from "./global"
import Home from "./pages/components/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Details from "./pages/components/Details"

// ReactDOM.render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/details/:id" element={<Details />} />
//     </Routes>
//   </BrowserRouter>,
//   document.getElementById("root")
// )

const container = document.getElementById("root")
const root = ReactDOM.createRoot(container)
root.render(
  <>
    <GlobalStyles />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  </>
)
