import React, {useState} from "react";
import {Users, Star, CheckCircle, XCircle, ArrowUp, ArrowDown, Search, Bell } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, PieChart, Pie, Cell } from "recharts";

const cardGradient = "bg-[linear-gradient(180deg,white_60%,#e0f2fe_100%)]";

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

function ApplicationsBarChartCard() {
  const data = [
    { date: "13 May", Applied: 300, Shortlisted: 200 },
    { date: "14 May", Applied: 300, Shortlisted: 175 },
    { date: "15 May", Applied: 300, Shortlisted: 150 },
    { date: "16 May", Applied: 300, Shortlisted: 100 },
    { date: "17 May", Applied: 300, Shortlisted: 150 },
    { date: "18 May", Applied: 300, Shortlisted: 175 },
    { date: "19 May", Applied: 300, Shortlisted: 200 },
    { date: "20 May", Applied: 300, Shortlisted: 175 },
    { date: "21 May", Applied: 300, Shortlisted: 150 },
  ];

  return (
    <div className="rounded-3xl shadow-md p-8 mt-8 bg-white" style={{ boxShadow: "0 8px 24px 0 rgba(0,0,0,0.06)", background: "linear-gradient(180deg,white 60%,#e0f2fe 100%)"}}>
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-2xl font-bold text-[#181C32]">Applications</h2>
        <select className="rounded-xl border border-gray-300 px-4 py-2 text-lg font-medium text-gray-700 focus:outline-none">
          <option>13th-21th may</option>
        </select>
      </div>
      <hr className="mb-6 border-gray-200" />
      <div className="flex items-center gap-8 mb-4">
        <div className="flex items-center gap-3">
          <span className="inline-block w-5 h-5 rounded-full bg-[#5EC6EF]"></span>
          <span className="text-lg text-gray-600">Applied</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="inline-block w-5 h-5 rounded-full bg-[#43A36C]"></span>
          <span className="text-lg text-gray-600">Shortlisted</span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={320}>
        <BarChart data={data} barGap={0} barCategoryGap={20}>
          <XAxis dataKey="date" tick={{ fontSize: 16, fill: "#6B7280" }} axisLine={true} tickLine={true} />
          <YAxis
            tick={{ fontSize: 16, fill: "#6B7280" }}
            axisLine={true}
            tickLine={true}
            label={{
              value: "Number of Candidates",
              angle: -90,
              position: "insideLeft",
              offset: 10,
              fontSize: 14,
              fill: "#6B7280",
            }}
          />
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
          <Legend
            verticalAlign="top"
            align="right"
            iconType="circle"
            wrapperStyle={{ fontSize: 18, color: "#6B7280" }}
          />
          <Bar dataKey="Applied" stackId="a" fill="#5EC6EF" radius={[8, 8, 0, 0]} />
          <Bar dataKey="Shortlisted" stackId="b" fill="#43A36C" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
      <div className="flex justify-center mt-4">
        <span className="text-lg text-gray-600">Score Range</span>
      </div>
    </div>
  );
}

function TalentRecruitmentCard() {
  return (
    <div className="rounded-2xl bg-white shadow-lg p-6" style={{ width: 420, fontFamily: "Inter, sans-serif", border: "1px solid #F3F4F6", background: "linear-gradient(180deg,white 60%,#e0f2fe 100%)" }}>
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div>
          <div className="text-[28px] font-bold text-[#18181B]">Talent Recruitment</div>
          <div className="text-lg text-grey-600 mt-1">Hiring Statistics</div>
        </div>
        <button className="rounded-xl border border-[#E5E7EB] p-1">
          <svg width="28" height="28" fill="none" stroke="#18181B" strokeWidth="2" viewBox="0 0 24 24">
            <rect x="2" y="2" width="20" height="20" rx="6" stroke="#E5E7EB" strokeWidth="2" fill="#fff"/>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" stroke="#18181B" strokeWidth="2"/>
          </svg>
        </button>
      </div>
      <div className="border-b border-[#E5E7EB] mb-2"></div>
      {/* Top Row: Avatars and Ongoing */}
      <div className="flex items-center gap-4 mb-4">
        <img src="/images/People_5.png" alt="Candidate 1" className="w-12 h-12 rounded-full object-cover" />
        <img src="/images/People_6.png" alt="Candidate 2" className="w-12 h-12 rounded-full object-cover" />
        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#4CA6FF]">
          <span className="text-white font-semibold text-[10px]">ongoing</span>
        </div>
      </div>
      {/* Middle Row: Gauge and Chart */}
      <div className="flex gap-4">
        {/* Gauge */}
        <div className="flex flex-col items-center w-[48%]">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#2563EB] inline-block"></span>
            <span className="text-xs text-grey-600">Match</span>
            <span className="w-2 h-2 rounded-full bg-[#E5E7EB] inline-block ml-4"></span>
            <span className="text-xs text-grey-600 ">Not Match</span>
          </div>
          {/* Gauge SVG */}
          <svg width="120" height="80" viewBox="0 0 120 60">
            <path d="M10,50 A50,50 0 0,1 110,50" fill="none" stroke="#2563EB" strokeWidth="12" />
            <path d="M10,50 A50,50 0 0,1 110,50" fill="none" stroke="#E5E7EB" strokeWidth="12" strokeDasharray="60 60" strokeDashoffset="60"/>
            {/* Needle */}
            <line x1="60" y1="50" x2="80" y2="30" stroke="#18181B" strokeWidth="4" />
            <circle cx="60" cy="50" r="5" fill="#18181B" />
          </svg>
          <div className="flex justify-between w-full mt-2">
            <div className="text-[20px] font-bold text-[#18181B]">120</div>
            <div className="text-[20px] font-bold text-[#18181B]">80</div>
          </div>
          <div className="flex justify-between w-full text-xs text-grey-600 mt-1">
            <span>Total Students</span>
            <span>Screened</span>
          </div>
        </div>
        {/* Chart and Stats */}
        <div className="flex-1 flex flex-col justify-between ">
          <div>
            <div className="text-[15px] font-semibold text-[#18181B]">Average Time</div>
            <div className="text-[22px] font-bold text-[#18181B] mt-1">50 <span className="font-normal text-grey-600 text-[16px]">sec/per screening</span></div>
          </div>
          {/* Line Chart SVG */}
          <svg width="140" height="60" viewBox="0 0 140 60" className="mt-2">
            <defs>
              <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4CA6FF" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#fff" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            <polyline
              fill="url(#chartGradient)"
              stroke="#4CA6FF"
              strokeWidth="2"
              points="0,40 20,35 40,38 60,32 80,40 100,30 120,38 140,32"
            />
            <circle cx="100" cy="30" r="6" fill="#fff" stroke="#4CA6FF" strokeWidth="2" />
            <text x="100" y="25" fontSize="14" fontWeight="bold" fill="#4CA6FF">40</text>
          </svg>
          <div className="flex items-center justify-between mt-2">
            <div className="text-[12px] font-semibold text-[#18181B]">Set Daily Reminder</div>
            <label className="flex items-center cursor-pointer ml-2">
              <input type="checkbox" checked readOnly className="sr-only" />
              <span className="w-8 h-5 flex items-center bg-[#E5E7EB] rounded-full p-1">
                <span className="w-4 h-4 bg-[#4CA6FF] rounded-full transition"></span>
              </span>
            </label>
          </div>
          <div className="text-[10px] text-grey-600 mt-1">Reminder after you reached daily limit</div>
        </div>
      </div>
      {/* Bottom Row: Budget and Task Cards */}
      <div className="flex gap-2">
        {/* Recruitment Budget */}
        <div className="flex-1 bg-[#F8FAFC] rounded-xl p-4 shadow-sm" style={{ minWidth: 0 }}>
          <div className="text-[15px] font-semibold text-[#18181B] mb-2">Recruitment Budget</div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-grey-600">Available</span>
            <span className="text-[17px] font-bold text-[#18181B]">$80k</span>
            <svg width="18" height="18" fill="none" stroke="#A0AEC0" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="8" stroke="#A0AEC0" strokeWidth="2" fill="#fff"/>
              <path d="M12 8v4l3 3" stroke="#A0AEC0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <svg width="100%" height="32" viewBox="0 0 120 32">
            <polyline fill="none" stroke="#4CA6FF" strokeWidth="2" points="0,28 20,20 40,24 60,16 80,22 100,12 120,18" />
          </svg>
          <div className="flex items-center justify-between mt-2">
            <span className="text-xs text-grey-600">Used</span>
            <span className="text-[17px] font-bold text-[#18181B]">$20</span>
            <svg width="18" height="18" fill="none" stroke="#A0AEC0" strokeWidth="2" viewBox="0 0 24 24">
              <rect x="6" y="8" width="12" height="8" rx="2" stroke="#A0AEC0" strokeWidth="2" fill="#fff"/>
              <path d="M12 12v2" stroke="#A0AEC0" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <svg width="100%" height="32" viewBox="0 0 120 32">
            <polyline fill="none" stroke="#FFA14A" strokeWidth="2" points="0,28 20,24 40,26 60,20 80,26 100,18 120,22" />
          </svg>
        </div>
        {/* Task Card */}
        <div className="flex-1 bg-[#F8FAFC] rounded-xl p-4 shadow-sm" style={{ minWidth: 0 }}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-[15px] font-semibold text-[#18181B]">Task</span>
            <svg width="44" height="44" viewBox="0 0 32 32">
              <circle cx="16" cy="16" r="14" fill="#E5E7EB" />
              <path d="M16 6 A10 10 0 1 1 6 16" stroke="#4CA6FF" strokeWidth="4" fill="none" />
              <path d="M16 6 A10 10 0 0 1 26 16" stroke="#FFA14A" strokeWidth="4" fill="none" />
            </svg>
          </div>
          <div className="flex items-center mb-2">
            <span className="text-[28px] font-bold text-[#18181B] mr-2">232</span>
            <svg width="18" height="18" fill="none" stroke="#A0AEC0" strokeWidth="2" viewBox="0 0 24 24">
              <rect x="4" y="4" width="16" height="16" rx="4" stroke="#A0AEC0" strokeWidth="2" fill="#fff"/>
              <path d="M8 12h8" stroke="#A0AEC0" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="text-[14px] text-[#FFA14A] font-semibold mb-1">Updated 22/03</div>
          <div className="flex flex-wrap gap-2 text-xs mt-2">
            <span className="text-[#2563EB] font-semibold">• Completed</span>
            <span className="text-[#A0AEC0] font-semibold">• Pending</span>
            <span className="text-[#4CA6FF] font-semibold">• In progress</span>
            <span className="text-[#FFA14A] font-semibold">• Overdue</span>
          </div>
        </div>
        </div>
        </div>
  );
}
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

{/*}
const jobs = [
  {
    title: "Back-End Developer",
    expires: "May 21, 2024",
    newCandidates: 16,
    totalCandidates: 40,
    tags: [
      { label: "Development", color: "bg-blue-100 text-blue-600" },
      { label: "Full Time", color: "bg-gray-100 text-gray-500" },
      { label: "On-Site", color: "bg-gray-100 text-gray-500" },
    ],
  },
  {
    title: "UX/ UI Designer",
    expires: "May 21, 2024",
    newCandidates: 8,
    totalCandidates: 30,
    tags: [
      { label: "Designing", color: "bg-blue-100 text-blue-600" },
      { label: "Full Time", color: "bg-gray-100 text-gray-500" },
      { label: "On-Site", color: "bg-gray-100 text-gray-500" },
    ],
  },
  {
    title: "Front-End Developer",
    expires: "May 21, 2024",
    newCandidates: 10,
    totalCandidates: 25,
    tags: [
      { label: "Development", color: "bg-blue-100 text-blue-600" },
      { label: "Full Time", color: "bg-gray-100 text-gray-500" },
      { label: "On-Site", color: "bg-gray-100 text-gray-500" },
    ],
  },
];

function JobListCard() {
  return (
    <div className={`rounded-3xl shadow-md p-8 mt-8 ${cardGradient}`} style={{ boxShadow: "0 8px 24px 0 rgba(0,0,0,0.06)" }}>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-[#181C32]">Job List</h2>
        <button className="flex items-center gap-2 border border-gray-200 px-2 py-1 rounded-2xl text-xl font-medium shadow-sm hover:bg-gray-50 transition">
          See All
          <svg className="w-6 h-6" fill="none" stroke="#181C32" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
      <div className="flex gap-2 justify-between">
        {jobs.map((job, idx) => (
          <div
            key={idx}
            className="flex-1 bg-white rounded-2xl border border-gray-300 px-8 py-8 shadow-sm transition hover:shadow-lg"
            style={{ minWidth: 350, maxWidth: 420, borderRadius: "32px" }}
          >
            <div className="mb-4">
              <span className="inline-block bg-gray-100 text-gray-500 text-base font-medium px-2 py-1 rounded-xl mb-2">
                Expires On : {job.expires}
              </span>
            </div>
            <div className="text-xl font-bold text-[#181C32] mb-4">{job.title}</div>
            <div className="flex items-center gap-6 mb-6">
              <span className="text-blue-600 text-lg font-bold">{job.newCandidates}</span>
              <span className="text-sm font-medium text-[#181C32]">New Candidates</span>
              <span className="text-gray-300 text-lg font-bold">|</span>
              <span className="text-blue-600 text-lg font-bold">{job.totalCandidates}</span>
              <span className="text-sm font-medium text-[#181C32]">Total Candidates</span>
            </div>
            <div className="flex gap-3 mt-2">
              {job.tags.map((tag, i) => (
                <span
                  key={i}
                  className={`px-2 py-1 rounded-2xl text-lg font-medium ${tag.color} border border-gray-200`}
                >
                  {tag.label}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
  */}


function ApplicationByDepartmentCard() {
  return (
    <div className={`rounded-3xl shadow-md p-8 flex-1 max-w-[420px] relative overflow-hidden max-h-[525px] ${cardGradient}`} style={{ boxShadow: "0 8px 24px 0 rgba(0,0,0,0.06)" }}>
      <h2 className="text-2xl font-bold text-[#181C32] mb-6">Application By Department</h2>
      <hr className="mb-8 border-gray-200" />
      <div className="flex justify-center items-center h-[420px] relative">
        {/* Pie Chart SVG */}
        <svg width="340" height="340" viewBox="0 0 340 340" className="z-10">
          {/* Marketing - 40% */}
          <path d="M170,170 L170,40 A130,130 0 0,1 295.6,110.6 Z" fill="#FF5C7C" />
          {/* Engineering - 30% */}
          <path d="M170,170 L295.6,110.6 A130,130 0 0,1 170,300 Z" fill="#19D3A2" />
          {/* Sales - 20% */}
          <path d="M170,170 L170,300 A130,130 0 0,1 54.4,209.4 Z" fill="#4CC9F0" />
          {/* Customer Support - 10% */}
          <path d="M170,170 L54.4,209.4 A130,130 0 0,1 170,40 Z" fill="#FFA14A" />
          {/* Percentages */}
          <text x="220" y="110" textAnchor="middle" fontSize="28" fontWeight="bold" fill="#181C32">10%</text>
          <text x="240" y="220" textAnchor="middle" fontSize="28" fontWeight="bold" fill="#181C32">40%</text>
          <text x="130" y="240" textAnchor="middle" fontSize="28" fontWeight="bold" fill="#181C32">20%</text>
          <text x="110" y="120" textAnchor="middle" fontSize="28" fontWeight="bold" fill="#181C32">30%</text>
        </svg>
        {/* Labels with lines */}
        <svg width="380" height="340" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20" style={{ overflow: "visible" }}>
          {/* Customer Support */}
          <line x1="100" y1="100" x2="20" y2="70" stroke="#FFA14A" strokeWidth="2"/>
          <text x="0" y="65" fill="black" fontSize="20" fontWeight="600">Engineering</text>
          {/* Sales */}
          <line x1="240" y1="180" x2="28" y2="230" stroke="#4CC9F0" strokeWidth="2"/>
          <text x="0" y="255" fill="black" fontSize="20" fontWeight="600">Sales</text>
          {/* Engineering */}
          <line x1="200" y1="290" x2="250" y2="330" stroke="#19D3A2" strokeWidth="2"/>
          <text x="255" y="345" fill="black" fontSize="20" fontWeight="600">Marketing</text>
          {/* Marketing */}
          <line x1="275" y1="120" x2="320" y2="40" stroke="#FF5C7C" strokeWidth="2"/>
          <text x="240" y="40" fill="black" fontSize="20" fontWeight="600">Contact Support</text>
        </svg>
      </div>
    </div>
  );
}

const resourceData = [
  { name: "Agencies", value: 20, color: "#FFA14A" },
  { name: "Social Media Campaigns", value: 15, color: "#FF5C7C" },
  { name: "Job Boards", value: 35, color: "#19D3A2" },
  { name: "Referrals", value: 30, color: "#4CC9F0" },
];

function ApplicationResourcesCard() {
  // Colors as per screenshot
  const barColors = {
    "Job Boards": "#9B8AFB",
    "Referrals": "#F7D083",
    "Agencies": "#D7FF8F",
    "Social Media Campaigns": "#FF5C7C",
  };
  const barData = [
    { name: "Job Boards", value: 35, color: barColors["Job Boards"] },
    { name: "Referrals", value: 30, color: barColors["Referrals"] },
    { name: "Agencies", value: 20, color: barColors["Agencies"] },
    { name: "Social Media Campaigns", value: 15, color: barColors["Social Media Campaigns"] },
  ];

  return (
    <div className="rounded-3xl shadow-md p-8 flex-1 max-w-[420px] relative overflow-hidden bg-white max-h-[525px]" style={{ boxShadow: "0 8px 24px 0 rgba(0,0,0,0.06), ", background: "linear-gradient(180deg,white 60%,#e0f2fe 100%)" }}>
      <h2 className="text-2xl font-bold text-[#181C32]">Applicants</h2>
      <hr className="mb-8 border-gray-200" />
      {/* Donut Chart */}
      <div className="flex flex-col items-center mb-10">
          <svg width="260" height="180" viewBox="0 0 260 180">
          {/* Background Circle */}
          <circle cx="140" cy="90" r="80" fill="none" stroke="#E2E8F0" strokeWidth="18" />

          {/* Job Boards */}
          <path
            d="M140,10
              A80,80 0 0,1 220,90"
            stroke="#9B8AFB"
            strokeWidth="18"
            fill="none"
            strokeLinecap="round"
          />

          {/* Referrals */}
          <path
            d="M220,90
              A80,80 0 0,1 148,168"
            stroke="#F7D083"
            strokeWidth="18"
            fill="none"
            strokeLinecap="round"
          />

          {/* Agencies */}
          <path
            d="M148,168
              A80,80 0 0,1 60,90"
            stroke="#D7FF8F"
            strokeWidth="18"
            fill="none"
            strokeLinecap="round"
          />

          {/* Social Media Campaigns */}
          <path
            d="M60,90
              A80,80 0 0,1 140,10"
            stroke="#FF5C7C"
            strokeWidth="18"
            fill="none"
            strokeLinecap="round"
          />

          {/* Center Text */}
          <text x="140" y="85" textAnchor="middle" fontSize="16" fill="grey" fontWeight="600">
            Total Applicants
          </text>
          <text x="140" y="120" textAnchor="middle" fontSize="24" fill="#181C32" fontWeight="bold">
            =1000
          </text>
          </svg>
        </div>

      {/* Resource Distribution Bars */}
      <div className="space-y-6">
        {barData.map((bar) => (
          <div key={bar.name}>
            <div className="flex items-center justify-between text-[20px] font-medium mb-1">
              <span className="text-[#18181B]">{bar.name}</span>
              <span className="text-[#18181B]">{bar.value}%</span>
            </div>
            <div className="w-full h-3 rounded-full bg-gray-200">
              <div
                className="h-3 rounded-full"
                style={{
                  width: `${bar.value}%`,
                  background: bar.color,
                  transition: "width 0.6s",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DashboardHeader() {
  return (
    <header className="flex items-center justify-between mb-10">
      {/* Logo */}
      <div className="text-2xl font-bold text-gray-900">Dashboard</div>
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
      style={{ background: bg, minWidth: 240, maxHeight: 135, boxShadow: "0 8px 24px 0 rgba(0,0,0,0.06)" }}
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
            width: 60,
            height: 60,
            minWidth: 60,
            minHeight: 60,
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


// Schedule Card

function ScheduleCard() {
  const schedule = [
    {
      name: "John Smith",
      role: "Front-end Developer",
      time: "9:30 AM (45 min)",
      status: 50,
      attendees: 3,
      avatar: "/images/People_1.png",
    },
    {
      name: "Sarah Johnson",
      role: "UX Designer",
      time: "10:30 AM (45 min)",
      status: 75,
      attendees: 4,
      avatar: "/images/People_2.png",
    },
    {
      name: "Mike Davis",
      role: "Senior Manager",
      time: "11:30 AM (45 min)",
      status: 50,
      attendees: 1,
      avatar: "/images/People_3.png",
    },
  ];

  return (
    <div className={`rounded-2xl shadow-md p-4 flex-1 flex flex-col justify-between min-h-[280px] ${cardGradient}`}>
      <div className="flex justify-between items-center mb-8">
        <h2 className="font-bold text-2xl text-[#181C32]">Schedule</h2>
        <button className="flex items-center gap-2 border border-gray-200 px-4 py-1 rounded-2xl text-lg font-medium shadow-sm hover:bg-gray-50 transition">
          See All
          {/*<svg className="w-4 h-4" fill="none" stroke="#181C32" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>*/}
        </button>
      </div>
      <div className="border-b border-[#E5E7EB] mb-8"></div>
      <div className="divide-y divide-gray-100">
        {schedule.map((item, idx) => (
          <div key={idx} className="flex items-center py-1 gap-8">
            {/* Avatar and Name */}
            <div className="flex items-center gap-5 min-w-[260px]">
              <img src={item.avatar} alt={item.name} className="w-14 h-14 rounded-full object-cover" />
              <div>
                <div className="text-xl text-[#181C32]">{item.name}</div>
                <div className="text-lg text-gray-600">{item.role}</div>
              </div>
            </div>
            {/* Interview Start */}
            <div className="flex flex-col min-w-[220px]">
              <span className="text-lg text-grey-600 mb-1">Interview Start</span>
              <span className="text-sm text-[#181C32]">{item.time}</span>
            </div>
            {/* Status */}
            <div className="flex flex-col min-w-[200px]">
              <span className="text-lg text-[#454A54] mb-1">Status</span>
              <div className="flex items-center gap-2 mb-1">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 w-8 rounded-md ${i < Math.round(item.status / 25) ? "bg-blue-500" : "bg-gray-200"}`}
                  />
                ))}
              </div>
              <span className="text-sm text-[#181C32] font-medium">{item.status}%</span>
            </div>
            {/* Attendees */}
            <div className="flex flex-col min-w-[180px] items-start">
              <div className="flex items-center gap-2 mb-1">
                <div className="flex -space-x-3">
                  {[...Array(Math.min(item.attendees, 2))].map((_, i) => (
                    <img
                      key={i}
                      src={item.avatar}
                      alt="Attendee"
                      className="w-10 h-10 rounded-full border-2 border-white object-cover"
                    />
                  ))}
                </div>
                <span className="text-lg text-[#181C32] ml-2">Attendees</span>
              </div>
              <span className="text-sm text-black-400 font-medium">
                {item.attendees > 1 ? `+${item.attendees - 1} more` : "1"}
              </span>
            </div>
          </div>
        ))}
      </div>
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

// Main Dashboard Layout

export default function DashboardPage() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <DashboardHeader />
      <div className="flex gap-4 mb-8">
        <div className="flex flex-col flex-1 gap-12">
          <KpiCardsRow />
          <div className="flex-1 h-full">
            <ScheduleCard />
          </div>
          <div className="flex-1 h-full">
            <ApplicationsBarChartCard />
          </div>
          <div className="flex-1 h-full">
            <RecentApplicationsCard />
          </div>
          <div className="flex-1 h-full">
            <JobListsTableCard />
          </div>
        </div>
        <div className="h-full flex-shrink-0 flex flex-col" style={{ minWidth: 390, maxWidth: 440 }}>
          <TalentRecruitmentCard />
          <div className="mt-16">
            <ApplicationByDepartmentCard />
          </div>
          <div className="mt-24">
            <ApplicationResourcesCard />
          </div>
          <div className="mt-32">
            <OngoingActivitiesCard />
            </div>
        </div>
      </div>
    </div>
  );
}