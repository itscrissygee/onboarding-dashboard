// src/types/index.ts

export interface ProcessingTimeData {
  month: string;
  oldProcess: number;
  newProcess: number;
}

export interface TeamPerformanceData {
  month: string;
  applications: number;
  completionRate: number;
}

export interface MetricCardProps {
  title: string;
  value: number;
  unit: string;
  trend: number;
}

export interface ChartProps {
  data: ProcessingTimeData[] | TeamPerformanceData[];
  type: "processing" | "performance";
}
