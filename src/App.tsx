import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Desktop from "./Desktop";
import ThankYou from "./ThankYou";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Desktop />} />
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>
    </Router>
  );
}

export default App;
