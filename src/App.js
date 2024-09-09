import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ParkingApp from "./Component/ParkingApp"
import ParkingLots from "./Component/ParkingLots";


function App() {
  return (
    <>
      
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ParkingApp/>}></Route>
            <Route path="/ParkingLots" element={<ParkingLots />}></Route>
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
