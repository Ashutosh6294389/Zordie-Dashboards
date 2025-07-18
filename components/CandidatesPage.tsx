import React, {useState} from "react";
import { Users, Star, CheckCircle, XCircle, ArrowUp, Search, Bell, BarChart3 } from "lucide-react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";
import { useRouter } from "next/navigation";

const cardGradient = "bg-[linear-gradient(180deg,white_60%,#e0f2fe_100%)]";

const candidates = [
  {
    name: "John Smith",
    email: "john@email.com",
    avatar: "/images/People_5.png",
    score: 92,
    stage: "Shortlisted",
    stageColor: "bg-blue-100 text-blue-600",
    applied: "Dec 15, 2024",
    role: "Senior Developer",
  },
  {
    name: "Sarah Johnson",
    email: "sarah@email.com",
    avatar: "/images/People_6.png",
    score: 88,
    stage: "Interview",
    stageColor: "bg-yellow-100 text-yellow-700",
    applied: "Dec 14, 2024",
    role: "UX Designer",
  },
  {
    name: "Mike Davis",
    email: "mike@email.com",
    avatar: "/images/People_1.png",
    score: 95,
    stage: "Rejected",
    stageColor: "bg-red-100 text-red-500",
    applied: "Dec 13, 2024",
    role: "Product Manager",
  },
];

function RecentApplicationsCard() {
// State for filters and search
  const [search, setSearch] = useState("");
  const [selectedStage, setSelectedStage] = useState("All Stages");
  const [selectedRole, setSelectedRole] = useState("All Roles");

  // Get unique stages and roles for dropdowns
  const stageOptions = ["All Stages", ...Array.from(new Set(candidates.map(c => c.stage)))];
  const roleOptions = ["All Roles", ...Array.from(new Set(candidates.map(c => c.role)))];

  // Filter candidates based on search and selected filters
  const filteredCandidates = candidates.filter(c => {
    const matchesSearch =
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase()) ||
      c.role.toLowerCase().includes(search.toLowerCase());
    const matchesStage = selectedStage === "All Stages" || c.stage === selectedStage;
    const matchesRole = selectedRole === "All Roles" || c.role === selectedRole;
    return matchesSearch && matchesStage && matchesRole;
  });
  return (
    <div className="bg-white rounded-3xl shadow-md p-8 mt-8" style={{ boxShadow: "0 8px 24px 0 rgba(0,0,0,0.06)", background: "linear-gradient(180deg,white 60%,#e0f2fe 100%)" }}>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-[#181C32]">Candidate Comparison</h2>
        <div className="flex gap-4">
          <select
            className="rounded-2xl border border-gray-200 px-2 py-1 text-lg text-gray-600 focus:outline-none"
            value={selectedStage}
            onChange={e => setSelectedStage(e.target.value)}
          >
            {stageOptions.map(stage => (
              <option key={stage}>{stage}</option>
            ))}
          </select>
          <select
            className="rounded-2xl border border-gray-200 px-2 py-1 text-lg text-gray-600 focus:outline-none"
            value={selectedRole}
            onChange={e => setSelectedRole(e.target.value)}
          >
            {roleOptions.map(role => (
              <option key={role}>{role}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search candidates..."
          className="w-full rounded-xl border border-gray-200 py-2 px-8 text-2xl text-gray-400 font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-100 transition"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      <div className="mb-2 text-lg font-semibold text-gray-500">Total Candidates = 25</div>
      <div className="border-b border-gray-200 mb-2"></div>
      <div className="flex px-2 py-2 text-gray-600 text-lg">
        <div className="w-[28%]">Candidate</div>
        <div className="w-[15%]">Score</div>
        <div className="w-[20%]">Stage</div>
        <div className="w-[20%]">Applied Date</div>
        <div className="w-[17%]">Role</div>
      </div>
      <div>
        {filteredCandidates.map((c, i) => (
          <div key={i} className="flex items-center py-6 border-b last:border-b-0 border-gray-100">
            {/* Candidate */}
            <div className="flex items-center w-[28%]">
              <img src={c.avatar} alt={c.name} className="w-12 h-12 rounded-full object-cover mr-6" />
              <div>
                <div className="text-lg font-bold text-[#181C32]">{c.name}</div>
                <div className="text-sxl text-gray-400 font-medium">{c.email}</div>
              </div>
            </div>
            {/* Score */}
            <div className="flex items-center w-[15%]">
              <span className="text-lg font-bold text-[#181C32] mr-3">{c.score}</span>
              <div className="h-3 w-20 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-3 bg-green-500 rounded-full"
                  style={{ width: `${c.score}%`, minWidth: "10%" }}
                />
              </div>
            </div>
            {/* Stage */}
            <div className="w-[20%]">
              <span className={`px-2 py-1 rounded-full font-semibold text-lg ${c.stageColor}`}>{c.stage}</span>
            </div>
            {/* Applied Date */}
            <div className="w-[20%] text-lg text-gray-600 ">{c.applied}</div>
            {/* Role */}
            <div className="w-[17%] text-lg text-[#181C32] font-medium">{c.role}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// KeyStrengthsCard
function KeyStrengthsCard() {
  const strengths = [
    "Exceptional technical problem-solving with 92% efficiency in code execution",
    "Strong verified experience with frontend technologies (95% JavaScript, 92% React)",
    "High adaptability score (88%) with excellent teamwork potential",
  ];
  return (
    <div className="bg-white rounded-3xl shadow-lg p-8 min-w-[420px] max-w-[720px] flex-1" style={{ minHeight: 320, background: "linear-gradient(180deg,white 60%,#e0f2fe 100%)"}}>
      <div className="text-2xl font-bold text-black mb-4">Key Strengths</div>
      <hr className="mb-8 -mx-8 border-gray-200" />
      <div className="flex flex-col gap-8">
        {strengths.map((item, idx) => (
          <div key={idx} className="flex items-start gap-6 mb-4">
            <span className="mt-2 w-6 h-6 rounded-full bg-green-500 inline-block" />
            <span className="text-lg text-gray-600 font-medium leading-snug">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// KeyWeaknessesCard
function KeyWeaknessesCard() {
  const weaknesses = [
    "Communication clarity could be enhanced (78% engagement score)",
    "Minor conceptual gap identified in asynchronous programming patterns",
    "GraphQL skills (75%) slightly below required threshold for senior role",
  ];
  return (
    <div className="bg-white rounded-3xl shadow-lg p-8 min-w-[420px] max-w-[720px] flex-1" style={{ minHeight: 320, background: "linear-gradient(180deg,white 60%,#e0f2fe 100%)" }}>
      <div className="text-2xl font-bold text-black mb-4">Areas of Improvement</div>
      <hr className="mb-8 -mx-8 border-gray-200" />
      <div className="flex flex-col gap-8">
        {weaknesses.map((item, idx) => (
          <div key={idx} className="flex items-start gap-6 mb-4">
            <span className="mt-2 w-6 h-6 rounded-full bg-red-500 inline-block" />
            <span className="text-lg text-gray-600 font-medium leading-snug">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function StrengthsWeaknessesRow() {
  return (
    <div className="flex gap-8 mt-8">
      <KeyStrengthsCard />
      <KeyWeaknessesCard />
    </div>
  );
}

// DonutChart for the cards
function DonutChartLarge({ percent, color, textColor }) {
  const radius = 120;
  const stroke = 18;
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const dash = circumference * (percent / 100);
  return (
    <svg width={240} height={240}>
      <circle
        cx={radius}
        cy={radius}
        r={normalizedRadius}
        stroke="#F1F1F1"
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
        x="52%"
        y="52%"
        textAnchor="middle"
        fontSize="48"
        fontWeight="bold"
        fill={textColor}
        dominantBaseline="middle"
      >
        {percent}%
      </text>
    </svg>
  );
}

// Optimus Card (left)
function OptimusScoreCard() {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-8 flex-1 min-w-[620px]  flex flex-col" style={{ minHeight: 410, background: "linear-gradient(180deg,white 60%,#e0f2fe 100%)"}}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="font-bold">
          <span className="text-purple-600 text-2xl">Verified Resume, Skills & Trust Score</span>
        </div>
        <button className="border border-gray-300 rounded-xl px-4 py-2 text-lg font-semibold text-gray-900 bg-white flex items-center gap-2">
          Score 94/100
        </button>
        <button className="border border-gray-300 rounded-xl px-4 py-2 text-lg font-semibold text-gray-900 bg-white flex items-center gap-2">
          View Breakdown
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M9 18l6-6-6-6"/></svg>
        </button>
      </div>
      <hr className="mb-8 -mx-8 border-gray-200" />
      {/* Body */}
      <div className="flex flex-row justify-between items-start gap-8 flex-1">
        {/* GitHub Score */}
        <div className="flex flex-col items-center flex-1">
          <div className="text-2xl font-bold text-black mb-8">GitHub Score</div>
          <DonutChartLarge percent={88} color="#FF4B00" textColor="#E94B6B" />
          <div className="text-2xl text-gray-600 mt-4">High Contribution Quality</div>
        </div>
        {/* Experience-Role Match */}
        <div className="flex flex-col items-center flex-1">
          <div className="text-2xl font-bold text-black mb-8">Experience-Role Match</div>
          <DonutChartLarge percent={92} color="#19C900" textColor="#1B8C7B" />
          <div className="text-2xl text-gray-600 mt-4">Strong Alignment</div>
        </div>
      </div>
    </div>
  );
}

function SkillMatchGaugeCard({ percent = 72 }) {
  // Gauge dimensions
  const size = 320;
  const strokeWidth = 28;
  const radius = (size - strokeWidth) / 2;
  const center = size / 2;
  const startAngle = -135;
  const endAngle = 135;
  const angle = startAngle + ((endAngle - startAngle) * percent) / 100;

  // Helper to get coordinates for arc ends
  const polarToCartesian = (cx, cy, r, deg) => {
    const rad = (deg - 90) * Math.PI / 180;
    return {
      x: cx + r * Math.cos(rad),
      y: cy + r * Math.sin(rad),
    };
  };

  // Arc path for gauge
  const describeArc = (cx, cy, r, start, end) => {
    const startPt = polarToCartesian(cx, cy, r, end);
    const endPt = polarToCartesian(cx, cy, r, start);
    const largeArcFlag = end - start <= 180 ? "0" : "1";
    return [
      "M", startPt.x, startPt.y,
      "A", r, r, 0, largeArcFlag, 0, endPt.x, endPt.y
    ].join(" ");
  };

  // Needle coordinates
  const needleLength = radius - strokeWidth / 2 - 10;
  const needleEnd = polarToCartesian(center, center, needleLength, angle);

  return (
    <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center min-w-[340px] max-w-[420px]" style={{ minHeight: 410, background: "linear-gradient(180deg,white 80%,#f6fbff 100%)" }}>
      <div className="text-2xl font-bold text-gray-900 mb-2">Skill Match Percentage</div>
      <hr className="mb-8 -mx-8 border-gray-200" />
      <div className="flex-1 flex items-center justify-center w-full">
        <svg width={size} height={size*1.2 } viewBox={`0 0 ${size} ${size / 1.2}`}>
          {/* Background arc */}
          <path
            d={describeArc(center, center, radius, startAngle, endAngle)}
            stroke="#E5EAF0"
            strokeWidth={strokeWidth}
            fill="none"
          />
          {/* Foreground arc */}
          <path
            d={describeArc(center, center, radius, startAngle, angle)}
            stroke="#3578C6"
            strokeWidth={strokeWidth}
            fill="none"
            strokeLinecap="round"
          />
          {/* Needle */}
          <line
            x1={center}
            y1={center}
            x2={needleEnd.x}
            y2={needleEnd.y}
            stroke="#3578C6"
            strokeWidth={4}
          />
          {/* Center circle */}
          <circle cx={center} cy={center} r={strokeWidth / 2} fill="#3578C6" />
          {/* Labels */}
          <text x={strokeWidth + 20} y={size / 1.2 +40}  fontSize="32" fontWeight="bold" fill="#6B7280">0%</text>
          <text x={size - strokeWidth - 70} y={size / 1.2 +40} fontSize="32" fontWeight="bold" fill="#6B7280">100%</text>
        </svg>
      </div>
    </div>
  );
}

// Example: Monica Card (right, similar style)

function MonicaScoreCard() {
  const attributes = [
    { label: "Communication", value: 90 },
    { label: "Empathy", value: 88 },
    { label: "Adaptability", value: 92 },
    { label: "Assertiveness", value: 90 },
    { label: "Leadership", value: 89 },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-lg p-8 flex-1 min-w-[540px] max-w-[720px] flex flex-col" style={{ minHeight: 410, background: "linear-gradient(180deg,white 60%,#e0f2fe 100%)"}}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="font-bold">
          <span className="text-purple-600 text-2xl">Behavioural Score</span>
        </div>
        <button className="border border-gray-300 rounded-xl px-4 py-2 text-lg font-semibold text-gray-900 bg-white flex items-center gap-2">
          Score 88/100
        </button>
        <button className="border border-gray-300 rounded-xl px-4 py-2 text-lg font-semibold text-gray-900 bg-white flex items-center gap-2">
          View Breakdown
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M9 18l6-6-6-6"/></svg>
        </button>
      </div>
      <hr className="mb-8 -mx-8 border-gray-200" />
      {/* Body */}
      <div className="flex flex-col gap-8 flex-1">
        <div>
          <div className="text-lg font-bold text-black mb-8">Behavioral Attributes</div>
          <div className="flex flex-col gap-6">
            {attributes.map(attr => (
              <div key={attr.label}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-gray-600 text-lg ">{attr.label}</span>
                  <span className="text-gray-600 text-lg ">{attr.value}%</span>
                </div>
                <div className="w-full h-3 bg-gray-200 rounded-full">
                  <div
                    className="h-3 rounded-full"
                    style={{
                      width: `${attr.value}%`,
                      background: "#23D89C"
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper for Donut Chart
function DonutChart({ percent, color, textColor }) {
  const radius = 55;
  const stroke = 12;
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const dash = circumference * (percent / 100);
  return (
    <svg width={120} height={120}>
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
        x="50%"
        y="50%"
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

function CumulativeAgentScoresCard() {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-8" style={{ minWidth: 340, maxWidth: 380, background: "linear-gradient(180deg,white 60%,#e0f2fe 100%)"}}>
      <div className="text-2xl font-bold text-black mb-4 text-center">Cumulative Agent Scores</div>
      <hr className="mb-8 -mx-8 border-gray-200" />
      <div className="flex flex-col ">
        {/* Row 1 */}
        <div className="flex items-center justify-between">
          <DonutChart percent={92} color="#54CFE3" textColor="#7C8CF8" />
          <div className="flex-1 flex justify-center">
            <svg width="120" height="24">
              <line
                x1="0"
                y1="12"
                x2="120"
                y2="12"
                stroke="#E9D8FD"
                strokeWidth="3"
                strokeDasharray="8 8"
                markerEnd="url(#arrowhead1)"
              />
              <defs>
                <marker id="arrowhead1" markerWidth="8" markerHeight="8" refX="8" refY="4" orient="auto">
                  <polygon points="0 0, 8 4, 0 8" fill="#E9D8FD" />
                </marker>
              </defs>
            </svg>
          </div>
          <div className="text-lg  text-grey-600">Technical</div>
        </div>
        {/* Row 2 */}
        <div className="flex items-center justify-between">
          <div className="text-lg text-grey-600">Skills</div>
          <div className="flex-1 flex justify-center">
            <svg width="120" height="24">
              <line
                x1="120"
                y1="12"
                x2="0"
                y2="12"
                stroke="#E9D8FD"
                strokeWidth="3"
                strokeDasharray="8 8"
                markerEnd="url(#arrowhead2)"
              />
              <defs>
                <marker id="arrowhead2" markerWidth="8" markerHeight="8" refX="8" refY="4" orient="auto">
                  <polygon points="0 0, 8 4, 0 8" fill="#E9D8FD" />
                </marker>
              </defs>
            </svg>
          </div>
          <DonutChart percent={91} color="#19C900" textColor="#1B8C7B" />
        </div>
        {/* Row 3 */}
        <div className="flex items-center justify-between">
          <DonutChart percent={90} color="#FF4B00" textColor="#E94B6B" />
          <div className="flex-1 flex justify-center">
            <svg width="120" height="24">
              <line
                x1="0"
                y1="12"
                x2="120"
                y2="12"
                stroke="#E9D8FD"
                strokeWidth="3"
                strokeDasharray="8 8"
                markerEnd="url(#arrowhead3)"
              />
              <defs>
                <marker id="arrowhead3" markerWidth="8" markerHeight="8" refX="8" refY="4" orient="auto">
                  <polygon points="0 0, 8 4, 0 8" fill="#E9D8FD" />
                </marker>
              </defs>
            </svg>
          </div>
          <div className="text-lg text-grey-600">Culture</div>
        </div>
      </div>
    </div>
  );
}

function SkillsAssessmentCard() {
  const router = useRouter();

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 mt-8 mx-auto min-w-[400px] border border-gray-100" style={{ maxHeight: 90}}>
      {/* Tabs */}
      <div className="flex gap-8 mb-8">
        <button
          className="text-lg font-bold rounded-3xl px-4 py-2 shadow-md bg-green-600 text-white"
          style={{ boxShadow: "0 4px 12px 0 #0001" }}
          onClick={() => router.push('/Result')}
        >
          Overview
        </button>
        <button
          className="text-lg font-bold rounded-3xl px-4 py-2 bg-gray-100 text-gray-400"
          onClick={() => router.push("/candidates/skills/technical")}
        >
          Technical Scores
        </button>
        <button
          className="text-lg font-bold rounded-3xl px-4 py-2 bg-gray-100 text-gray-400"
          onClick={() => router.push('/Resume')}
        >
          Resume Scores
        </button>
        <button
          className="text-lg font-bold rounded-3xl px-4 py-2 bg-gray-100 text-gray-400"
          onClick={() => router.push('/Behaviour')}
        >
          Behaviour Scores
        </button>
      </div>
    </div>
  );
}


function InterviewScore() {
  return(
    <div className="bg-white rounded-3xl shadow-lg p-8 flex-1 min-w-[540px] max-w-[720px] flex flex-col" style={{ minHeight: 410, background: "linear-gradient(180deg,white 60%,#e0f2fe 100%)"}}>
  {/* Card Header */}
      <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-6">
        <div className="text-xl font-semibold">
          <span className="text-purple-500 font-bold">Interview Score</span>
        </div>
        <div className="flex gap-4">
          <div className="border border-gray-300 rounded-xl px-4 py-2 text-lg font-semibold text-gray-700 bg-white">
            Score 92/100
          </div>
          <button className="border border-gray-300 rounded-xl px-4 py-2 text-lg font-semibold text-gray-900 bg-white flex items-center gap-2">
            View Breakdown
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
      </div>
      {/* Card Body */}
      <div className="flex flex-row justify-between items-start gap-8">
        {/* Left: Key Skills */}
        <div className="flex-1">
          <div className="text-lg font-semibold text-black mb-8">Key skills Assessed</div>
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600 text-lg ">API Design</span>
              <span className="text-gray-600 text-lg ">92%</span>
            </div>
            <div className="w-full h-3 bg-gray-200 rounded-full mb-4">
              <div className="h-3 bg-cyan-300 rounded-full" style={{ width: "92%" }} />
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600 text-lg ">Debugging</span>
              <span className="text-gray-600 text-lg ">85%</span>
            </div>
            <div className="w-full h-3 bg-gray-200 rounded-full mb-4">
              <div className="h-3 bg-cyan-300 rounded-full" style={{ width: "85%" }} />
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600 text-lg ">System Integration</span>
              <span className="text-gray-600 text-lg ">78%</span>
            </div>
            <div className="w-full h-3 bg-gray-200 rounded-full">
              <div className="h-3 bg-cyan-300 rounded-full" style={{ width: "78%" }} />
            </div>
          </div>
          
        </div>
        {/* Right: Average Response Time 
        <div className="flex flex-col items-end ">
          <div className="text-2xl font-semibold text-black mb-2">Average Response Time</div>
          <div className="text-gray-400 text-xl font-semibold mb-8">3 mins</div>
        </div>*/}
      </div>
      </div>
  );
}

function OverallPerformanceCard() {
  const data = [
    { subject: "API Design", score: 80 },
    { subject: "System Integration", score: 70 },
    { subject: "Experience Match", score: 65 },
    { subject: "Leadership", score: 75 },
    { subject: "Assertiveness", score: 60 },
    { subject: "Git-hub Score", score: 68 },
    { subject: "Communication", score: 72 },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col min-w-[700px]" style={{ minHeight: 510, background: "linear-gradient(180deg,white 60%,#e0f2fe 100%)"}}>
      <div className="flex items-center justify-between mb-4">
        <div className="text-3xl font-bold text-gray-900">Overall Performance</div>
        <button className="border border-gray-300 rounded-xl px-6 py-3 text-lg font-semibold text-gray-900 bg-white flex items-center gap-2 hover:bg-gray-50 transition">
          View Breakdown
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M9 18l6-6-6-6"/></svg>
        </button>
      </div>
      <hr className="mb-8 -mx-8 border-gray-200" />
      <div className="flex-1 flex items-center justify-center">
        <ResponsiveContainer width="100%" height={380}>
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid stroke="#e5e7eb" />
            <PolarAngleAxis dataKey="subject" tick={{ fill: "#6B7280", fontSize: 20, fontWeight: 500 }} />
            <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} />
            <Radar
              name="Score"
              dataKey="score"
              stroke="#A259FF"
              fill="#A259FF"
              fillOpacity={0.3}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

// SuccessPredictionCard component
function SuccessPredictionCard() {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center min-w-[700px] max-w-[380px] min-h-[510px]" style={{background: "linear-gradient(180deg,white 60%,#e0f2fe 100%)"}}>
      <div className="text-2xl font-bold mb-4 text-gray-900 ">Success Prediction
      </div>
      <div className="relative flex items-center justify-center mb-6">
        {/* Donut Chart */}
        <svg width="full" height="250" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="100" fill="white" />
          <circle
            cx="60"
            cy="60"
            r="50"
            fill="none"
            stroke="#6ee0f6"
            strokeWidth="12"
            strokeDasharray={`${2 * Math.PI * 50 * 0.88} ${2 * Math.PI * 50 * 0.12}`}
            strokeDashoffset={2 * Math.PI * 50 * 0.12 / 2}
            strokeLinecap="round"
            transform="rotate(-90 60 60)"
          />
          <text x="60" y="70" textAnchor="middle" fontSize="28" fontWeight="bold" fill="#7c3aed">88%</text>
        </svg>
      </div>
      <div className="w-full">
        <div className="flex justify-between text-gray-600 text-lg mb-1 ">
          <span>Technical Fit</span>
          <span className="text-gray-600 ">92%</span>
        </div>
        <div className="w-full h-2 bg-gray-100 rounded-full mb-2">
          <div className="h-2 bg-cyan-400 rounded-full" style={{ width: "92%" }} />
        </div>
        <div className="flex justify-between text-gray-600 text-lg mb-1 ">
          <span>Cultural Fit</span>
          <span className="text-gray-700 ">85%</span>
        </div>
        <div className="w-full h-2 bg-gray-100 rounded-full mb-2">
          <div className="h-2 bg-cyan-400 rounded-full" style={{ width: "85%" }} />
        </div>
        <div className="flex justify-between text-gray-600 text-lg mb-1 ">
          <span>Longevity Prediction</span>
          <span className="text-gray-700 ">78%</span>
        </div>
        <div className="w-full h-2 bg-gray-100 rounded-full">
          <div className="h-2 bg-cyan-400 rounded-full" style={{ width: "78%" }} />
        </div>
      </div>
    </div>
  );
}

// CandidateSummaryCard (left)
function CandidateSummaryCard() {
  return (
    <div className="bg-white rounded-3xl shadow-lg flex items-center px-10 py-10 mb-8 w-full" style={{ minHeight: 340, background: "linear-gradient(180deg,white 60%,#e0f2fe 100%)"}}>
      {/* Profile Image */}
      <div className="flex-shrink-0">
        <img
          src="/images/People_2.png"
          alt="Anna Williams"
          className="w-56 h-56 rounded-3xl object-cover shadow"
        />
      </div>
      {/* Info and Actions */}
      <div className="flex flex-1 items-center justify-between ml-10">
        {/* Left: Name, Title, Top 5% */}
        <div className="flex flex-col justify-center" style={{ minWidth: 320 }}>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Anna Williams</h2>
          <div className="text-lg  text-gray-600 mb-4">Senior Full Stack Developer</div>
          <div className="flex items-center text-green-400 text-lg font-semibold mb-8">
            <ArrowUp className="w-7 h-7 mr-2" /> Top 5%
          </div>
          <button className="flex items-center gap-3 border-2 border-green-400 text-green-600 font-bold rounded-2xl px-4 py-2 text-lg hover:bg-green-50 transition mb-0 w-fit">
            <CheckCircle className="w-6 h-6" /> Accept Candidate
          </button>
        </div>
        {/* Center: ARC Score */}
        <div className="flex flex-col items-center justify-center ">
          <span className="text-3xl font-extrabold text-black mb-2">92</span>
          <span className="text-lg text-gray-600">Total ARC Score</span>
        </div>
        {/* Right: Performance */}
        <div className="flex flex-col items-center justify-center">
          <BarChart3 className="w-12 h-12 text-black mb-2" />
          <span className="text-lg text-gray-600">Performance</span>
        </div>
      </div>
      {/* 
      <div className="absolute left-1/2  transform -translate-x-1/3  flex gap-16 w-[60%] bottom-4">
        <button className="text-gray-500 font-semibold text-2xl hover:underline">Reject</button>
        <button className="text-gray-500 font-semibold text-2xl hover:underline">Chat</button>
        <button className="text-gray-500 font-semibold text-2xl hover:underline">Interview</button>
      </div>
      */}
    </div>
  );
}

function KpiCard({ title, value, icon, bg, iconBg, trend, trendValue, trendColor }) {
  return (
    <div
      className={`rounded-2xl p-2 flex flex-col justify-between shadow-[0_8px_24px_0_rgba(0,0,0,0.06)]`}
      style={{ background: bg, minWidth: 240, minHeight: 120, boxShadow: "0 8px 24px 0 rgba(0,0,0,0.06)" }}
    >
      <div className="flex justify-between items-center">
        <div>
          <div className="text-sm font-semibold leading-tight mb-2" style={{ color: "#18181B" }}>{title}</div>
          <div className="text-lg font-extrabold" style={{ color: "#18181B" }}>{value}</div>
        </div>
        <div
          className="rounded-full flex items-center justify-center mt-6"
          style={{
            background: iconBg,
            width: 50,
            height: 50,
            minWidth: 30,
            minHeight: 30,
          }}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}

function KpiCardsRow() {
  return (
        <div className="flex gap-6">
      <KpiCard
        title="Application Date"
        value="June 10,2025"
        icon={<Users className="w-14 h-14 text-[#7BAA4D]" />}
        bg="#EEFFBC"
        iconBg="#DDF7A6"
        trend={1}
        trendValue={12.5}
        trendColor="#18181B"
      />
      <KpiCard
        title="Submition Date"
        value="June 12,2025"
        icon={<Star className="w-14 h-14 text-[#4F3CC9]" fill="#4F3CC9" />}
        bg="#E7E3FF"
        iconBg="#CFC6FF"
        trend={1}
        trendValue={8.0}
        trendColor="#18181B"
      />
      <KpiCard
        title="Task Completed"
        value="2 days 4 hours"
        icon={<CheckCircle className="w-14 h-14 text-yellow-100" fill="#C9A13C" />}
        bg="#FFF6D9"
        iconBg="#FFE7A6"
        trend={1}
        trendValue={12.5}
        trendColor="#18181B"
      />
      <KpiCard
        title="Avg. Response Latency"
        value="3.2 min."
        icon={<XCircle className="w-14 h-14 text-red-100" fill="#C94F3C" />}
        bg="#FFC9C9"
        iconBg="#F7A6A6"
        trend={-1}
        trendValue={3.0}
        trendColor="#18181B"
      />
    </div>
  );
}

function DashboardHeader() {
  return (
    <header className="flex items-center justify-between mb-10">
      {/* Logo */}
      <div className="text-2xl font-bold text-gray-900">Candidates</div>
      {/* Search Bar */}
      <div className="flex-1 mx-8">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search Candidates, Vacancy, etc..."
            className="w-full rounded-full border border-gray-200 py-3 pl-6 pr-12 text-gray-700 text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-100 transition"
          />
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>
      </div>
      {/* Icons and User */}
      <div className="flex items-center gap-6">
        <button className="text-gray-400 hover:text-blue-500 transition">
          {/* Example: dark mode icon */}
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"></path></svg>
        </button>
        <button className="relative text-gray-400 hover:text-blue-500 transition">
          <Bell className="w-6 h-6" />
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
        </button>
        <div className="flex items-center gap-2">
          <img
            src="images/People_4.png"
            alt="User"
            className="w-12 h-12 rounded-full object-cover border-2 border-white shadow"
          />
          <span className="font-medium text-gray-900">Aiden Max</span>
        </div>
      </div>
    </header>
  );
}

export default function CandidatesPage() {
  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <DashboardHeader />
      <div className="flex gap-4 mb-8">
        {/* Left: KPI cards in a row, stacked with Schedule below */}
        <div className="flex flex-col flex-1 gap-3">
          {/* KPI Cards Row */}
          <CandidateSummaryCard />
          <KpiCardsRow />
          {/* Schedule Card fills remaining height to match Ongoing Activities */}
          <div className="flex-1 h-full ">
            <SkillsAssessmentCard />
          </div>
        </div>
        {/* Right: Ongoing Activities, stretches full height of left column */}
        <div className="h-full flex-shrink-0 flex flex-col gap-4" style={{ minWidth: 390 }}>
            <CumulativeAgentScoresCard />
        </div>
      </div>
      <div className="flex gap-8 mt-8">
        <OverallPerformanceCard />
        <SuccessPredictionCard />
      </div>
      <div className="flex gap-8 mt-8">
        <OptimusScoreCard />
        <SkillMatchGaugeCard />
        {/*<MonicaScoreCard />*/}
      </div>
      <div className="flex gap-8 mt-8">
        <InterviewScore />
        <MonicaScoreCard />
      </div>
      <StrengthsWeaknessesRow />
      <RecentApplicationsCard />
    </div>
  );
}