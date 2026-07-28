import { useState, type FormEvent } from "react";
import { useApi } from "../hooks/useApi";
import PageWrapper from "../components/PageWrapper";

export default function CandidateAnalysis() {
  const [jobDescription, setJobDescription] = useState("");
  const [resumeText, setResumeText] = useState("");
  const { loading, error, data, call } = useApi<{ match_result: string }>(
    "http://127.0.0.1:8000/agents/match"
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    call({ job_description: jobDescription, resume_text: resumeText });
  };

  return (
    <PageWrapper title="Candidate Analysis">
      <div className="card">
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
            <div>
              <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600 }}>Job Description</label>
              <textarea
                rows={8}
                placeholder="Paste the Job Description here..."
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                required
              />
            </div>
            <div>
              <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600 }}>Candidate Resume</label>
              <textarea
                rows={8}
                placeholder="Paste Candidate Resume text here..."
                value={resumeText}
                onChange={(e) => setResumeText(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="btn"
              disabled={loading}
              style={{ minWidth: "200px" }}
            >
              {loading ? "Analyzing Match…" : "Analyze Candidate Match"}
            </button>
          </div>
        </form>
        {error && <p style={{ color: "red", marginTop: "1rem" }}>Error: {error}</p>}
      </div>

      {data && (
        <div className="card" style={{ marginTop: "1.5rem" }}>
          <h2 className="section-title">Analysis Results</h2>
          <div style={{ whiteSpace: "pre-wrap", lineHeight: "1.6", color: "var(--text-h)" }}>
            {data.match_result}
          </div>
        </div>
      )}
    </PageWrapper>
  );
}

