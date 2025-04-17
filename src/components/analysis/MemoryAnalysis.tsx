import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

interface EmotionData {
  name: string;
  value: number;
  color: string;
}

interface MemoryAnalysisProps {
  userId: string;
}

const CHART_COLORS = {
  happy: '#1A1F2C',    // Dark Purple
  sad: '#221F26',      // Dark Charcoal
  neutral: '#222222',  // Dark Gray
  angry: '#333333',    // Dark Gray
  excited: '#000000e6' // Dark Black
};

const data: EmotionData[] = [
  { name: 'Happy', value: 30, color: CHART_COLORS.happy },
  { name: 'Sad', value: 15, color: CHART_COLORS.sad },
  { name: 'Neutral', value: 25, color: CHART_COLORS.neutral },
  { name: 'Angry', value: 10, color: CHART_COLORS.angry },
  { name: 'Excited', value: 20, color: CHART_COLORS.excited },
];

export const MemoryAnalysis: React.FC<MemoryAnalysisProps> = ({ userId }) => {
  return (
    <div className="w-full h-[500px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={160}
            fill="#8884d8"
            dataKey="value"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
