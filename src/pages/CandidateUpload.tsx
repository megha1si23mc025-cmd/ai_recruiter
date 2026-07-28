import { useState, type FormEvent } from "react";
import { useApi } from "../hooks/useApi";
import PageWrapper from "../components/PageWrapper";

export default function CandidateUpload() {
  const [text, setText] = useState("");
  const { loading, error, data, call } = useApi<{ extracted: string }>(
    "http://127.0.0.1:8000/agents/resume-screening"
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    call({ text });
  };

  return (
    <PageWrapper title="Candidate Upload">
      <div className="card">
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <div>
            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600 }}>Resume Content</label>
            <textarea
              rows={8}
              placeholder="Paste Candidate Resume / CV text here..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="btn"
              disabled={loading}
              style={{ minWidth: "180px" }}
            >
              {loading ? "Screening Resume…" : "Screen Resume"}
            </button>
          </div>
        </form>
        {error && <p style={{ color: "red", marginTop: "1rem" }}>Error: {error}</p>}
      </div>

      {data && (
        <div className="card" style={{ marginTop: "1.5rem" }}>
          <h2 className="section-title">Extracted Skills & Summary</h2>
          <div style={{ whiteSpace: "pre-wrap", lineHeight: "1.6", color: "var(--text-h)" }}>
            {data.extracted}
          </div>
        </div>
      )}
    </PageWrapper>
  );
}

