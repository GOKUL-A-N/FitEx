import React from 'react';
import {Routes,Route} from "react-router-dom"
import Home from './components/Home';
import UpperBody from "./pages/UpperBody";
import LowerBody from "./pages/LowerBody";

const App = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index  element={<UpperBody />} />
            <Route path="LowerBody" element={<LowerBody />} />
          </Route>
        </Routes>
    </div>
  )
}

export default App