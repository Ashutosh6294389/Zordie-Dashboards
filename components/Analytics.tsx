import React, {useState} from "react";
import {Users, Star, CheckCircle, XCircle, ArrowUp, ArrowDown, Search, Bell, User, ChevronRight, ArrowUpRight, Edit, Download, Pause, X, Plus, Calendar, AlertTriangle, Clock } from "lucide-react";
import { LineChart, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, PieChart, Pie, Cell, Line, CartesianGrid,  } from "recharts";
import CandidateProfile from "./CandidateProfile";
import { useRouter } from "next/navigation";
import Link from 'next/link'

const helpQueriesData = [
  {day: "", queries:0},
  { day: "Mon", queries: 30 },
  { day: "Tue", queries: 20 },
  { day: "Wed", queries: 40 },
  { day: "Thu", queries: 30 },
  { day: "Fri", queries: 40 },
  { day: "Sat", queries: 50 },
  { day: "Sun", queries: 30 },
];

function HelpQueriesOverTimeCard() {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-4 mb-8" style={{ minWidth: 540, background: "linear-gradient(180deg,white 80%,#e0f2fe 100%)" }}>
      <h2 className="text-2xl font-bold text-[#181C32] mb-2">Help Queries Over Time</h2>
      <ResponsiveContainer width="100%" height={340}>
        <LineChart data={helpQueriesData} margin={{ top: 30, right: 30, left: 30, bottom: 30 }}>
          <CartesianGrid stroke="#eee" strokeDasharray="3 3" />
          <XAxis dataKey="day" tick={{ fontSize: 20, fill: "#181C32" }} axisLine={true} tickLine={false} />
          <YAxis
            domain={[10, 60]}
            tick={{ fontSize: 18, fill: "#7B61FF" }}
            axisLine={false}
            tickLine={false}
            label={{ value: "Queries", angle: -90, position: "insideLeft", fontSize: 20, fill: "#888" }}
          />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="queries"
            stroke="#A259FF"
            strokeWidth={4}
            dot={{ r: 8, fill: "#fff", stroke: "#A259FF", strokeWidth: 6, filter: "drop-shadow(0 2px 8px #A259FF33)" }}
            activeDot={{ r: 14, fill: "#fff", stroke: "#A259FF", strokeWidth: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

function DashboardHeader() {
  return (
    <header className="flex items-center justify-between mb-10">
      {/* Logo */}
      <div className="text-2xl text-black-600">Candidates</div>
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

function AnalyticsReportsCard() {
  const [period, setPeriod] = useState("Last 7 days");
  const periods = ["Last 7 days", "Last 30 days", "This Month", "Last Month"];

  return (
    <div className="bg-white rounded-3xl shadow-xl p-12 flex flex-col items-center justify-center mb-8" style={{ minWidth: 540, background: "linear-gradient(180deg,white 60%,#e0f2fe 100%)" }}>
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Analytics and Reports</h2>
      <p className="text-xl text-gray-500 font-medium mb-10 text-center">
        “Track performance, uncover insights and make HR informed decisions - all in one place”
      </p>
      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* Period Select */}
        <div className="mb-4 md:mb-0">
          <select
            value={period}
            onChange={e => setPeriod(e.target.value)}
            className="border rounded-xl px-6 py-4 text-lg font-medium text-gray-700 shadow focus:outline-none focus:ring-2 focus:ring-blue-100"
          >
            {periods.map(opt => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
        {/* Export PDF */}
        <button className="flex items-center gap-3 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-xl text-lg font-semibold shadow transition">
          <Download className="w-6 h-6" />
          Export PDF
        </button>
        {/* Export Excel */}
        <button className="flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl text-lg font-semibold shadow transition">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="w-6 h-6">
            <rect x="2" y="3" width="20" height="18" rx="2" fill="#fff"/>
            <path d="M6 8l4 8M10 8l-4 8" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <rect x="14" y="8" width="4" height="8" rx="1" fill="#22c55e"/>
          </svg>
          Export Excel
        </button>
      </div>
    </div>
  );
}

const queryData = [
  { name: "Open", value: 30 },
  { name: "In Progress", value: 20 },
  { name: "Resolved", value: 50 },
];

const queryColors = ["#7B61FF", "#34A853", "#FFD36F"];

function QueryTypesCard() {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center mb-8" style={{ maxWidth: 370, background: "linear-gradient(180deg,white 60%,#e0f2fe 100%)" }}>
      <h2 className="text-3xl font-bold text-gray-900 mb-2 text-left w-full">Query Types</h2>
      <hr className="w-full mb-4 border-gray-200" />
      <PieChart width={300} height={300}>
        <Pie
          data={queryData}
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={120}
          dataKey="value"
          label={({ name, percent }) => `${Math.round(percent * 100)}%`}
          labelLine={false}
        >
          {queryData.map((entry, idx) => (
            <Cell key={`cell-${idx}`} fill={queryColors[idx]} />
          ))}
        </Pie>
      </PieChart>
      <div className="flex flex-col items-start mt-2 w-full px-2">
        <div className="flex items-center mb-2 gap-4">
          <span className="w-4 h-4 rounded-full mr-2" style={{ background: queryColors[0] }} />
          <span className="text-sm font-semibold text-gray-500">Open</span>
          <span className="w-4 h-4 rounded-full mr-2" style={{ background: queryColors[1] }} />
          <span className="text-sm font-semibold text-gray-500">In Progress</span>
          <span className="w-4 h-4 rounded-full mr-2" style={{ background: queryColors[2] }} />
          <span className="text-sm font-semibold text-gray-500">Resolved</span>
        </div>
      </div>
    </div>
  );
}

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
    <div className="bg-white rounded-3xl shadow-lg p-8" style={{ minWidth: 340, maxWidth: 370, background: "linear-gradient(180deg,white 60%,#e0f2fe 100%)"}}>
      <div className="text-2xl font-bold text-black mb-4">Query Status</div>
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
          <div className="text-lg text-grey-600">Payroll</div>
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
          <DonutChart percent={82} color="#19C900" textColor="#1B8C7B" />
        </div>
        {/* Row 3 */}
        <div className="flex items-center justify-between">
          <DonutChart percent={78} color="#FF4B00" textColor="#E94B6B" />
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
          <div className="text-sm text-grey-600">Recruitment</div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-lg text-grey-600">Benefits</div>
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
          <DonutChart percent={80} color="#ff8833ff" textColor="#1B8C7B" />
        </div>
      </div>
    </div>
  );
}

function AnalyticsInfoCardsRow() {
  const cards = [
    {
      icon: <AlertTriangle className="w-8 h-8 text-[#C0392B]" />,
      title: "Query Resolution Slowing",
      description: "Average response time increased by 25% this week",
      bg: "bg-red-50",
      border: "border-red-200",
      text: "text-[#8B2C1D]",
      descText: "text-[#C0392B]",
    },
    {
      icon: <LineChart className="w-8 h-8 text-[#2563EB]" />,
      title: "Hiring Spike in Sales",
      description: "Sales team applications up 40% this month",
      bg: "bg-blue-50",
      border: "border-blue-200",
      text: "text-[#1E3A8A]",
      descText: "text-[#2563EB]",
    },
    {
      icon: <Clock className="w-8 h-8 text-[#B8860B]" />,
      title: "Time-to-Hire Increasing",
      description: "Engineering roles taking 2 days longer on average",
      bg: "bg-yellow-50",
      border: "border-yellow-200",
      text: "text-[#7C5A1B]",
      descText: "text-[#B8860B]",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-[#22C55E]" />,
      title: "Payroll Accuracy Improved",
      description: "99.7% accuracy rate, highest this quarter",
      bg: "bg-green-50",
      border: "border-green-200",
      text: "text-[#166534]",
      descText: "text-[#22C55E]",
    },
  ];

  return (
    <div className="flex gap-2 mb-8">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className={`flex flex-col justify-center ${card.bg} ${card.border} rounded-2xl border px-8 py-6 min-w-[270px]`}
        >
          <div className="flex items-center gap-3 mb-2">
            {card.icon}
            <span className={`text-sm font-semibold ${card.text}`}>{card.title}</span>
          </div>
          <div className={`mt-2 text-sm font-medium ${card.descText}`}>{card.description}</div>
        </div>
      ))}
    </div>
  );
}

function TimeToResolveCard() {
  // Example data for the area chart (height values)
  const heights = [40, 50, 70, 90, 120];

  // SVG chart dimensions
  const width = 340;
  const height = 180;
  const chartBottom = 140;
  const chartTop = 40;
  const chartHeight = chartBottom - chartTop;
  const points = heights.map((h, i) => {
    const x = (width / (heights.length - 1)) * i;
    const y = chartBottom - h;
    return `${x},${y}`;
  }).join(" ");

  // Area path for fill
  const areaPath = `
    M0,${chartBottom}
    L${points}
    L${width},${chartBottom}
    Z
  `;

  // Line path for stroke
  const linePath = `M${points}`;

  // Last point for the end dot and vertical line
  const lastX = (width / (heights.length - 1)) * (heights.length - 1);
  const lastY = chartBottom - heights[heights.length - 1];

  return (
    <div className="bg-white rounded-3xl shadow-xl p-4 flex flex-col items-center min-w-[340px] max-w-[360px] max-h-[360px] border border-[#f3f6f8] mb-8"
      style={{
        background: "linear-gradient(180deg,white 80%,#e0f2fe 100%)",
      }}
    >
      <div className="w-full text-left pb-4 border-b border-gray-200 mb-6">
        <h2 className="text-xl font-bold tracking-wide">Total Candidates</h2>
        <div className="flex items-center gap-6 mt-2 mb-4 w-full">
        <span className="text-[2rem] font-bold text-[#181C32]">
          2847
        </span>
        <span className="flex items-center gap-1 ml-2">
          <ArrowUpRight className="w-6 h-6 text-green-500" />
          <span className="text-green-500 font-semibold text-xl">+12%</span>
          <span className="text-gray-400 font-medium text-sm ml-1">vs last month</span>
        </span>
      </div>
      </div>
      
      {/* Custom Area Chart */}
      <div className="w-full flex-1 flex items-end mb-20">
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" className="w-full">
          <defs>
            <linearGradient id="areaGradient2" x1="0" y1={chartTop} x2="0" y2={height} gradientUnits="userSpaceOnUse">
              <stop stopColor="#b3c6ff" stopOpacity="0.5" />
              <stop offset="1" stopColor="#b3c6ff" stopOpacity="0.15" />
            </linearGradient>
          </defs>
          {/* Area */}
          <path d={areaPath} fill="url(#areaGradient2)" />
          {/* Line */}
          <path d={linePath} fill="none" stroke="#3366ff" strokeWidth="2.5" />
          {/* Vertical line at last point */}
          <line x1={lastX} y1={lastY} x2={lastX} y2={height - 40} stroke="#3366ff" strokeWidth="2" />
          {/* End Dot */}
          <circle cx={lastX} cy={lastY} r="9" fill="#fff" stroke="#3366ff" strokeWidth="3" />
        </svg>
      </div>
    </div>
  );
}

function AvgTime() {
  // Example data for the area chart (height values)
  const heights = [40, 50, 70, 90, 120];

  // SVG chart dimensions
  const width = 340;
  const height = 180;
  const chartBottom = 140;
  const chartTop = 40;
  const chartHeight = chartBottom - chartTop;
  const points = heights.map((h, i) => {
    const x = (width / (heights.length - 1)) * i;
    const y = chartBottom - h;
    return `${x},${y}`;
  }).join(" ");

  // Area path for fill
  const areaPath = `
    M0,${chartBottom}
    L${points}
    L${width},${chartBottom}
    Z
  `;

  // Line path for stroke
  const linePath = `M${points}`;

  // Last point for the end dot and vertical line
  const lastX = (width / (heights.length - 1)) * (heights.length - 1);
  const lastY = chartBottom - heights[heights.length - 1];

  return (
    <div className="bg-white rounded-3xl shadow-xl p-4 flex flex-col items-center min-w-[340px] max-w-[360px] max-h-[360px] border border-[#f3f6f8] mb-8"
      style={{
        background: "linear-gradient(180deg,white 80%,#e0f2fe 100%)",
      }}
    >
      <div className="w-full text-left pb-4 border-b border-gray-200 mb-6">
        <h2 className="text-xl font-bold tracking-wide">Payroll Accuracy</h2>
        <div className="flex items-center gap-6 mt-2 mb-4 w-full">
        <span className="text-[2rem] font-bold text-[#181C32]">
          18.5%
        </span>
        <span className="flex items-center gap-1 ml-2">
          <ArrowUpRight className="w-6 h-6 text-orange-500" />
          <span className="text-orange-500 font-semibold text-xl">+2days</span>
          <span className="text-gray-400 font-medium text-sm ml-1">vs last month</span>
        </span>
      </div>
      </div>
      
      {/* Custom Area Chart */}
      <div className="w-full flex-1 flex items-end mb-20">
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" className="w-full">
          <defs>
            <linearGradient id="areaGradient2" x1="0" y1={chartTop} x2="0" y2={height} gradientUnits="userSpaceOnUse">
              <stop stopColor="#ff8533ff" stopOpacity="0.5" />
              <stop offset="1" stopColor="#ff8533ff" stopOpacity="0.15" />
            </linearGradient>
          </defs>
          {/* Area */}
          <path d={areaPath} fill="url(#areaGradient2)" />
          {/* Line */}
          <path d={linePath} fill="none" stroke="#ff8533ff" strokeWidth="2.5" />
          {/* Vertical line at last point */}
          <line x1={lastX} y1={lastY} x2={lastX} y2={height - 40} stroke="#ff8533ff" strokeWidth="2" />
          {/* End Dot */}
          <circle cx={lastX} cy={lastY} r="9" fill="#fff" stroke="#ff8533ff" strokeWidth="3" />
        </svg>
      </div>
    </div>
  );
}

function PayRoll() {
  // Example data for the area chart (height values)
  const heights = [40, 50, 70, 90, 120];

  // SVG chart dimensions
  const width = 340;
  const height = 180;
  const chartBottom = 140;
  const chartTop = 40;
  const chartHeight = chartBottom - chartTop;
  const points = heights.map((h, i) => {
    const x = (width / (heights.length - 1)) * i;
    const y = chartBottom - h;
    return `${x},${y}`;
  }).join(" ");

  // Area path for fill
  const areaPath = `
    M0,${chartBottom}
    L${points}
    L${width},${chartBottom}
    Z
  `;

  // Line path for stroke
  const linePath = `M${points}`;

  // Last point for the end dot and vertical line
  const lastX = (width / (heights.length - 1)) * (heights.length - 1);
  const lastY = chartBottom - heights[heights.length - 1];

  return (
    <div className="bg-white rounded-3xl shadow-xl p-4 flex flex-col items-center min-w-[340px] max-w-[360px] max-h-[360px] border border-[#f3f6f8] mb-8"
      style={{
        background: "linear-gradient(180deg,white 80%,#e0f2fe 100%)",
      }}
    >
      <div className="w-full text-left pb-4 border-b border-gray-200 mb-6">
        <h2 className="text-xl font-bold tracking-wide">Avg. time to hire</h2>
        <div className="flex items-center gap-6 mt-2 mb-4 w-full">
        <span className="text-[2rem] font-bold text-[#181C32]">
          99.7%
        </span>
        <span className="flex items-center gap-1 ml-2">
          <ArrowUpRight className="w-6 h-6 text-green-500" />
          <span className="text-green-500 font-semibold text-xl">+0.2%</span>
          <span className="text-gray-400 font-medium text-sm ml-1">vs last month</span>
        </span>
      </div>
      </div>
      
      {/* Custom Area Chart */}
      <div className="w-full flex-1 flex items-end mb-20">
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" className="w-full">
          <defs>
            <linearGradient id="areaGradient2" x1="0" y1={chartTop} x2="0" y2={height} gradientUnits="userSpaceOnUse">
              <stop stopColor="#33ff5fff" stopOpacity="0.5" />
              <stop offset="1" stopColor="#33ff5fff" stopOpacity="0.15" />
            </linearGradient>
          </defs>
          {/* Area */}
          <path d={areaPath} fill="url(#areaGradient2)" />
          {/* Line */}
          <path d={linePath} fill="none" stroke="#33ff5fff" strokeWidth="2.5" />
          {/* Vertical line at last point */}
          <line x1={lastX} y1={lastY} x2={lastX} y2={height - 40} stroke="#33ff5fff" strokeWidth="2" />
          {/* End Dot */}
          <circle cx={lastX} cy={lastY} r="9" fill="#fff" stroke="#33ff5fff" strokeWidth="3" />
        </svg>
      </div>
    </div>
  );
}

function RecentReportsCard() {
  const reports = [
    {
      name: "Monthly Recruitment Summary",
      type: "Recruitment",
      date: "Dec 15, 2024",
    },
    {
      name: "Payroll Analysis Q4",
      type: "Payroll",
      date: "Dec 10, 2024",
    },
    {
      name: "Help Desk Performance",
      type: "Support",
      date: "Dec 8, 2024",
    },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-xl p-4 mt-8 w-full" style={{ background: "linear-gradient(180deg,white 80%,#e0f2fe 100%)" }}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-[#181C32]">Recent Reports</h2>
        <div className="flex items-center gap-4">
          <select className="border rounded-xl px-6 py-2 text-lg font-medium text-gray-700 shadow focus:outline-none focus:ring-2 focus:ring-blue-100">
            <option>All Teams</option>
            <option>Recruitment</option>
            <option>Payroll</option>
            <option>Support</option>
          </select>
          <button className="bg-gradient-to-r from-blue-600 to-purple-500 text-white px-4 py-2 rounded-xl text-sx font-semibold shadow transition hover:from-blue-700 hover:to-purple-600">
            + Generate Report
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-4 px-6 text-gray-400 font-semibold text-lg">Report Name</th>
              <th className="py-4 px-6 text-gray-400 font-semibold text-lg">Type</th>
              <th className="py-4 px-6 text-gray-400 font-semibold text-lg">Generated On</th>
              <th className="py-4 px-6 text-gray-400 font-semibold text-lg">Actions</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((r, idx) => (
              <tr key={r.name} className="border-b last:border-b-0">
                <td className="py-6 px-6 text-lg text-gray-900 font-medium">{r.name}</td>
                <td className="py-6 px-6 text-lg text-gray-500">{r.type}</td>
                <td className="py-6 px-6 text-lg text-gray-500">{r.date}</td>
                <td className="py-6 px-6 text-lg">
                  <span className="text-blue-500 font-semibold cursor-pointer mr-6 hover:underline">View</span>
                  <span className="text-green-500 font-semibold cursor-pointer hover:underline">Export</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function TopPerformingAgentsCard() {
  const agents = [
    { name: "General Purpose Agent", sub: "Prime HR", votes: 100, color: "bg-blue-200 text-blue-900" },
    { name: "Recruitment Agent", sub: "Optimus", votes: 90, color: "bg-orange-100 text-orange-700" },
    { name: "Management Agent", sub: "Maxi", votes: 80, color: "bg-red-100 text-red-700" },
    { name: "Payroll and Finance Agent", sub: "Laxmi", votes: 70, color: "bg-purple-200 text-purple-700" },
    { name: "Document & Asset Manager", sub: "Emma", votes: 60, color: "bg-gray-200 text-gray-700" },
    { name: "Behavioral Intelligence Agent", sub: "Monica", votes: 50, color: "bg-green-100 text-green-700" },
  ];
  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 w-full min-w-[580px]" style={{ background: "linear-gradient(180deg,white 80%,#f6fbff 100%)" }}>
      <h2 className="text-2xl font-bold text-[#181C32] mb-2">Top Performing Agents</h2>
      <hr className="mb-6 border-gray-200" />
      <div className="text-lg font-semibold text-gray-400 mb-4">Names</div>
      <div className="flex flex-col gap-6">
        {agents.map((agent, idx) => (
          <div key={agent.name} className="flex items-center justify-between">
            <div>
              <div className="text-lg font-semibold text-[#181C32]">{agent.name}</div>
              <div className="text-base text-gray-400">{agent.sub}</div>
            </div>
            <span className={`px-4 py-2 rounded-lg font-semibold text-base ${agent.color}`}>
              {agent.votes} {agent.votes === 1 ? "vote" : "votes"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function RecruitmentFunnelCard() {
  const funnel = [
    { label: "Applications", value: 2847, color: "bg-teal-400" },
    { label: "Shortlisted", value: 892, color: "bg-orange-400" },
    { label: "Interviewed", value: 234, color: "bg-cyan-400" },
    { label: "Hired", value: 67, color: "bg-rose-400" },
  ];
  const maxValue = funnel[0].value;
  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 w-full min-w-[580px]" style={{ background: "linear-gradient(180deg,white 80%,#f6fbff 100%)" }}>
      <h2 className="text-2xl font-bold text-[#181C32] mb-2">Recruitment Funnel</h2>
      <hr className="mb-6 border-gray-200" />
      <div className="flex flex-col gap-20">
        {funnel.map((step, idx) => (
          <div key={step.label} className="flex items-center gap-4">
            <div className={`w-6 h-6 rounded-lg ${step.color} inline-block`} />
            <span className="text-xl text-gray-500 font-semibold w-40 mb-4">{step.label}</span>
            <div className="flex-1">
              <div className="relative w-full h-3 bg-gray-200 rounded-full">
                <div
                  className={`absolute left-0 top-0 h-3 rounded-full ${step.color}`}
                  style={{ width: `${(step.value / maxValue) * 100}%` }}
                />
              </div>
            </div>
            <span className="text-2xl font-bold text-[#181C32] ml-4">{step.value.toLocaleString()}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Analytics() {
  return (
    <div className="p-0 bg-gray-50 min-h-screen">
      <DashboardHeader />
      <div className="flex gap-4 mb-8">
        <div className="flex flex-col flex-1 gap-4">
          <AnalyticsReportsCard />
          <AnalyticsInfoCardsRow />
          <div className="flex gap-2 mb-0">
            <TimeToResolveCard />
            <AvgTime />
            <PayRoll />
          </div>
          <HelpQueriesOverTimeCard />
          {/* ...other left side cards... */}
        </div>
        <div className="h-full flex-shrink-0 flex flex-col gap-0" style={{ minWidth: 390, maxWidth: 390 }}>
          <QueryTypesCard />
          <CumulativeAgentScoresCard />
          {/* ...other right side cards... */}
        </div>
      </div>
      <RecentReportsCard />
      <div className="flex gap-8 w-full mt-16">
        <RecruitmentFunnelCard />
        <TopPerformingAgentsCard />
      </div>
    </div>
  );
}