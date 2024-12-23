// src/components/Dashboard/MetricsDashboard.tsx

import React from "react";
import PerformanceChart from "./PerformanceChart";
import {
  processingTimeData,
  teamPerformanceData,
  calculateImprovement,
} from "../../utils/data";

const MetricsDashboard: React.FC = () => {
  const improvement = calculateImprovement(processingTimeData);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">
        Onboarding Process Optimization Dashboard
      </h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900">
            Process Improvement
          </h3>
          <p className="text-3xl font-bold text-green-600">
            {improvement.toFixed(1)}%
          </p>
          <p className="text-sm text-gray-500">Time reduction</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900">
            Current Processing Time
          </h3>
          <p className="text-3xl font-bold text-blue-600">
            {processingTimeData[processingTimeData.length - 1].newProcess} days
          </p>
          <p className="text-sm text-gray-500">Average time</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900">Completion Rate</h3>
          <p className="text-3xl font-bold text-purple-600">
            {teamPerformanceData[teamPerformanceData.length - 1].completionRate}
            %
          </p>
          <p className="text-sm text-gray-500">Success rate</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Processing Time Comparison</h2>
          <PerformanceChart data={processingTimeData} type="processing" />
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Team Performance Metrics</h2>
          <PerformanceChart data={teamPerformanceData} type="performance" />
        </div>
      </div>
    </div>
  );
};

export default MetricsDashboard;
