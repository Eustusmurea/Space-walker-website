import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Home from "./pages/home";
import Destination from "./pages/destination";
import Crew from "./pages/crew";
import Technology from "./pages/technology";
import Contacts from "./pages/contacts";
import "./App.css";
import Navbar from "./components/ui/navbar";

function App() {
  return (
    <Router>
      <div>
        <Analytics />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="destination/*" element={<Destination />} />
          <Route path="crew/*" element={<Crew />} />
          <Route path="technology/*" element={<Technology />} />
          <Route path="contacts" element={<Contacts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
