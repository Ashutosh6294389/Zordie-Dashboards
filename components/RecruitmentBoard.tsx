import React, {useState} from "react";
import {Users, Star, CheckCircle, XCircle, ArrowUp, ArrowDown, Search, Bell } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, PieChart, Pie, Cell } from "recharts";

const cardGradient = "bg-[linear-gradient(180deg,white_60%,#e0f2fe_100%)]";


function DashboardHeader() {
  return (
    <header className="flex items-center justify-between mb-10">
      {/* Logo */}
      <div className="text-2xl font-bold text-gray-600">Recruitment</div>
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

// KPI Card (EXACT design)
function KpiCard({ title, value, icon, bg, iconBg, trend, trendValue, trendColor }) {
  return (
    <div
      className={`rounded-2xl p-4 flex flex-col justify-between shadow-[0_8px_24px_0_rgba(0,0,0,0.06)]`}
      style={{ background: bg, minWidth: 240, maxHeight: 120, boxShadow: "0 8px 24px 0 rgba(0,0,0,0.06)" }}
    >
      <div className="flex justify-between items-center">
        <div>
          <div className="text-xl  leading-tight mb-2" style={{ color: "#18181B" }}>{title}</div>
          <div className="text-xl " style={{ color: "#18181B" }}>{value}</div>
        </div>
        <div
          className="rounded-full flex items-center justify-center mt-6"
          style={{
            background: iconBg,
            width: 40,
            height: 40,
            minWidth: 40,
            minHeight: 40,
          }}
        >
          {icon}
        </div>
      </div>
      <div className="mt-1">
        <div className="inline-flex items-center gap-2 bg-white rounded-full px-3 py-1 shadow text-sm font-semibold"
          style={{ color: trendColor }}>
          {trend > 0 ? (
            <svg className="w-4 h-4" fill="none" stroke={trendColor} strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
          ) : (
            <svg className="w-4 h-4" fill="none" stroke={trendColor} strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
          )}
          <span>{Math.abs(trendValue)}%</span>
        </div>
      </div>
    </div>
  );
}

function KpiCardsRow() {
  return (
        <div className="flex gap-6">
      <KpiCard
        title="Applications"
        value="1248"
        icon={<Users className="w-14 h-14 text-[#7BAA4D]" />}
        bg="#EEFFBC"
        iconBg="#DDF7A6"
        trend={1}
        trendValue={12.5}
        trendColor="#18181B"
      />
      <KpiCard
        title="Shortlisted"
        value="869"
        icon={<Star className="w-14 h-14 text-[#4F3CC9]" fill="#4F3CC9" />}
        bg="#E7E3FF"
        iconBg="#CFC6FF"
        trend={1}
        trendValue={8.0}
        trendColor="#18181B"
      />
      <KpiCard
        title="Hired"
        value="236"
        icon={<CheckCircle className="w-14 h-14 text-yellow-100" fill="#C9A13C" />}
        bg="#FFF6D9"
        iconBg="#FFE7A6"
        trend={1}
        trendValue={12.5}
        trendColor="#18181B"
      />
      <KpiCard
        title="Rejected"
        value="429"
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

// Ongoing Activities Card
function OngoingActivitiesCard() {
  const activities = [
    {
      icon: <span className="bg-red-700 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">1</span>,
      title: "Resume Screening",
      subtitle: "Evaluating",
      date: "May 27,2025",
    },
    {
      icon: <span className="bg-purple-700 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">2</span>,
      title: "Interview Scheduling",
      date: "May 25, 2025",
    },
    {
      icon: <span className="bg-blue-700 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">3</span>,
      title: "Candidate Communication",
      date: "May 20, 2025",
    },
    {
      icon: <span className="bg-gray-300 text-gray-700 rounded-full w-10 h-10 flex items-center justify-center font-bold">4</span>,
      title: "Offer Management",
      date: "May 19, 2025",
    },
  ];
  return (
    <div className={`rounded-2xl shadow-md p-8 min-w-[445px] min-h-[540px] ${cardGradient}`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-2xl">Ongoing Activites</h2>
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
            <div className="text-gray-700 font-medium text-sm">{item.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default function RecruitmentBoard() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <DashboardHeader />
      <div className="flex gap-4 mb-8">
        <div className="flex flex-col flex-1 gap-12">
          <KpiCardsRow />
          <div className="flex-1 h-full">

          </div>
          <div className="flex-1 h-full">

          </div>
          <div className="flex-1 h-full">

          </div>
          <div className="flex-1 h-full">

          </div>
        </div>
        <div className="h-full flex-shrink-0 flex flex-col" style={{ minWidth: 390, maxWidth: 440 }}>
          <OngoingActivitiesCard />
          <div className="mt-16">

          </div>
          <div className="mt-24">

          </div>
          <div className="mt-32">

            </div>
        </div>
      </div>
    </div>
  );
}