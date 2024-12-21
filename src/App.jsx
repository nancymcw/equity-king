import "./App.css";
import { Home } from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import { Navigation } from "./Components/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
