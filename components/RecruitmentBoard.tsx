import React, {useState} from "react";
import {Users, Star, CheckCircle, XCircle, ArrowUp, ArrowDown, Search, Bell } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, PieChart, Pie, Cell, CartesianGrid } from "recharts";

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
        <h2 className="text-2xl font-bold text-[#181C32]">Recent Applications</h2>
        <div className="flex gap-4">
          <select
            className="rounded-2xl border border-gray-200 px-4 py-2 text-lg font-medium text-gray-700 focus:outline-none"
            value={selectedStage}
            onChange={e => setSelectedStage(e.target.value)}
          >
            {stageOptions.map(stage => (
              <option key={stage}>{stage}</option>
            ))}
          </select>
          <select
            className="rounded-2xl border border-gray-200 px-4 py-2 text-lg font-medium text-gray-700 focus:outline-none"
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
          className="w-full rounded-xl border border-gray-200 py-2 px-4 text-xl text-gray-400 font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-100 transition"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      <div className="mb-2 text-lg font-semibold text-gray-500">Total Candidates = 25</div>
      <div className="border-b border-gray-200 mb-2"></div>
      <div className="flex px-2 py-2 text-gray-600  text-lg">
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
                <div className="text-sxl text-gray-600 font-medium">{c.email}</div>
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
            <div className="w-[20%] text-lg text-gray-600">{c.applied}</div>
            {/* Role */}
            <div className="w-[17%] text-lg text-gray-600 font-medium">{c.role}</div>
          </div>
        ))}
      </div>
    </div>
  );
}


function JobListsTableCard() {
  const jobs = [
    {
      title: "Back-end Developer",
      newCandidates: 16,
      totalCandidates: 40,
      expires: "Dec 15, 2024",
      type: "Remote, On-site",
      badgeColor: "bg-blue-100 text-blue-600",
    },
    {
      title: "UX/UI Designer",
      newCandidates: 12,
      totalCandidates: 32,
      expires: "Dec 14, 2024",
      type: "On-site, Hybrid",
      badgeColor: "bg-yellow-100 text-yellow-700",
    },
    {
      title: "Front - end Developer",
      newCandidates: 10,
      totalCandidates: 24,
      expires: "Dec 13, 2024",
      type: "Remote",
      badgeColor: "bg-green-100 text-green-700",
    },
    {
      title: "Sales Manager",
      newCandidates: 8,
      totalCandidates: 32,
      expires: "Dec 13, 2024",
      type: "Remote",
      badgeColor: "bg-red-100 text-red-500",
    },
    {
      title: "Senior Manager",
      newCandidates: 6,
      totalCandidates: 22,
      expires: "Dec 13, 2024",
      type: "Remote",
      badgeColor: "bg-yellow-100 text-yellow-700",
    },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-md p-4 mt-8" style={{ boxShadow: "0 8px 24px 0 rgba(0,0,0,0.06)", background: "linear-gradient(180deg,white 60%,#e0f2fe 100%)" }}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-[#181C32]">Job Lists</h2>
        <button className="rounded-xl border border-gray-300 px-4 py-2 text-lg font-medium text-gray-700 flex items-center gap-2">
          See All
          <svg width="20" height="20" fill="none" stroke="#181C32" strokeWidth="2" viewBox="0 0 24 24">
            <rect x="2" y="2" width="20" height="20" rx="6" stroke="#E5E7EB" strokeWidth="2" fill="#fff"/>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" stroke="#18181B" strokeWidth="2"/>
          </svg>
        </button>
      </div>
      <input
        type="text"
        placeholder="Search Jobs..."
        className="w-full rounded-xl border border-gray-200 py-2 px-4 text-lg text-gray-400 font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-100 transition mb-4"
      />
      <div className="mb-2 text-lg font-semibold text-gray-500">Total Jobs = 12</div>
      <div className="border-b border-gray-200 mb-2"></div>
      <div className="flex px-2 py-2 text-gray-600 text-sm ">
        <div className="w-[28%]">Jobs</div>
        <div className="w-[15%]">New Candidates</div>
        <div className="w-[17%]">Total Candidates</div>
        <div className="w-[20%]">Expires on :</div>
        <div className="w-[20%]">Type</div>
      </div>
      <div>
        {jobs.map((job, idx) => (
          <div key={idx} className="flex items-center py-6 border-b last:border-b-0 border-gray-100">
            {/* Job Title */}
            <div className="w-[28%] text-lg  text-[#181C32]">{job.title}</div>
            {/* New Candidates */}
            <div className="w-[15%] text-lg text-[#18181B] ">{job.newCandidates}</div>
            {/* Total Candidates */}
            <div className="w-[17%]">
              <span className={`px-4 py-2 rounded-full font-semibold text-lg ${job.badgeColor}`}>
                {job.totalCandidates}
              </span>
            </div>
            {/* Expires On */}
            <div className="w-[20%] text-sxl text-gray-600">{job.expires}</div>
            {/* Type */}
            <div className="w-[20%] text-sxl text-gray-600">{job.type}</div>
          </div>
        ))}
      </div>
    </div>
  );
}


function ScoreDistributionCard() {
  const data = [
    { range: "0-20", Candidates: 50 },
    { range: "21-30", Candidates: 120 },
    { range: "31-40", Candidates: 200 },
    { range: "41-50", Candidates: 220 },
    { range: "51-60", Candidates: 250 },
    { range: "61-70", Candidates: 230 },
    { range: "71-80", Candidates: 300 },
    { range: "81-90", Candidates: 160 },
    { range: "91-100", Candidates: 80 },
  ];

  return (
    <div className="rounded-3xl shadow-md p-4 bg-white mt-1" style={{ boxShadow: "0 8px 24px 0 rgba(0,0,0,0.06)", background: "linear-gradient(180deg,white 60%,#e0f2fe 100%)" }}>
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-2xl font-bold text-[#181C32]">Score Distribution</h2>
        <div className="flex items-center gap-2">
          <span className="inline-block w-5 h-5 rounded-full bg-[#43A36C]"></span>
          <span className="text-sm text-gray-600">Candidates</span>
        </div>
      </div>
      <hr className="mb-6 border-gray-200" />
      <ResponsiveContainer width="100%" height={320}>
        <BarChart data={data} barGap={0} barCategoryGap={20}>
          <XAxis dataKey="range" tick={{ fontSize: 16, fill: "#18181B" }} axisLine={true} tickLine={true} />
          <YAxis
              tick={{ fontSize: 16, fill: "#18181B" }}
              axisLine={true}
              tickLine={true}
              label={{
                value: "Number of Candidates",
                angle: -90,
                position: "insideRight", // <-- Correct casing!
                offset: 40,
                fontSize: 14,
                fill: "#18181B",
              }}
            />
            <CartesianGrid stroke="#E5E7EB" strokeDasharray="3 3" horizontal={true} vertical={false} />
            <Tooltip
              cursor={{ fill: "#F3F4F6" }}
              contentStyle={{
                borderRadius: 16,
                background: "#fff",
                fontSize: 16,
                color: "#181C32",
                boxShadow: "0 8px 24px 0 rgba(0,0,0,0.06)",
              }}
            />
          <Bar dataKey="Candidates" fill="#43A36C" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
      <div className="flex justify-center mt-4">
        <span className="text-lg text-gray-600 font-semibold">Score Range</span>
      </div>
    </div>
  );
}


function DashboardHeader() {
  return (
    <header className="flex items-center justify-between mb-10">
      {/* Logo */}
      <div className="text-2xl text-black-600">Recruitment</div>
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
      title: "Mike Davis",
      subtitle: "Product Manager",
      date: "95",
    },
    {
      icon: <span className="bg-purple-700 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">2</span>,
      title: "John Smith",
      subtitle: "Senior Developer",
      date: "92",
    },
    {
      icon: <span className="bg-blue-700 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">3</span>,
      title: "Sarah Johnson",
      subtitle: "UX Designer",
      date: "88",
    },
    {
      icon: <span className="bg-gray-300 text-gray-700 rounded-full w-10 h-10 flex items-center justify-center font-bold">4</span>,
      title: "Emma Wilson",
      subtitle: "Data Analyst",
      date: "85",
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
            <div className="text-black font-bold text-xl">{item.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default function RecruitmentBoard() {
  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <DashboardHeader />
      <div className="flex gap-4 mb-8">
        <div className="flex flex-col flex-1 gap-8">
          <KpiCardsRow />
          <div className="flex-1 h-full">
            <ScoreDistributionCard />
          </div>
        </div>
        <div className="h-full flex-shrink-0 flex flex-col" style={{ minWidth: 390, maxWidth: 440 }}>
          <OngoingActivitiesCard />
        </div>
      </div>
      <JobListsTableCard />
      <RecentApplicationsCard />
    </div>
  );
}