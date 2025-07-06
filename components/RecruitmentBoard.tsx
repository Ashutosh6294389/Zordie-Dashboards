"use client";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  Legend,
} from "recharts";
import React, {useState} from "react";
import { Search } from "lucide-react";


const glass = "backdrop-blur-lg bg-white/60 shadow-2xl border border-white/30";
const animateCard = "transition-transform duration-500 hover:scale-[1.025] hover:shadow-2xl";

const applicantsData = [
  {
    id: 1,
    name: "Michael Chen",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    score: 92,
    stage: "Shortlist",
    stageColor: "bg-blue-400",
    stageBar: [true, false, false, false, false],
    date: "June 10, 2025",
    position: "software developer",
    checked: false,
  },
  {
    id: 2,
    name: "Savannah Nguyen",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    score: 75,
    stage: "Interview",
    stageColor: "bg-red-400",
    stageBar: [true, true, false, false, false],
    date: "June 11, 2025",
    position: "Operations Manager",
    checked: false,
  },
  {
    id: 3,
    name: "Darlene Robertson",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    score: 82,
    stage: "New Applied",
    stageColor: "bg-yellow-400",
    stageBar: [true, false, false, false, false],
    date: "June 12, 2025",
    position: "Business Analyst",
    checked: false,
  },
  {
    id: 4,
    name: "Leslie Alexander",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    score: 86,
    stage: "Test",
    stageColor: "bg-blue-600",
    stageBar: [true, true, true, false, false],
    date: "June 13, 2025",
    position: "Project Coordinator",
    checked: false,
  },
  {
    id: 5,
    name: "Albert Flores",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    score: 91,
    stage: "Design Chalange",
    stageColor: "bg-green-400",
    stageBar: [true, true, true, true, true],
    date: "June 13, 2025",
    position: "Ui/ux designer",
    checked: false,
  },
  {
    id: 6,
    name: "Dianne Russell",
    avatar: "https://randomuser.me/api/portraits/women/47.jpg",
    score: 72,
    stage: "Shortlist",
    stageColor: "bg-blue-400",
    stageBar: [true, false, false, false, false],
    date: "June 14, 2025",
    position: "SEO Analyst",
    checked: false,
  },
  {
    id: 7,
    name: "Robert Fox",
    avatar: "https://randomuser.me/api/portraits/men/48.jpg",
    score: 85,
    stage: "Interview",
    stageColor: "bg-red-400",
    stageBar: [true, true, false, false, false],
    date: "June 14, 2025",
    position: "Business Analyst",
    checked: false,
  },
  {
    id: 8,
    name: "Leslie Alexander",
    avatar: "https://randomuser.me/api/portraits/men/49.jpg",
    score: 83,
    stage: "Shortlist",
    stageColor: "bg-blue-400",
    stageBar: [true, false, false, false, false],
    date: "June 14, 2025",
    position: "Project Coordinator",
    checked: false,
  },
  {
    id: 9,
    name: "Darrell Steward",
    avatar: "https://randomuser.me/api/portraits/men/50.jpg",
    score: 84,
    stage: "Design Chalange",
    stageColor: "bg-green-400",
    stageBar: [true, true, true, true, true],
    date: "June 15, 2025",
    position: "QA Automation Tester",
    checked: false,
  },
  {
    id: 10,
    name: "Arlene McCoy",
    avatar: "https://randomuser.me/api/portraits/women/51.jpg",
    score: 85,
    stage: "Shortlist",
    stageColor: "bg-red-400",
    stageBar: [true, true, false, false, false],
    date: "June 15, 2025",
    position: "DevOps Engineer",
    checked: false,
  },
];

const stageColors = {
  "Shortlist": "bg-blue-400",
  "Interview": "bg-red-400",
  "New Applied": "bg-yellow-400",
  "Test": "bg-blue-600",
  "Design Chalange": "bg-green-400",
};

const stageBarMap = {
  "New Applied": [true, false, false, false, false],
  "Shortlist": [true, true, false, false, false],
  "Interview": [true, true, true, false, false],
  "Test": [true, true, true, true, false],
  "Design Chalange": [true, true, true, true, true],
};

function StageBar({ stage }) {
  const bar = stageBarMap[stage] || [false, false, false, false, false];
  const color = stageColors[stage] || "bg-gray-200";
  return (
    <div className="flex gap-1 ml-2">
      {bar.map((active, idx) => (
        <div
          key={idx}
          className={`w-4 h-2 rounded ${active ? color : "bg-gray-200"}`}
        />
      ))}
    </div>
  );
}

function ApplicantsList() {
  const [data, setData] = useState(applicantsData);
  const [selectAll, setSelectAll] = useState(false);
  const [sortField, setSortField] = useState<null | string>(null);
  const [sortAsc, setSortAsc] = useState(true);
  const [sortMenuOpen, setSortMenuOpen] = useState(false);

  // Handle select all
  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setData(data.map((item) => ({ ...item, checked: !selectAll })));
  };

  // Handle select one
  const handleSelectOne = (id: number) => {
    setData(data.map((item) => item.id === id ? { ...item, checked: !item.checked } : item));
  };

  // Handle sorting
  const handleSort = (field: string) => {
    let sorted = [...data];
    let asc = sortAsc;
    if (sortField === field) {
      asc = !asc;
      setSortAsc(asc);
    } else {
      setSortField(field);
      setSortAsc(true);
      asc = true;
    }
    sorted.sort((a, b) => {
      if (field === "name") {
        return asc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
      }
      if (field === "score") {
        return asc ? a.score - b.score : b.score - a.score;
      }
      if (field === "stage") {
        return asc ? a.stage.localeCompare(b.stage) : b.stage.localeCompare(a.stage);
      }
      if (field === "date") {
        return asc ? new Date(a.date).getTime() - new Date(b.date).getTime() : new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      if (field === "position") {
        return asc ? a.position.localeCompare(b.position) : b.position.localeCompare(a.position);
      }
      return 0;
    });
    setData(sorted);
    setSortMenuOpen(false);
  };

  return (
    <div className={`${glass} ${animateCard} bg-white rounded-2xl shadow-md p-8 mt-10 relative`}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-1">All Applicants list</h2>
          <div className="flex items-center gap-3">
            <span className="text-lg text-gray-500 font-semibold">Total Candidates</span>
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-lg font-bold text-lg">{data.length}</span>
          </div>
        </div>
        <div className="relative">
          <button
            className="flex items-center gap-2 px-4 py-2 border rounded-lg text-gray-400 font-semibold cursor-pointer hover:bg-gray-100"
            onClick={() => setSortMenuOpen((open) => !open)}
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth={2} className="text-gray-400">
              <circle cx="9" cy="9" r="7" />
              <path d="M15 15l4 4" />
            </svg>
            Sort by
          </button>
          {sortMenuOpen && (
            <div className="absolute right-0 mt-2 w-44 bg-white rounded-lg shadow-lg border z-10">
              <button
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                onClick={() => handleSort("name")}
              >
                Candidate Name {sortField === "name" && (sortAsc ? "↑" : "↓")}
              </button>
              <button
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                onClick={() => handleSort("score")}
              >
                Scores {sortField === "score" && (sortAsc ? "↑" : "↓")}
              </button>
              <button
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                onClick={() => handleSort("stage")}
              >
                Stages {sortField === "stage" && (sortAsc ? "↑" : "↓")}
              </button>
              <button
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                onClick={() => handleSort("date")}
              >
                Applied date {sortField === "date" && (sortAsc ? "↑" : "↓")}
              </button>
              <button
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                onClick={() => handleSort("position")}
              >
                Applied for {sortField === "position" && (sortAsc ? "↑" : "↓")}
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="px-2 py-3">
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={handleSelectAll}
                  className="w-4 h-4"
                />
              </th>
              <th className="px-2 py-3 cursor-pointer select-none" onClick={() => handleSort("name")}>
                Candidate Name {sortField === "name" && (sortAsc ? "↑" : "↓")}
              </th>
              <th className="px-2 py-3 cursor-pointer select-none" onClick={() => handleSort("score")}>
                Scores {sortField === "score" && (sortAsc ? "↑" : "↓")}
              </th>
              <th className="px-2 py-3 cursor-pointer select-none" onClick={() => handleSort("stage")}>
                Stages {sortField === "stage" && (sortAsc ? "↑" : "↓")}
              </th>
              <th className="px-2 py-3 cursor-pointer select-none" onClick={() => handleSort("date")}>
                Applied date {sortField === "date" && (sortAsc ? "↑" : "↓")}
              </th>
              <th className="px-2 py-3 cursor-pointer select-none" onClick={() => handleSort("position")}>
                Applied for {sortField === "position" && (sortAsc ? "↑" : "↓")}
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((applicant) => (
              <tr key={applicant.id} className="border-b hover:bg-gray-50">
                <td className="px-2 py-3">
                  <input
                    type="checkbox"
                    checked={!!applicant.checked}
                    onChange={() => handleSelectOne(applicant.id)}
                    className="w-4 h-4"
                  />
                </td>
                <td className="px-2 py-3 flex items-center gap-3">
                  <img src={applicant.avatar} alt={applicant.name} className="w-8 h-8 rounded-full" />
                  <span className="font-semibold">{applicant.name}</span>
                </td>
                <td className="px-2 py-3">{applicant.score}</td>
                <td className="px-2 py-3 flex items-center">
                  <span className="font-semibold">{applicant.stage}</span>
                  <StageBar stage={applicant.stage} />
                </td>
                <td className="px-2 py-3">{applicant.date}</td>
                <td className="px-2 py-3">{applicant.position}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Sample data for the two charts
const applicationOutcomesData = [
  { stage: "Applied", value: 1534 },
  { stage: "Shortlisted", value: 900 },
  { stage: "Interviewed", value: 1000 },
  { stage: "Hired", value: 700 },
  { stage: "Rejected", value: 1000 },
  { stage: "On Hold", value: 1100 },
];

const comparisonData = [
  { metric: "Skills Score", Candidate1: 75, Candidate2: 120 },
  { metric: "Technical Test", Candidate1: 180, Candidate2: 320 },
  { metric: "Soft Skills", Candidate1: 90, Candidate2: 180 },
  { metric: "Cultural Fit", Candidate1: 390, Candidate2: 90 },
  { metric: "Resume Quality", Candidate1: 260, Candidate2: 90 },
];


function AnalyticsGraphCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
      {/* Application Outcomes Overview */}
      <div className={`${glass} ${animateCard} bg-white rounded-2xl shadow-md p-8 flex flex-col`}>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Application Outcomes Overview</h2>
        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={applicationOutcomesData}>
            <XAxis dataKey="stage" tick={{ fontSize: 14 }} />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#5B6BFF" radius={[8, 8, 0, 0]} barSize={48} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      {/* Comparison */}
      <div className={`${glass} ${animateCard} bg-white rounded-2xl shadow-md p-8 flex flex-col`}>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Comparison</h2>
        <ResponsiveContainer width="100%" height={320}>
          <LineChart data={comparisonData}>
            <XAxis dataKey="metric" tick={{ fontSize: 12 }} />
            <YAxis />
            <Tooltip />
            <Legend verticalAlign="top" />
            <Line type="monotone" dataKey="Candidate1" stroke="#EA4335" strokeWidth={4} dot={false} />
            <Line type="monotone" dataKey="Candidate2" stroke="#3FC98B" strokeWidth={4} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default function RecruitmentBoard() {
  return (
    <div className="min-h-screen bg-white px-8 py-8 flex flex-col gap-6">
      {/* Header Row */}
      <div className="flex items-start justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold text-[#181C32] leading-tight mb-2">Hey Andrew,</h1>
          <h2 className="text-2xl font-semibold text-[#181C32]">Welcome! to Dashboard</h2>
        </div>
        <div className="flex items-center gap-6">
          <div className={`${glass} ${animateCard} bg-[#F6F6F6]/80 rounded-xl flex items-center px-4 py-2 w-[340px]`}>
            <Search className="w-6 h-6 text-[#222] opacity-60 mr-3" />
            <input
              type="text"
              placeholder="Search candidate, vacancy, ctc"
              className="bg-transparent outline-none text-lg w-full placeholder:text-[#222] placeholder:opacity-70"
            />
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[#E6FFB3] flex items-center justify-center text-2xl font-bold text-[#222]">
              <span>A</span>
            </div>
            <div>
              <div className="text-lg font-semibold text-[#222]">Andrew Sebastian</div>
              <div className="text-xs text-[#888]">Lead HR</div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards Row with Applicant Resources on the right */}
      <div className="flex gap-6">
        {/* 4 Cards on the left, width reduced */}
        <div className="flex-1 max-w-full flex flex-col">
          <div className="grid grid-cols-4 gap-6">
            <div className={`${animateCard} bg-[#F15A29] rounded-xl px-6 py-8 flex flex-col justify-between max-h-[140px]`}>
              <span className="text-xl text-white mb-2">Applications</span>
              <span className="text-3xl font-light text-white">1,534</span>
            </div>
            <div className={`${animateCard} bg-[#396CFF] rounded-xl px-6 py-8 flex flex-col justify-between max-h-[140px]`}>
              <span className="text-xl text-white mb-2">Shortlisted</span>
              <span className="text-3xl font-light text-white">869</span>
              <span className="absolute bottom-4 right-6 flex items-center text-white text-base opacity-80">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" className="mr-1">
                  <path d="M12 19V5M12 5l-5 5M12 5l5 5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                1.98%
              </span>
            </div>
            <div className={`${animateCard} bg-[#5ACB94] rounded-xl px-6 py-8 flex flex-col justify-between max-h-[140px] relative`}>
              <span className="text-xl text-white mb-2">Hired</span>
              <span className="text-3xl font-light text-white">236</span>
              <span className="absolute bottom-4 right-6 flex items-center text-white text-base opacity-80">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" className="mr-1">
                  <path d="M12 5v14M12 19l5-5M12 19l-5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                2.3%
              </span>
            </div>
            <div className={`${animateCard} bg-[#EA4335] rounded-xl px-6 py-8 flex flex-col justify-between max-h-[140px]`}>
              <span className="text-xl text-white mb-2">Rejected</span>
              <span className="text-3xl font-light text-white">429</span>
            </div>
          </div>
        </div>
      </div>

      {/* Analytics Graph Cards */}
      <AnalyticsGraphCards />
      <ApplicantsList />
      </div>
  );
}