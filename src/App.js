import "./App.css";
import Description from "./components/Description";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Summary from "./components/Summary";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Description/>} />
          <Route path="/Summary" element={<Summary />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
