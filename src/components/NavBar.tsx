import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const location = useLocation();

  const links = [
    { to: "/", label: "Dashboard" },
    { to: "/job", label: "Job Creation" },
    { to: "/upload", label: "Candidate Upload" },
    { to: "/analysis", label: "Analysis" },
    { to: "/schedule", label: "Schedule" },
    { to: "/pipeline", label: "Pipeline" },
  ];

  return (
    <nav className="navbar">
      <div className="brand">
        <span className="brand-icon">✦</span> HireGenie AI
      </div>
      <div className="nav-links">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`nav-link${location.pathname === link.to ? " nav-link-active" : ""}`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
