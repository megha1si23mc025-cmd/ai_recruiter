import { useState, type FormEvent } from "react";
import { useApi } from "../hooks/useApi";
import PageWrapper from "../components/PageWrapper";

export default function JobCreation() {
  const [title, setTitle] = useState("");

  // ✅ FIXED endpoint
  const { loading, error, data, call } = useApi<any>(
    "http://127.0.0.1:8000/agents/full-process"
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // ✅ FIXED request body
    call({
      job_title: title,
      resume_text: "Python, SQL, data analysis experience"
    });
  };

  return (
    <PageWrapper title="Job Creation">
      <div className="card">
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >
          <div>
            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600 }}>
              Job Title
            </label>
            <input
              type="text"
              placeholder="e.g. Senior Software Engineer"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
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
              {loading ? "Generating..." : "Generate Description"}
            </button>
          </div>
        </form>

        {error && (
          <p style={{ color: "red", marginTop: "1rem" }}>Error: {error}</p>
        )}
      </div>

      {/* ✅ Show API response */}
      {data && (
        <div className="card" style={{ marginTop: "1.5rem" }}>
          <h2 className="section-title">AI Output</h2>
          <pre style={{ whiteSpace: "pre-wrap" }}>
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      )}
    </PageWrapper>
  );
}