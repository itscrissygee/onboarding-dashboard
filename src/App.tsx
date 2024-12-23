// src/App.tsx

import React from "react";
import "./App.css";
import MetricsDashboard from "./components/Dashboard/MetricsDashboard";
import ProcessFlow from "./components/Workflow/ProcessFlow";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="py-10">
        <ProcessFlow />
        <div className="mt-10">
          <MetricsDashboard />
        </div>
      </div>
    </div>
  );
}

export default App;
