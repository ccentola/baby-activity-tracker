import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Activity from "./pages/Activity";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <div className="ui container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/food" element={<Activity />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
