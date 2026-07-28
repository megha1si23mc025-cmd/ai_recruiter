import PageWrapper from "../components/PageWrapper";

export default function PipelineKanban() {
  return (
    <PageWrapper title="Pipeline Kanban">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Kanban columns */}
        <div className="card">
          <h2 className="section-title" style={{ fontSize: "1.2rem", borderBottom: "2px solid var(--border)", paddingBottom: "0.5rem" }}>To Review</h2>
          <ul className="list-inside space-y-2" style={{ paddingLeft: 0, listStyle: "none" }}>
            <li className="card" style={{ padding: "1rem", margin: "0.5rem 0", fontSize: "0.95rem" }}>
              <strong>John Doe</strong>
              <div style={{ color: "var(--text)", fontSize: "0.85rem" }}>Software Engineer</div>
            </li>
            <li className="card" style={{ padding: "1rem", margin: "0.5rem 0", fontSize: "0.95rem" }}>
              <strong>Jane Smith</strong>
              <div style={{ color: "var(--text)", fontSize: "0.85rem" }}>Data Analyst</div>
            </li>
          </ul>
        </div>

        <div className="card">
          <h2 className="section-title" style={{ fontSize: "1.2rem", borderBottom: "2px solid var(--border)", paddingBottom: "0.5rem" }}>Interview Scheduled</h2>
          <ul className="list-inside space-y-2" style={{ paddingLeft: 0, listStyle: "none" }}>
            <li className="card" style={{ padding: "1rem", margin: "0.5rem 0", fontSize: "0.95rem" }}>
              <strong>Alice Johnson</strong>
              <div style={{ color: "var(--text)", fontSize: "0.85rem" }}>Scheduled: 2023-09-12</div>
            </li>
            <li className="card" style={{ padding: "1rem", margin: "0.5rem 0", fontSize: "0.95rem" }}>
              <strong>Bob Lee</strong>
              <div style={{ color: "var(--text)", fontSize: "0.85rem" }}>Scheduled: 2023-09-13</div>
            </li>
          </ul>
        </div>

        <div className="card">
          <h2 className="section-title" style={{ fontSize: "1.2rem", borderBottom: "2px solid var(--border)", paddingBottom: "0.5rem" }}>Offer Sent</h2>
          <ul className="list-inside space-y-2" style={{ paddingLeft: 0, listStyle: "none" }}>
            <li className="card" style={{ padding: "1rem", margin: "0.5rem 0", fontSize: "0.95rem" }}>
              <strong>Emily Davis</strong>
              <div style={{ color: "var(--text)", fontSize: "0.85rem" }}>Status: Accepted</div>
            </li>
          </ul>
        </div>
      </div>
    </PageWrapper>
  );
}

