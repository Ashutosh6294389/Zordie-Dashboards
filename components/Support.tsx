import React, {useState} from "react";
import {Users, Star, CheckCircle, XCircle, ArrowUp, ArrowDown, Search, Bell, User, ChevronRight, ArrowUpRight } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, PieChart, Pie, Cell } from "recharts";

function AvgAnswersResolvedCard() {
  const percentage = 90;
  const radius = 90;
  const stroke = 16;
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="bg-white rounded-3xl shadow-xl p-4 flex flex-col items-center min-w-[340px] max-w-[400px] min-h-[470px] border border-[#f3f6f8] mb-8"
      style={{
        background: "linear-gradient(180deg,white 80%,#e0f2fe 100%)",
      }}
    >
      <div className="w-full text-left pb-4 border-b border-gray-200 mb-6">
        <h2 className="text-[2.2rem] font-bold tracking-wide">Avg. Answers Resolved</h2>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center">
        <svg height={radius * 2} width={radius * 2} className="mb-2">
          <circle
            stroke="#e5e7eb"
            fill="transparent"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
          <circle
            stroke="#4576b8"
            fill="transparent"
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={circumference + " " + circumference}
            style={{ strokeDashoffset, transition: "stroke-dashoffset 0.5s" }}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dy=".3em"
            fontSize="2.5rem"
            fontWeight="bold"
            fill="#4576b8"
          >
            {percentage}%
          </text>
        </svg>
        <div className="flex items-center mt-6">
          <span className="inline-block w-5 h-5 rounded-full bg-[#4576b8] mr-3"></span>
          <span className="text-gray-600 text-lg">Excellent Resolved Level</span>
        </div>
      </div>
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
    <div className="bg-white rounded-3xl shadow-xl p-4 flex flex-col items-center min-w-[340px] max-w-[400px] min-h-[470px] border border-[#f3f6f8] mb-8"
      style={{
        background: "linear-gradient(180deg,white 80%,#e0f2fe 100%)",
      }}
    >
      <div className="w-full text-left pb-4 border-b border-gray-200 mb-6">
        <h2 className="text-[2.2rem] font-bold tracking-wide">Time to Resolve Complaints</h2>
      </div>
      <div className="flex items-center gap-6 mt-2 mb-4 w-full">
        <span className="text-[2rem] font-bold text-[#181C32]">
          8<span className="text-lg font-medium ml-1">min</span>
          <span className="mx-1"></span>
          50<span className="text-lg font-medium ml-1">sec</span>
        </span>
        <span className="flex items-center gap-1 ml-2">
          <ArrowUpRight className="w-6 h-6 text-green-500" />
          <span className="text-green-500 font-semibold text-xl">+12%</span>
          <span className="text-gray-400 font-medium text-sm ml-1">vs last month</span>
        </span>
      </div>
      {/* Custom Area Chart */}
      <div className="w-full flex-1 flex items-end">
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

function PastHelpQueries() {
  const queries = [
    {
      name: "Roselle Ehrman",
      avatar: "images/People_1.png",
      subject: "Candidates not Receiving Interview invites",
      status: "Resolved",
      statusColor: "bg-red-100 text-red-600",
    },
    {
      name: "Jone Smith",
      avatar: "/images/People_2.png",
      subject: "Employee reimbursement still pending after approval",
      status: "Resolved",
      statusColor: "bg-red-100 text-red-600",
    },
    {
      name: "Darron Handler",
      avatar: "/images/People_3.png",
      subject: "Task asignments not syncing across departments",
      status: "Resolved",
      statusColor: "bg-red-100 text-red-600",
    },
    {
      name: "Leatrice Kulik",
      avatar: "/images/People_5.png",
      subject: "Unable to download From 16 from the portal",
      status: "Resolved",
      statusColor: "bg-red-100 text-red-600",
    },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-xl p-4 mb-8"
      style={{
        background: "linear-gradient(180deg,white 90%,#e0f2fe 100%)",
      }}
    >
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-[#1a253c]">Help Queries</h2>
        <button className="px-4 py-2 rounded-xl border border-gray-200 text-lg font-medium bg-white hover:bg-gray-50 transition">
          New Help Query
        </button>
      </div>
      <div className="flex items-center mb-6">
        <div className="flex-1">
          <span className="text-lg text-gray-600">Names</span>
        </div>
        <div className="flex-1">
          <span className="text-lg text-gray-600">Subject</span>
        </div>
        <div className="w-48 text-right">
          <span className="text-lg text-gray-600">Query Status</span>
        </div>
      </div>
      {queries.map((q, idx) => (
        <div key={q.name} className="flex items-center py-4 border-b last:border-b-0 border-gray-100">
          <div className="flex-1 flex items-center gap-4">
            <img src={q.avatar} alt={q.name} className="w-12 h-12 rounded-full object-cover" />
            <span className="text-lg font-medium text-[#1a253c]">{q.name}</span>
          </div>
          <div className="flex-1">
            <span className="text-lg text-[#1a253c]">{q.subject}</span>
          </div>
          <div className="w-56 flex justify-end">
            <span className={`px-6 py-2 rounded-xl font-medium text-sm ${q.statusColor}`}>
              {q.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

function HelpQueriesCard() {
  const queries = [
    {
      name: "Roselle Ehrman",
      avatar: "images/People_1.png",
      subject: "Unable to schedule interviews via Zordie calendar",
      status: "Waiting for Response",
      statusColor: "bg-blue-200 text-blue-900",
    },
    {
      name: "Jone Smith",
      avatar: "/images/People_2.png",
      subject: "Discrepancy in monthly salary calculation for May",
      status: "Under Review",
      statusColor: "bg-orange-200 text-orange-900",
    },
    {
      name: "Darron Handler",
      avatar: "/images/People_3.png",
      subject: "Access denied to team performance dashboard",
      status: "Resolved",
      statusColor: "bg-red-100 text-red-600",
    },
    {
      name: "Leatrice Kulik",
      avatar: "/images/People_5.png",
      subject: "Job posting not reflecting on careers page",
      status: "Under Review",
      statusColor: "bg-green-100 text-green-700",
    },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-xl p-4 mb-8"
      style={{
        background: "linear-gradient(180deg,white 90%,#e0f2fe 100%)",
      }}
    >
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-[#1a253c]">Help Queries</h2>
        <button className="px-4 py-2 rounded-xl border border-gray-200 text-lg font-medium bg-white hover:bg-gray-50 transition">
          New Help Query
        </button>
      </div>
      <div className="flex items-center mb-6">
        <div className="flex-1">
          <span className="text-lg text-gray-600">Names</span>
        </div>
        <div className="flex-1">
          <span className="text-lg text-gray-600">Subject</span>
        </div>
        <div className="w-48 text-right">
          <span className="text-lg text-gray-600">Query Status</span>
        </div>
      </div>
      {queries.map((q, idx) => (
        <div key={q.name} className="flex items-center py-4 border-b last:border-b-0 border-gray-100">
          <div className="flex-1 flex items-center gap-4">
            <img src={q.avatar} alt={q.name} className="w-12 h-12 rounded-full object-cover" />
            <span className="text-lg font-medium text-[#1a253c]">{q.name}</span>
          </div>
          <div className="flex-1">
            <span className="text-lg text-[#1a253c]">{q.subject}</span>
          </div>
          <div className="w-56 flex justify-end">
            <span className={`px-6 py-2 rounded-xl font-medium text-sm ${q.statusColor}`}>
              {q.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

function HelpTopicsCard() {
  const topics = [
    {
      title: "Getting Started",
      color: "bg-[#ecffcb]",
      iconBg: "bg-[#b3c98c]",
      text: "text-[#4b6516]",
      btnBg: "bg-white",
      btnText: "text-[#7a9a3a]",
      iconColor: "text-[#7a9a3a]",
    },
    {
      title: "Security and Protection",
      color: "bg-[#ece6ff]",
      iconBg: "bg-[#a99cf0]",
      text: "text-[#5b44b6]",
      btnBg: "bg-white",
      btnText: "text-[#7d5ff0]",
      iconColor: "text-[#7d5ff0]",
    },
    {
      title: "Troubleshooting & Support",
      color: "bg-[#fff7db]",
      iconBg: "bg-[#d6bb7b]",
      text: "text-[#a67c1a]",
      btnBg: "bg-white",
      btnText: "text-[#c59d3c]",
      iconColor: "text-[#c59d3c]",
    },
  ];

  return (
    <div className="flex gap-8 mb-8">
      {topics.map((topic, idx) => (
        <div
          key={topic.title}
          className={`flex flex-col items-center justify-center rounded-3xl shadow-xl ${topic.color} px-4 py-2 min-w-[340px] max-h-[260px] transition-all`}
          style={{ boxShadow: "0 8px 24px 0 rgba(31, 38, 135, 0.07)" }}
        >
          <div className={`rounded-full shadow-lg ${topic.iconBg} mb-4 flex items-center justify-center`} style={{ width: 60, height: 60 }}>
            <User className={`w-6 h-6 ${topic.iconColor}`} />
          </div>
          <div className={`text-xl font-semibold mb-4 ${topic.text} text-center`}>
            {topic.title}
          </div>
          <button
            className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm shadow ${topic.btnBg} ${topic.btnText} hover:shadow-lg transition`}
          >
            View All
            <ChevronRight className={`w-6 h-6 ${topic.iconColor}`} />
          </button>
        </div>
      ))}
    </div>
  );
}

function CustomerSatisfactionCard() {
  const percentage = 92;
  const radius = 100;
  const stroke = 32;
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center min-w-[340px] max-w-[400px] min-h-[520px] border border-[#f3f6f8] mb-8"
      style={{
        background: "linear-gradient(180deg,white 80%,#e0f2fe 100%)",
      }}
    >
      <div className="w-full text-left pb-4 border-b border-gray-200 mb-6">
        <h2 className="text-2xl font-semibold tracking-wide">Customer Satisfaction</h2>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center">
        <svg height={radius * 2} width={radius * 2} className="mb-2">
          <circle
            stroke="#e5e7eb"
            fill="transparent"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
          <circle
            stroke="#43a047"
            fill="transparent"
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={circumference + " " + circumference}
            style={{ strokeDashoffset, transition: "stroke-dashoffset 0.5s" }}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dy=".3em"
            fontSize="2.5rem"
            fontWeight="bold"
            fill="#43a047"
          >
            {percentage}%
          </text>
        </svg>
        <div className="flex items-center mt-6">
          <span className="inline-block w-5 h-5 rounded-full bg-[#43a047] mr-3"></span>
          <span className="text-gray-600 text-lg">Excellent Satisfaction Level</span>
        </div>
      </div>
    </div>
  );
}

function HelpCard() {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-12 flex flex-col items-center justify-center text-center mb-8"
      style={{
        minHeight: 300,
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.07)",
        border: "1px solid #f3f6f8",
        background: "linear-gradient(180deg,white 60%,#e0f2fe 100%)",
      }}
    >
      <h1 className="text-2xl font-bold mb-4">Get The Help You Need</h1>
      <p className="text-xl font-medium mb-8 mt-2">
        <span className="text-2xl mr-2">“</span>
        Whenever you need support, We are here. Just let us know "
      </p>
      <form className="w-full max-w-xl mx-auto flex items-center">
        <input
          type="text"
          placeholder="Ask a question..."
          className="flex-1 rounded-full border border-gray-200 py-2 px-4 text-lg text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-100 transition"
        />
        <button
          type="submit"
          className="ml-[-48px] rounded-full bg-white p-2 hover:bg-gray-100 transition border-none"
          tabIndex={-1}
        >
          <ChevronRight className="w-7 h-7 text-gray-700" />
        </button>
      </form>
    </div>
  )
}

function DashboardHeader() {
  return (
    <header className="flex items-center justify-between mb-10">
      {/* Logo */}
      <div className="text-2xl text-black-600">Helpdesk & Support</div>
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

export default function Support() {
  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <DashboardHeader />
      <div className="flex gap-4 mb-8">
        <div className="flex flex-col flex-1 gap-4">
          <HelpCard /> 
          <HelpTopicsCard />
          <HelpQueriesCard />
          <PastHelpQueries />
          <div className="flex-1 h-full">
            {/*<ScoreDistributionCard /> */}
          </div>
        </div>
        <div className="h-full flex-shrink-0 flex flex-col gap-8" style={{ minWidth: 390, maxWidth: 440 }}>
            <CustomerSatisfactionCard />
            <TimeToResolveCard />
            <AvgAnswersResolvedCard />
          {/*<OngoingActivitiesCard /> */}
        </div>
      </div>
      {/*<JobListsTableCard /> */}
      {/*<RecentApplicationsCard /> */}
    </div>
  );
}