import type { ReactNode } from "react";

interface PageWrapperProps {
  title?: string;
  children: ReactNode;
}

function PageWrapper({ title, children }: PageWrapperProps) {
  return (
    <div className="container">
      {title && <h1 className="text-3xl font-bold mb-4">{title}</h1>}
      {children}
    </div>
  );
}

export default PageWrapper;