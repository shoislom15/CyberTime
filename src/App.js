import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalStyle from "./styles/GlobalStyle";
import Alaram from "./pages/Alaram.js";
import Countdown from "./pages/Countdown.js";
import Stopwatch from "./pages/Stopwatch.js";
import Navbar from "./containers/Navbar";
import { useState } from "react";
import Alarams from "./Data/dataAlarams";

function App() {

  const [alarms, setAlarms] = useState([
    {
      time: "03:00",
      date: "",
      type: "repeatable",
      weekDays: [
        "Monday",
        "Friday",
      ],
      active: true,
    },
    {
      time: "03:00",
      date: "",
      type: "repeatable",
      weekDays: [
        "Monday",
        "Friday",
      ],
      active: true,
    },
    {
      time: "03:00",
      date: "",
      type: "repeatable",
      weekDays: [
        "Monday",
        "Friday",
      ],
      active: true,
    },
    {
      time: "03:00",
      date: "",
      type: "repeatable",
      weekDays: [
        "Monday",
        "Friday",
      ],
      active: false,
    },
    {
      time: "03:00",
      date: "",
      type: "repeatable",
      weekDays: [
        "Monday",
        "Friday",
      ],
      active: true,
    },
    {
      time: "03:00",
      date: "",
      type: "repeatable",
      weekDays: [
        "Monday",
        "Friday",
      ],
      active: true,
    },
    {
      time: "03:00",
      date: "",
      type: "repeatable",
      weekDays: [
        "Monday",
        "Friday",
      ],
      active: true,
    },
    {
      time: "03:00",
      date: "",
      type: "repeatable",
      weekDays: [
        "Monday",
        "Friday",
      ],
      active: true,
    },
    {
      time: "03:00",
      date: "",
      type: "repeatable",
      weekDays: [
        "Monday",
        "Friday",
      ],
      active: true,
    },
    {
      time: "03:00",
      date: "",
      type: "repeatable",
      weekDays: [
        "Monday",
        "Friday",
      ],
      active: true,
    },
    {
      time: "03:00",
      date: "",
      type: "repeatable",
      weekDays: [
        "Monday",
        "Friday",
      ],
      active: true,
    },
  ],
  )

  return (
    <Alarams.Provider value={{ alarms, setAlarms }}>
      <GlobalStyle />
      <div className="main w-100">
        <Routes  >
          <Route path="/" element={<Alaram />} />
          <Route path="/Countdown/*" element={<Countdown />} />
          <Route path="/Stopwatch/*" element={<Stopwatch />} />
        </Routes>
        <Navbar></Navbar>
      </div>

    </Alarams.Provider>

  );
}

export default App;
