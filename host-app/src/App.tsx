import { Route, Routes } from "react-router-dom";
import "./App.css";

import PageTest from "./page";

function App() {
  return (
    <div className="app">
        <Routes>
          <Route path="/" element={<PageTest/>} />
        </Routes>
    </div>
  );
}

export default App;
