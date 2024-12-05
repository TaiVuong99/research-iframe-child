import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/abc" element={<div>abc</div>} />
    </Routes>
  );
}

export default App;
