import "./App.css";
import { Home } from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import { Navigation } from "./Components/Navigation";
import { Gallery } from "./Pages/Gallery";

function App() {
  return (
    <>
      <Navigation />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/gallery" element={<Gallery />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
