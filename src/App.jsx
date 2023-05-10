import React from 'react';
import { Routes,Route} from "react-router-dom"
import Home from './components/Home';
import UpperBody from "./pages/UpperBody";
import LowerBody from "./pages/LowerBody";
import Abs from "./pages/UpperPage/Abs"
import Biceps from "./pages/UpperPage/Biceps"
import Chest from "./pages/UpperPage/Chest"
import Forearms from "./pages/UpperPage/Forearms"
import LatsAndBack from "./pages/UpperPage/LatsAndBack"
import Shoulders from "./pages/UpperPage/Shoulders"
import Traps from "./pages/UpperPage/Traps"
import Triceps from "./pages/UpperPage/Triceps";
import Calf from "./pages/LowerPage/Calf";
import Glutes from "./pages/LowerPage/Glutes";
import Hamstring from "./pages/LowerPage/Hamstring";
import Quads from "./pages/LowerPage/Quads";

const App = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/UpperBody"  element={<UpperBody />} >
                    <Route path="abs" element={<Abs />} />
                    <Route path="biceps" element={<Biceps />} />
                    <Route path="chest" element={<Chest />} />
                    <Route path="forearms" element={<Forearms />} />
                    <Route path="latsandback" element={<LatsAndBack />} />
                    <Route path="shoulders" element={<Shoulders />} />
                    <Route path="triceps" element={<Triceps />} />
                    <Route path="traps" element={<Traps />} />
            </Route> 
            <Route path="/LowerBody" element={<LowerBody />} >
                    <Route path="calf" element={<Calf />} />
                    <Route path="glutes" element={<Glutes />} />
                    <Route path="hamstring" element={<Hamstring />} />
                    <Route path="quads" element={<Quads />} />
            </Route>
          </Route>
        </Routes>
    </div>
  )
}

export default App