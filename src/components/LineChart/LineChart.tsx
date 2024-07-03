import React from "react";

interface DataPoint {
  label: string;
  value: number;
}

interface LineChartProps {
  data: DataPoint[];
  className?: string;
}

const LineChart: React.FC<LineChartProps> = ({ data, className }) => {
  const maxValue = Math.max(...data.map((d) => d.value));
  const minValue = Math.min(...data.map((d) => d.value));
  const height = 250;
  const width = 1400;
  const padding = 20;

  const calculateY = (value: number) => {
    return height - padding - ((value - minValue) / (maxValue - minValue)) * (height - 2 * padding);
  };

  const points = data.map((d, i) => `${i * (width / (data.length - 1))},${calculateY(d.value)}`).join(" ");

  return (
    <div className="w-fit ml-auto mr-auto">
      <svg viewBox={`0 0 ${width} ${height}`} style={{ height: 150 }}>
        <polyline points={points} fill="none" stroke="#28E1B9" strokeWidth="1" />
        {data.map((d, i) => (
          <circle key={i} cx={i * (width / (data.length - 1))} cy={calculateY(d.value)} r="2" fill="#28E1B9" />
        ))}
      </svg>
    </div>
  );
};

export default LineChart;
