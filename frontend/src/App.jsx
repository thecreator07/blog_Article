import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Homepage from "./components/Homepage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/*" element={<Homepage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
