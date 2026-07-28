import PageWrapper from "../components/PageWrapper";

export default function Dashboard() {
  return (
    <PageWrapper title="Recruitment Dashboard">
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem", marginBottom: "2rem" }}>
        <div className="card">
          <h2 className="section-title" style={{ fontSize: "1.1rem", marginBottom: "0.5rem", color: "var(--text)" }}>Open Positions</h2>
          <p style={{ fontSize: "2.5rem", fontWeight: "bold", color: "var(--accent)", margin: 0 }}>3</p>
        </div>
        <div className="card">
          <h2 className="section-title" style={{ fontSize: "1.1rem", marginBottom: "0.5rem", color: "var(--text)" }}>Candidates in Review</h2>
          <p style={{ fontSize: "2.5rem", fontWeight: "bold", color: "var(--accent)", margin: 0 }}>12</p>
        </div>
        <div className="card">
          <h2 className="section-title" style={{ fontSize: "1.1rem", marginBottom: "0.5rem", color: "var(--text)" }}>Interviews Scheduled</h2>
          <p style={{ fontSize: "2.5rem", fontWeight: "bold", color: "var(--accent)", margin: 0 }}>5</p>
        </div>
      </div>

      <div className="card">
        <h2 className="section-title" style={{ borderBottom: "2px solid var(--border)", paddingBottom: "0.5rem" }}>Recent Activity</h2>
        <ul style={{ paddingLeft: "1.2rem", lineHeight: "2", fontSize: "0.95rem" }}>
          <li>John Doe applied for <strong>Software Engineer</strong></li>
          <li>Jane Smith’s resume screened successfully</li>
          <li>Interview set for <strong>Alice Johnson</strong></li>
        </ul>
      </div>
    </PageWrapper>
  );
}

