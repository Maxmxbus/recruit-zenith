
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

interface DashboardStatsProps {
  applicants: {
    id: number;
    fullName: string;
    position: string;
    suitability: "High" | "Medium" | "Low";
  }[];
}

export function DashboardStats({ applicants }: DashboardStatsProps) {
  // Calculate suitability stats
  const suitabilityStats = applicants.reduce((acc, curr) => {
    acc[curr.suitability] = (acc[curr.suitability] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const suitabilityData = [
    { name: "High", value: suitabilityStats.High || 0 },
    { name: "Medium", value: suitabilityStats.Medium || 0 },
    { name: "Low", value: suitabilityStats.Low || 0 },
  ];

  // Calculate position stats
  const positionStats = applicants.reduce((acc, curr) => {
    acc[curr.position] = (acc[curr.position] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const positionData = Object.entries(positionStats).map(([name, value]) => ({
    name,
    value,
  }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div className="glass-card rounded-lg p-6">
        <h3 className="text-lg font-semibold text-primary-900 mb-4">Applicant Suitability</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={suitabilityData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#6366F1" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="glass-card rounded-lg p-6">
        <h3 className="text-lg font-semibold text-primary-900 mb-4">Applications by Position</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={positionData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#6366F1" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
