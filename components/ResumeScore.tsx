import React, {useState} from "react";
import { Users, Star, CheckCircle, XCircle, ArrowUp, Search, Bell, BarChart3, Edit, Download, Pause, X, Circle } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, LabelList, CartesianGrid, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";
import { useRouter } from "next/navigation";

const cardGradient = "bg-[linear-gradient(180deg,white_60%,#e0f2fe_100%)]";


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
      <div className="text-2xl font-bold text-gray-900">Technical Score</div>
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

function CountTrustWorthiness() {
  const percentage = 88;
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
            stroke="#6ee0f6"
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
            fill="#6ee0f6"
          >
            {percentage}%
          </text>
        </svg>
        <div className="flex items-center mt-6">
          <span className="inline-block w-5 h-5 rounded-full bg-[#6ee0f6] mr-3"></span>
          <span className="text-gray-600 text-lg">Excellent Trust Level</span>
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
          className="text-lg font-bold rounded-3xl px-4 py-2  bg-grey-600 text-gray-400"
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
          className="text-lg font-bold rounded-3xl px-4 py-2 shadow-md bg-green-600 text-white"
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
          <div className="text-2xl font-bold text-black mb-8">Overall Score</div>
          <DonutChartLarge percent={92} color="#6ee0f6" textColor="#6ee0f6" />
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

function OngoingActivitiesCard() {
  const activities = [
    {
      icon: <span className="bg-red-700 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">1</span>,
      title: "Degree",
      subtitle: "",
      date: "Verified",
    },
    {
      icon: <span className="bg-purple-700 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">2</span>,
      title: "Google UX Design",
      subtitle: "",
      date: "Verified",
    },
    {
      icon: <span className="bg-blue-700 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">3</span>,
      title: "AWS Certified",
      subtitle: "",
      date: "Verified",
    },
    {
      icon: <span className="bg-green-500 text-gray-700 rounded-full w-10 h-10 flex items-center justify-center font-bold">4</span>,
      title: "IMB UX Certificate",
      subtitle: "",
      date: "Verified",
    },
  ];
  return (
    <div className={`rounded-2xl shadow-md p-8 min-w-[445px] min-h-[540px] ${cardGradient}`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-2xl">Top Performing Candidates</h2>
        <button className="border px-4 py-1 rounded-2xl text-lg font-medium">See All</button>
      </div>
      <div className="border-b border-gray-200 mb-4"></div>
      <div className="space-y-5">
        {activities.map((item, idx) => (
          <div key={idx} className="flex items-center justify-between bg-gray-100 rounded-xl px-5 py-5">
            <div className="flex items-center gap-3">
              {item.icon}
              <div>
                <div className="font-medium text-gray-900 text-lg">{item.title}</div>
                {item.subtitle && <div className="text-sm text-gray-400">{item.subtitle}</div>}
              </div>
            </div>
            <div className="text-black font-bold text-xl">{item.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function OverallPerformanceCard() {
  const data = [
    { subject: "Work Experience", score: 40 },
    { subject: "Skills", score: 70 },
    { subject: "Summary", score: 70 },
    { subject: "Education", score: 100 },
    { subject: "Certification", score: 50 },
    { subject: "Git-hub Score", score: 70 },
    { subject: "Project", score: 70 },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col min-w-[700px]" style={{ minHeight: 510, background: "linear-gradient(180deg,white 60%,#e0f2fe 100%)"}}>
      <div className="flex items-center justify-between mb-4">
        <div className="text-3xl font-bold text-gray-900">Skill Allignment</div>
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

function KeyStrengthsCard() {
  const activities = [
    {
      title: "Tech Global Inc.",
      subtitle: "",
      date: "Verified",
    },
    {
      title: "Web Solutions LLc",
      subtitle: "",
      date: "Verified",
    },
    {
      title: "University of Technology",
      subtitle: "",
      date: "Verified",
    },
    {
      title: "University of Berlin",
      subtitle: "",
      date: "Verified",
    },
  ];
  return (
    <div className={`rounded-2xl shadow-md p-8 min-w-[700px] min-h-[540px] ${cardGradient}`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-2xl">Resume Verification</h2>
        <button className="border px-4 py-1 rounded-2xl text-lg font-medium">See All</button>
      </div>
      <div className="border-b border-gray-200 mb-4"></div>
      <div className="space-y-5">
        {activities.map((item, idx) => (
          <div key={idx} className="flex items-center justify-between bg-white-100 rounded-xl px-5 py-5">
            <div className="flex items-center gap-3">
              <div>
                <div className="font-medium text-gray-900 text-lg">{item.title}</div>
                {item.subtitle && <div className="text-sm text-gray-400">{item.subtitle}</div>}
              </div>
            </div>
            <span className="bg-blue-300 rounded-full px-4 py-2 text-sx font-bold shadow text-gray-800">{item.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AdminControlsCard() {
  return (
    <div className="rounded-3xl shadow-md p-8 bg-white border border-gray-100 mb-6 min-w-[440px]" style={{background: "linear-gradient(180deg,white 80%,#e0f2fe 100%)"}}>
      <h2 className="text-2xl font-bold text-[#181C32] mb-8">Alert and Suggestions</h2>
      <div className="flex flex-col gap-6">
        <button className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-green-700 text-white text-xl font-semibold rounded-xl py-4 transition">
          <Download className="w-6 h-6" />
          Download Report
        </button>
        <button className="flex items-center justify-center gap-3 bg-gray-100 text-gray-700 text-xl font-semibold rounded-xl py-4 transition hover:bg-gray-200">
          <Circle className="w-6 h-6" />
          Retake Interviews
        </button>
        <button className="flex items-center justify-center gap-3 bg-yellow-100 text-yellow-800 text-xl font-semibold rounded-xl py-4 transition hover:bg-yellow-200">
          <Edit className="w-6 h-6" />
          Edit Job
        </button>
        <button className="flex items-center justify-center gap-3 bg-red-100 text-red-700 text-xl font-semibold rounded-xl py-4 transition hover:bg-red-200">
          <X className="w-6 h-6" />
          Close Job
        </button>
      </div>
    </div>
  );
}

function SkillMatchPercentageCard() {
  const data = [
    { skill: "Java Script", percent: 84 },
    { skill: "React", percent: 90 },
    { skill: "Typescript", percent: 82 },
    { skill: "Css/Sass", percent: 92 },
    { skill: "Graph QL", percent: 81 },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-full" style={{ minHeight: 380, background: "linear-gradient(180deg,white 80%,#e0f2fe 100%)" }}>
      <div className="text-2xl font-bold text-[#181C32] mb-2">Skill Match Percentage</div>
      <hr className="mb-8 -mx-8 border-gray-200" />
      <ResponsiveContainer width="100%" height={260}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 10, right: 40, left: 40, bottom: 10 }}
          barCategoryGap="20%"
        >
          <CartesianGrid stroke="#f3f6f8" horizontal={false} />
          <XAxis type="number" domain={[0, 100]} tick={{ fill: "#A3A3A3", fontSize: 20 }} axisLine={true} tickLine={true} />
          <YAxis dataKey="skill" type="category" tick={{ fill: "#A3A3A3", fontSize: 24, fontWeight: 500 }} axisLine={true} tickLine={false} width={160} />
          <Tooltip formatter={(value) => `${value}%`} />
          <Bar dataKey="percent" fill="#6ee0f6" radius={[8, 8, 8, 8]} barSize={32}>
            <LabelList dataKey="percent" position="right" formatter={(value) => `${value}%`} fill="#6ee0f6" fontSize={28} fontWeight={700} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

function ProjectValidationCard() {
  const data = [
    { project: "Optimized Image", value: 64779 },
    { project: "Built A Blog", value: 84779 },
    { project: "Implemented Robust", value: 23887 },
    { project: "Implemented User", value: 53887 },
    { project: "Developed a User", value: 10142 },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 w-full min-w-[600px]" style={{ minHeight: 380, background: "linear-gradient(180deg,white 80%,#e0f2fe 100%)" }}>
      <div className="text-2xl font-bold text-[#181C32] mb-2">Project Validation</div>
      <hr className="mb-8 -mx-8 border-gray-200" />
      <ResponsiveContainer width="100%" height={260}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 10, right: 40, left: 40, bottom: 10 }}
          barCategoryGap="20%"
        >
          <CartesianGrid stroke="#f3f6f8" horizontal={false} />
          <XAxis type="number" domain={[0, 100000]} tick={{ fill: "#A3A3A3", fontSize: 20 }} axisLine={true} tickLine={true} tickFormatter={v => `${v / 1000}k`} />
          <YAxis dataKey="project" type="category" tick={{ fill: "#A3A3A3", fontSize: 20, fontWeight: 500 }} axisLine={true} tickLine={false} width={220} />
          <Tooltip formatter={(value) => value.toLocaleString()} />
          <Bar dataKey="value" fill="#43A047" radius={[8, 8, 8, 8]} barSize={32}>
            <LabelList dataKey="value" position="right" formatter={(value) => value.toLocaleString()} fill="#43A047" fontSize={28} fontWeight={700} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}


export default function ResumeScore() {
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
            <CountTrustWorthiness />
        </div>
      </div>
      <div className="flex gap-8 mt-8">
        <OptimusScoreCard />
        <OngoingActivitiesCard />
      </div>
      <div className="flex gap-8 mt-8">
        <KeyStrengthsCard />
        <OverallPerformanceCard />
        {/*<MonicaScoreCard />*/}
      </div>
      <div className="flex gap-8 mt-8">
        <ProjectValidationCard />
        <AdminControlsCard />
      </div>
      <div className="flex gap-8 mt-8">
      <SkillMatchPercentageCard />
      </div>
    </div>
  );
}