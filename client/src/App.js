import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Activity from "./pages/Activity";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <div className="ui container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/food" element={<Activity />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
