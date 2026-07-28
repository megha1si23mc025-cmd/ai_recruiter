import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Dashboard from "./pages/Dashboard";
import JobCreation from "./pages/JobCreation";
import CandidateUpload from "./pages/CandidateUpload";
import CandidateAnalysis from "./pages/CandidateAnalysis";
import InterviewScheduling from "./pages/InterviewScheduling";
import PipelineKanban from "./pages/PipelineKanban";
import "./custom.css";

function App() {
  return (
    <Router>
      <NavBar />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/job" element={<JobCreation />} />
          <Route path="/upload" element={<CandidateUpload />} />
          <Route path="/analysis" element={<CandidateAnalysis />} />
          <Route path="/schedule" element={<InterviewScheduling />} />
          <Route path="/pipeline" element={<PipelineKanban />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
