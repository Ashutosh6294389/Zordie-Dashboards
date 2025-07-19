import React, {useState} from "react";
import { Users, Star, CheckCircle, XCircle, ArrowUp, Search, Bell, BarChart3, Edit, Download, Pause, X, Circle } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, LabelList, CartesianGrid, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";
import { useRouter } from "next/navigation";
import CultureFitBehaviourCard from "./CultureFitBehaviourCard";

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
      <div className="text-2xl font-bold text-gray-900">Behavioural Intelligence</div>
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

function OverallPerformanceCard() {
  const data = [
    { subject: "Communication", score: 80 },
    { subject: "Cultural Fit", score: 84 },
    { subject: "Clarity", score: 80 },
    { subject: "Positivity", score: 100 },
    { subject: "Hesitation", score: 20 },
    { subject: "Leadership", score: 90 },
    { subject: "Confidence", score: 100 },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-lg p-4 flex flex-col max-w-[440px]" style={{ minHeight: 510, background: "linear-gradient(180deg,white 60%,#e0f2fe 100%)"}}>
      <div className="flex items-center justify-between mb-4">
        <div className="text-2xl font-bold text-gray-900">Key Metrices</div>
      </div>
      <hr className="mb-8 -mx-8 border-gray-200" />
      <div className="flex-1 flex items-center justify-center" overflow="hidden">
        <ResponsiveContainer width="100%" height={380} overflow="hidden">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data} overflow="hidden">
            <PolarGrid stroke="#e5e7eb" />
            <PolarAngleAxis dataKey="subject" tick={{ fill: "#6B7280", fontSize: 20, fontWeight: 500 }} overflow="hidden"/>
            <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} />
            <Radar
              name="Score"
              dataKey="score"
              stroke="#A259FF"
              fill="#A259FF"
              fillOpacity={0.3}
              overflow="hidden"
            />
          </RadarChart>
        </ResponsiveContainer>
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
          className="text-lg font-bold rounded-3xl px-4 py-2 bg-gray-100 text-gray-400"
          onClick={() => router.push('/Resume')}
        >
          Resume Scores
        </button>
        <button
          className="text-lg font-bold rounded-3xl px-4 py-2 shadow-md bg-green-600 text-white"
          onClick={() => router.push('/Behaviour')}
        >
          Behaviour Scores
        </button>
      </div>
    </div>
  );
}

function AdminControlsCard() {
  return (
    <div className="rounded-3xl shadow-md p-8 bg-white border border-gray-100 mb-6 min-w-[440px]" style={{background: "linear-gradient(180deg,white 80%,#e0f2fe 100%)"}}>
      <h2 className="text-2xl font-bold text-[#181C32] mb-8">Alert and Suggestions</h2>
      <div className="flex flex-col gap-6">
        <button className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-green-700 text-white text-lg font-semibold rounded-xl py-4 transition">
          <Download className="w-6 h-6" />
          Download Report
        </button>
        <button className="flex items-center justify-center gap-3 bg-gray-100 text-gray-700 text-lg font-semibold rounded-xl py-4 transition hover:bg-gray-200">
          Excellent Technical Explanation
        </button>
        <button className="flex items-center justify-center gap-3 bg-yellow-100 text-yellow-800 text-lg font-semibold rounded-xl py-4 transition hover:bg-yellow-200">
          Speak slower for more larity
        </button>
        <button className="flex items-center justify-center gap-3 bg-red-100 text-red-700 text-lg font-semibold rounded-xl py-4 transition hover:bg-red-200">
          High Hesitation on Question 2
        </button>
      </div>
    </div>
  );
}

function ProjectValidationCard() {
  const data = [
    { project: "Question 1", value: 3.45 },
    { project: "Question 2", value: 3.49 },
    { project: "Question 3", value: 2.45 },
    { project: "Question 4", value: 2.20 },
    { project: "Question 5", value: 4.16 },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 w-full min-w-[600px] max-h-[440px]" style={{ minHeight: 380, background: "linear-gradient(180deg,white 80%,#e0f2fe 100%)" }}>
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
          <XAxis type="number" domain={[0, 5]} tick={{ fill: "#A3A3A3", fontSize: 20 }} axisLine={true} tickLine={true} />
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

function ConfidenceOverTime() {
  const data = [
    { subject: "30:00 min", score: 80 },
    { subject: "0:00 min", score: 100 },
    { subject: "5:00 min", score: 80 },
    { subject: "10:00 min", score: 100 },
    { subject: "15:00 min", score: 60 },
    { subject: "20:00 min", score: 90 },
    { subject: "25:00 min", score: 92 },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-lg p-4 flex flex-col min-w-[720px]" style={{ minHeight: 510, background: "linear-gradient(180deg,white 60%,#e0f2fe 100%)"}}>
      <div className="flex items-center justify-between mb-4">
        <div className="text-2xl font-bold text-gray-900">Key Metrices</div>
      </div>
      <hr className="mb-8 -mx-8 border-gray-200" />
      <div className="flex-1 flex items-center justify-center" overflow="hidden">
        <ResponsiveContainer width="100%" height={380} overflow="hidden">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data} overflow="hidden">
            <PolarGrid stroke="#e5e7eb" />
            <PolarAngleAxis dataKey="subject" tick={{ fill: "#6B7280", fontSize: 20, fontWeight: 500 }} overflow="hidden"/>
            <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} />
            <Radar
              name="Score"
              dataKey="score"
              stroke="#A259FF"
              fill="#A259FF"
              fillOpacity={0.3}
              overflow="hidden"
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function KeyStrengthsCard() {
  const strengths = [
    "Well, my most challenging project was developing a real time analytics dashboard...",
    "The main obstacle was... um... handling the large volume of data efficiently.",
    "I implemented a microservices architecture with Redis aching to solve this.",
  ];
  return (
    <div className="bg-white rounded-3xl shadow-lg p-8 min-w-[420px] max-w-[720px] flex-1" style={{ minHeight: 320, background: "linear-gradient(180deg,white 60%,#e0f2fe 100%)"}}>
      <div className="text-2xl font-bold text-black mb-4">Live Transcript</div>
      <hr className="mb-8 -mx-8 border-gray-200" />
      <div className="flex flex-col gap-8">
        {strengths.map((item, idx) => (
          <div key={idx} className="flex items-start gap-6 mb-4">
            <span className="mt-2 w-8 h-6 rounded-full bg-green-500 inline-block" />
            <span className="text-2xl text-gray-600 font-medium leading-snug">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ...existing code...

function EnergyPerQuestionCard() {
  const data = [
    { question: "Question 1", energy: 80 },
    { question: "Question 2", energy: 85 },
    { question: "Question 3", energy: 80 },
    { question: "Question 4", energy: 65 },
    { question: "Question 5", energy: 85 },
    { question: "Question 6", energy: 85 },
    { question: "Question 7", energy: 75 },
    { question: "Question 8", energy: 55 },
    { question: "Question 9", energy: 80 },
    { question: "Question 10", energy: 97 },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-lg p-8 w-full" style={{ maxHeight: 540, background: "linear-gradient(180deg,white 60%,#e0f2fe 100%)" }}>
      <div className="text-2xl font-bold text-[#181C32] mb-2">Energy Per Question</div>
      <hr className="mb-8 -mx-8 border-gray-200" />
      <ResponsiveContainer width="100%" height={380}>
        <BarChart data={data}>
          <CartesianGrid stroke="#f3f6f8" />
          <XAxis dataKey="question" tick={{ fill: "#6B7280", fontSize: 16 }} axisLine={true} tickLine={true} />
          <YAxis domain={[0, 100]} tick={{ fill: "#A3A3A3", fontSize: 16 }} axisLine={true} tickLine={true} />
          <Tooltip formatter={(value) => value.toLocaleString()} />
          <Bar dataKey="energy" fill="#3182CE" radius={[8, 8, 0, 0]} barSize={32}>
            <LabelList dataKey="energy" position="top" formatter={(value) => value.toLocaleString()} fill="#3182CE" fontSize={18} fontWeight={700} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default function BehaviourScore() {
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
            <OverallPerformanceCard />
        </div>
      </div>
      <div className="flex gap-8 mt-8">
        <CultureFitBehaviourCard />
      </div>
      <div className="flex gap-8 mt-8">
        <ProjectValidationCard />
        <AdminControlsCard />
      </div>
      <div className="flex gap-8 mt-8">
        <ConfidenceOverTime />
        <KeyStrengthsCard />
        {/*<MonicaScoreCard />*/}
      </div>
      <div className="flex gap-8 mt-8">
        <EnergyPerQuestionCard />
      </div>
      <div className="flex gap-8 mt-8">

      </div>
    </div>
  );
}