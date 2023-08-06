import "./App.css";
import ListEmployeeStateLess from "./components/ListEmployeeStateLess";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import AddEmployee from "./components/AddEmployee";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<h1>Welcome</h1>} />
            <Route path="/employees" element={<ListEmployeeStateLess />} />
            <Route path="/login" element={<h1> Not found</h1>} />
            <Route path="/addEmployee" element={<AddEmployee />} />
            <Route path="/updateemployee/:id" element={<AddEmployee />} />
          </Routes>
        </div>
      </Router>
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default App;
