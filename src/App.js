import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import "./styles/global.scss"

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Routes>
          <Route path="/accueil" element={<HomePage />}/>
          <Route path="/" element={<HomePage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
