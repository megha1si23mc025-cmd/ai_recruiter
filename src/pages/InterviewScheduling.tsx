import PageWrapper from "../components/PageWrapper";

export default function InterviewScheduling() {
  return (
    <PageWrapper title="Interview Scheduling">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
        <div className="card">
          <h2 className="section-title">Upcoming Interviews</h2>
          <ul style={{ paddingLeft: "1.2rem", lineHeight: "1.8" }}>
            <li>Alice Johnson – 2023-09-12 10:00 AM</li>
            <li>Bob Lee – 2023-09-13 02:00 PM</li>
          </ul>
        </div>
        <div className="card">
          <h2 className="section-title">Schedule New Interview</h2>
          <p style={{ color: "var(--text)" }}>Feature coming soon – form to pick candidate and time slot.</p>
        </div>
      </div>
    </PageWrapper>
  );
}

