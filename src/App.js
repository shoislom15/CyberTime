import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalStyle from "./styles/GlobalStyle";
import Alaram from "./pages/Alaram.js";
import Countdown from "./pages/Countdown.js";
import Stopwatch from "./pages/Stopwatch.js";
import Navbar from "./containers/Navbar";

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="main w-100">
        <Routes  >
          <Route path="/" element={<Alaram />} />
          <Route path="/Countdown/*" element={<Countdown />} />
          <Route path="/Stopwatch/*" element={<Stopwatch />} />
        </Routes>
        <Navbar></Navbar>
      </div>

    </>

  );
}

export default App;
