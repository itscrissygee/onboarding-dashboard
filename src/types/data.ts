// src/utils/data.ts

import { ProcessingTimeData, TeamPerformanceData } from "../types";

export const processingTimeData: ProcessingTimeData[] = [
  { month: "Jan", oldProcess: 5, newProcess: 3 },
  { month: "Feb", oldProcess: 5, newProcess: 2.8 },
  { month: "Mar", oldProcess: 5, newProcess: 2.5 },
];

export const teamPerformanceData: TeamPerformanceData[] = [
  { month: "Jan", applications: 100, completionRate: 85 },
  { month: "Feb", applications: 150, completionRate: 90 },
  { month: "Mar", applications: 200, completionRate: 95 },
];

export const calculateImprovement = (data: ProcessingTimeData[]): number => {
  const latestMonth = data[data.length - 1];
  return (
    ((latestMonth.oldProcess - latestMonth.newProcess) /
      latestMonth.oldProcess) *
    100
  );
};
