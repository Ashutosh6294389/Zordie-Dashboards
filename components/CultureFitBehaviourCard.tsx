import { ShieldCheck } from "lucide-react";

function ProgressBar({ value, color = "#43A047", bg = "#E5EAF0" }) {
  return (
    <div className="flex items-center gap-2 mb-2">
      <div className="flex-1 h-2 rounded-full" style={{ background: bg }}>
        <div
          className="h-2 rounded-full"
          style={{
            width: `${value}%`,
            background: color,
            transition: "width 0.4s",
          }}
        />
      </div>
      <span className="ml-2 text-gray-700 font-semibold text-base">{value}%</span>
    </div>
  );
}

function VoiceBar({ value, color }) {
  return (
    <div className="flex items-center gap-2 mb-2">
      <div className="flex-1 h-4 rounded-full" style={{ background: "#E5EAF0" }}>
        <div
          className="h-4 rounded-full"
          style={{
            width: `${value}%`,
            background: color,
            transition: "width 0.4s",
          }}
        />
      </div>
      <span className="ml-2 font-bold text-lg" style={{ color }}>{value}%</span>
    </div>
  );
}

function DonutChart({ percent, color, textColor }) {
  const radius = 60;
  const stroke = 12;
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const dash = circumference * (percent / 100);
  return (
    <svg width={200} height={120}>
      <circle
        cx={radius}
        cy={radius}
        r={normalizedRadius}
        stroke="#E5E7EB"
        strokeWidth={stroke}
        fill="none"
      />
      <circle
        cx={radius}
        cy={radius}
        r={normalizedRadius}
        stroke={color}
        strokeWidth={stroke}
        fill="none"
        strokeDasharray={`${dash} ${circumference - dash}`}
        strokeLinecap="round"
        transform={`rotate(-90 ${radius} ${radius})`}
      />
      <text
        x="33%"
        y="54%"
        textAnchor="middle"
        fontSize="28"
        fontWeight="bold"
        fill={textColor}
        dominantBaseline="middle"
      >
        {percent}%
      </text>
    </svg>
  );
}

function PsychometricBarChart() {
  const data = [
    { label: "Openness", value: 85 },
    { label: "Discipline", value: 97 },
    { label: "Creativity", value: 93 },
    { label: "Risk Tolerance", value: 87 },
  ];
  const chartHeight = 240;
  const barWidth = 48;
  const maxValue = 100;
  const gridLines = [0, 25, 50, 75, 100];

  return (
    <div className="relative w-full h-[180px] px-2 pt-2 pb-4 ">
      {/* Grid lines and Y-axis labels */}
      <div className="absolute left-0 right-0 top-0 h-[120px] pointer-events-none z-0">
        {gridLines.map((v) => (
          <div
            key={v}
            style={{
              position: "absolute",
              bottom: `${(v / maxValue) * chartHeight}px`,
              left: 0,
              right: 0,
              borderTop: "1.5px dashed #E5E7EB",
              height: 0,
            }}
          >
            <span
              style={{
                position: "absolute",
                left: -20,
                fontSize: 20,
                color: "#9CA3AF",
                fontWeight: 500,
                top: "-50px",
              }}
            >
              {v}
            </span>
          </div>
        ))}
      </div>
      {/* Bars */}
      <div className="flex items-end justify-around h-[120px] relative z-10">
        {data.map((d) => (
          <div key={d.label} className="flex flex-col items-center">
            {/* Background bar (full height) */}
            <div
              style={{
                width: barWidth,
                height: chartHeight,
                background: "#E5E7EB",
                borderRadius: "12px 12px 0 0",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                alignItems: "flex-end",
              }}
            >
              {/* Foreground bar (actual value) */}
              <div
                style={{
                  width: barWidth,
                  height: `${(d.value / maxValue) * chartHeight}px`,
                  background: "#4979B9",
                  borderRadius: "12px 12px 0 0",
                  transition: "height 0.4s",
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                }}
              />
            </div>
            <span className="mt-2 text-gray-500 font-semibold text-lg ">{d.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CultureFitBehaviourCard() {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-full mx-auto" style={{ background: "linear-gradient(180deg,white 80%,#f6fbff 100%)" }}>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-8 h-8 text-purple-500" />
          <span className="text-2xl font-bold text-gray-900">Culture Fit & Behavioral Intelligence</span>
        </div>
        <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-xl text-lg font-bold shadow">
          Score: 88/100
        </span>
      </div>
      <hr className="my-4 border-gray-200" />
      <div className="grid grid-cols-2 gap-x-12 gap-y-8">
        {/* Left Column */}
        <div>
          <div className="text-xl font-bold text-gray-900 mb-4">Behavioral Attributes</div>
          <div className="space-y-2 mb-8">
            <div className="text-gray-500 text-base mb-1">Communication</div>
            <ProgressBar value={90} />
            <div className="text-gray-500 text-base mb-1">Empathy</div>
            <ProgressBar value={88} />
            <div className="text-gray-500 text-base mb-1">Adaptability</div>
            <ProgressBar value={92} />
            <div className="text-gray-500 text-base mb-1">Assertiveness</div>
            <ProgressBar value={90} />
            <div className="text-gray-500 text-base mb-1">Leadership</div>
            <ProgressBar value={89} />
          </div>
          <div className="text-xl font-bold text-gray-900 mb-4 mt-8">Voice Analysis</div>
          <div className="space-y-2">
            <div className="text-gray-500 text-base mb-1">Clarity</div>
            <VoiceBar value={90} color="#3578C6" />
            <div className="text-gray-500 text-base mb-1">Confidence</div>
            <VoiceBar value={83} color="#3578C6" />
            <div className="text-gray-500 text-base mb-1">Engagement</div>
            <VoiceBar value={86} color="#3578C6" />
            <div className="text-gray-500 text-base mb-1">Authenticity</div>
            <VoiceBar value={78} color="#FFD600" />
          </div>
        </div>
        {/* Right Column */}
        <div className="flex flex-col justify-between">
          {/* Psychometric Profile */}
          <div>
            <div className="text-xl font-bold text-gray-900 mb-56 text-center">Psychometric Profile</div>
            <PsychometricBarChart />
          </div>
          {/* Culture Fit Score */}
          <div className="mt-10">
            <div className="text-xl font-bold text-gray-900 mb-12 text-center">Culture Fit Score</div>
            <div className="flex gap-8 items-center justify-center">
              <div className="flex flex-col ">
                <DonutChart percent={88} color="#FF4B00" textColor="#FF4B00" />
                <span className="mt-2 text-lg font-semibold text-gray-700 mx-4">Team Work</span>
              </div>
              <div className="flex flex-col ">
                <DonutChart percent={92} color="#43A047" textColor="#43A047" />
                <span className="mt-2 text-lg font-semibold text-gray-700 mx-4">Core Values</span>
              </div>
              <div className="flex flex-col ">
                <DonutChart percent={92} color="#6ee0f6" textColor="#3578C6" />
                <span className="mt-2 text-lg font-semibold text-gray-700 mx-4">Leadership</span>
              </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}