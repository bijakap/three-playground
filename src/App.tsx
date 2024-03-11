import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home, PlaygroundPage, EnvPGPage } from "./pages";

function App() {
  return (
    <main className="w-full bg-slate-300/20">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/playground" element={<PlaygroundPage />} />
          <Route path="/enviroments" element={<EnvPGPage />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
