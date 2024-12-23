// src/components/Workflow/ProcessFlow.tsx

import React, { useEffect } from "react";
import mermaid from "mermaid";

const ProcessFlow: React.FC = () => {
  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: "default",
      securityLevel: "loose",
    });
  }, []);

  const graph = `
        graph TB
            subgraph "Old Process (5 Days)"
            A1[Customer Application] --> B1[Initial Document Review]
            B1 --> C1[Manual KYC Check]
            C1 --> D1[AML Screening]
            D1 --> E1[Additional Documentation Request]
            E1 --> F1[Final Review]
            F1 --> G1[Account Approval]
            end

            subgraph "New Process (3 Days)"
            A2[Customer Application] --> B2[Automated Document Verification]
            B2 --> C2[Parallel KYC/AML Check]
            C2 --> D2[Risk Assessment]
            D2 --> E2[Final Review]
            E2 --> F2[Account Approval]
            end
    `;

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Process Flow Comparison</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="mermaid">{graph}</div>
      </div>
    </div>
  );
};

export default ProcessFlow;
