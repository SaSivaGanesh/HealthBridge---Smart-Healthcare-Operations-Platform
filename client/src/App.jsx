import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Header = React.lazy(() => import("./public_components/public_header"));
const Home = React.lazy(() => import("./public_components/Home"));
const Services = React.lazy(() => import("./public_components/Services"));
function App() {
  
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
