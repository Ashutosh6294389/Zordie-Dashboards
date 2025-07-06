"use client";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import React from "react";
import { Code, PenTool, LineChart, User, Search, Calendar, FileText } from "lucide-react";
import { useState } from "react";

const glass = "backdrop-blur-lg bg-white/60 shadow-2xl border border-white/30";

// Animation utility classes
const animateCard = "transition-transform duration-500 hover:scale-[1.025] hover:shadow-2xl";

// ...existing code...

function RecentActivityCard() {
  const activity = [
    {
      day: "Today",
      items: [
        {
          icon: (
            <span className="bg-[#F15A29] rounded-lg flex items-center justify-center w-10 h-10">
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                <rect x="3" y="5" width="18" height="14" rx="2" fill="#fff" />
                <rect x="3" y="5" width="18" height="14" rx="2" stroke="#F15A29" strokeWidth="2" />
                <rect x="7" y="9" width="10" height="2" rx="1" fill="#F15A29" />
              </svg>
            </span>
          ),
          title: "Darren Wright vicwed 15 candidate profiles for the Software Developer position",
          time: "10:15AM",
          bold: false,
        },
        {
          icon: (
            <span className="bg-[#396CFF] rounded-lg flex items-center justify-center w-10 h-10">
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                <rect x="3" y="4" width="18" height="16" rx="2" fill="#fff" />
                <rect x="3" y="4" width="18" height="16" rx="2" stroke="#396CFF" strokeWidth="2" />
                <rect x="7" y="8" width="10" height="2" rx="1" fill="#396CFF" />
              </svg>
            </span>
          ),
          title: "Caren Smith scheduled interviews with 3 candidates for the Marketing Manager role",
          time: "9:50AM",
          bold: true,
        },
        {
          icon: (
            <span className="bg-[#FFA14A] rounded-lg flex items-center justify-center w-10 h-10">
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="9" fill="#fff" />
                <circle cx="11" cy="11" r="9" stroke="#FFA14A" strokeWidth="2" />
                <path d="M11 7v4l2 2" stroke="#FFA14A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          ),
          title: "Automated Reminder sent to Bob Lee to complete interview feedback",
          time: "9:30AM",
          bold: false,
        },
      ],
    },
    {
      day: "Yesterday",
      items: [
        {
          icon: (
            <span className="bg-[#396CFF] rounded-lg flex items-center justify-center w-10 h-10">
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                <rect x="3" y="4" width="18" height="16" rx="2" fill="#fff" />
                <rect x="3" y="4" width="18" height="16" rx="2" stroke="#396CFF" strokeWidth="2" />
                <path d="M12 8v4" stroke="#396CFF" strokeWidth="2" strokeLinecap="round"/>
                <path d="M12 16h.01" stroke="#396CFF" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </span>
          ),
          title: "New job posting for a Project Manager created by Alice Johnson",
          time: "4:45PM",
          bold: false,
        },
        {
          icon: (
            <span className="bg-[#F15A29] rounded-lg flex items-center justify-center w-10 h-10">
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="9" fill="#fff" />
                <circle cx="11" cy="11" r="9" stroke="#F15A29" strokeWidth="2" />
                <path d="M8 11l2 2 4-4" stroke="#F15A29" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          ),
          title: "Offer letter accepted by candidate Mark Brown for the Financial Analyst position",
          time: "3:30PM",
          bold: false,
        },
      ],
    },
  ];

  return (
    <div className={`${glass} ${animateCard} rounded-2xl p-8 min-w-[380px] max-h-[855px] animate-fade-in mt-12`}>
      <div className="p-1 pb-1 border-b border-white/20 bg-gradient-to-br from-white/80 to-[#F6F8FF]/80">
        <h3 className="text-lg font-bold text-[#181C32]">Recent Activity</h3>
      </div>
      <div className="p-5 pt-4 space-y-6">
        {activity.map((section, idx) => (
          <div key={section.day}>
            <div className="text-lg font-semibold text-[#181C32] mb-2">{section.day}</div>
            <div className="space-y-5">
              {section.items.map((item, i) => (
                <div key={i} className="flex items-start gap-3 group transition-all duration-300 hover:bg-white/70 rounded-xl p-2 cursor-pointer">
                  {item.icon}
                  <div className="flex-1">
                    <div className={`text-base leading-snug text-[#181C32] ${item.bold ? "font-bold" : ""}`}>
                      {item.title}
                    </div>
                    <div className="text-xs text-black mt-1">{item.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* Decorative gradient blur */}
      <div className="pointer-events-none absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br from-[#F15A29]/30 via-[#396CFF]/20 to-[#FFA14A]/10 blur-2xl opacity-60"></div>
    </div>
  );
}

const applicants = [
  {
    name: "Alex Boide",
    email: "a.boide@hirezy.com",
    role: "Software Engineer",
    date: "Apr 15,2027",
    employment: "Full-time",
    status: "Interviewing",
    statusColor: "bg-[#E6E8FF]",
    statusDot: "bg-[#BFCFFF]",
    resume: "View Resume",
  },
  {
    name: "Alice Johnson",
    email: "ajohnson@hirezy.com",
    role: "HR Specialist",
    date: "Apr 10, 2027",
    employment: "Contract",
    status: "Shortlisted",
    statusColor: "bg-[#E6F8B3]",
    statusDot: "bg-[#B6F7A2]",
    resume: "View Resume",
  },
  {
    name: "Bob Lec",
    email: "b.lec@hirezy.com",
    role: "Sales Associate",
    date: "Apr 18,2025",
    employment: "Temporary",
    status: "Screening",
    statusColor: "bg-[#E6F8B3]",
    statusDot: "bg-[#B6F7A2]",
    resume: "View Resume",
  },
  {
    name: "Mark Brown",
    email: "mbrown@hirezy.com",
    role: "Financial Analyst",
    date: "Apr 22,2025",
    employment: "Full-time",
    status: "Job Offer",
    statusColor: "bg-[#FFE6E6]",
    statusDot: "bg-[#FFB6B6]",
    resume: "View Resume",
  },
  {
    name: "Sandra Maxine",
    email: "s.maxine@hirezy.com",
    role: "Marketing Manager",
    date: "Apr 20, 2027",
    employment: "Part-time",
    status: "Shortlisted",
    statusColor: "bg-[#FFE6E6]",
    statusDot: "bg-[#FFB6B6]",
    resume: "View Resume",
  },
];

const tabs = [
  "All Applicants",
  "Screening",
  "Shortlisted",
  "Interviewing",
  "Job Offer",
];

const statusColorMap: Record<string, string> = {
  Interviewing: "bg-[#E6E8FF] text-[#222]",
  Shortlisted: "bg-[#E6F8B3] text-[#222]",
  Screening: "bg-[#E6F8B3] text-[#222]",
  "Job Offer": "bg-[#FFE6E6] text-[#222]",
};

const statusDotMap: Record<string, string> = {
  Interviewing: "bg-[#BFCFFF]",
  Shortlisted: "bg-[#B6F7A2]",
  Screening: "bg-[#B6F7A2]",
  "Job Offer": "bg-[#FFB6B6]",
};

export function ApplicantsListCard() {
  const [activeTab, setActiveTab] = useState(0);

  // Filter applicants based on selected tab
  const filteredApplicants =
    activeTab === 0
      ? applicants
      : applicants.filter((a) => a.status === tabs[activeTab]);

  return (
    <div className={`${glass} ${animateCard} rounded-2xl p-8 w-full max-w-5xl animate-fade-in mt-16`}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <span className="text-2xl font-semibold text-[#181C32]">Applicants List</span>
          <span className="ml-2 text-lg text-gray-400 font-medium">(1,242)</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-lg text-gray-600">Sort by:</span>
          <button className="bg-[#F6F6F6] px-2 py-1 rounded-lg border border-gray-200 font-medium flex items-center gap-2 text-lg">
            Name
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
              <path d="M19 9l-7 7-7-7" stroke="#bbb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="bg-transparent px-4 py-2 rounded-lg font-medium text-lg text-[#181C32]">See All</button>
        </div>
      </div>
      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        {tabs.map((tab, idx) => (
          <button
            key={tab}
            className={`px-7 py-2 rounded-lg font-medium text-lg transition ${
              idx === activeTab
                ? "bg-[#FF5C1A] text-white shadow"
                : "bg-transparent text-[#181C32] hover:bg-[#F6F6F6]"
            }`}
            onClick={() => setActiveTab(idx)}
          >
            {tab}
          </button>
        ))}
      </div>
      {/* Table */}
      <div className="rounded-xl overflow-hidden border border-gray-100">
        <table className="w-full text-left">
          <thead className="bg-[#F6F6F6]">
            <tr>
              <th className="py-2 px-6 text-lg font-semibold text-[#181C32]">Name</th>
              <th className="py-2 px-6 text-lg font-semibold text-[#181C32]">Role</th>
              <th className="py-2 px-6 text-lg font-semibold text-[#181C32]">Date</th>
              <th className="py-2 px-6 text-lg font-semibold text-[#181C32]">Employment Type</th>
              <th className="py-2 px-6 text-lg font-semibold text-[#181C32]">Resume</th>
              <th className="py-2 px-6 text-lg font-semibold text-[#181C32]">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredApplicants.map((a, idx) => (
              <tr key={a.email} className="border-b last:border-b-0 hover:bg-[#F6F6F6] transition">
                <td className="py-6 px-6">
                  <div className="font-bold text-lg text-[#181C32]">{a.name}</div>
                  <div className="text-base text-gray-500">{a.email}</div>
                </td>
                <td className="py-6 px-6">
                  <span className="text-lg font-medium text-gray-400">{a.role}</span>
                </td>
                <td className="py-6 px-6">
                  <span className="text-lg text-[#181C32]">{a.date}</span>
                </td>
                <td className="py-6 px-6">
                  <span className="text-lg text-[#181C32]">{a.employment}</span>
                </td>
                <td className="py-6 px-6">
                  <button
                    className="flex items-center gap-2 px-8 py-2 rounded-lg bg-[#E6E8FF] text-[#7B8FFF] font-medium text-sm"
                  >
                    <FileText className="w-5 h-5" />
                    {a.resume}
                  </button>
                </td>
                <td className="py-6 px-6">
                  <div className="flex items-center gap-2">
                    <span className={`inline-block w-3 h-3 rounded-full ${statusDotMap[a.status]}`} />
                    <span className={"text-lg font-medium "}>{a.status}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Animation keyframes */}
      <style jsx>{`
        .animate-fade-in {
          animation: fadeInUp 0.7s cubic-bezier(0.23, 1, 0.32, 1);
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </div>
  );
}

const scheduleData = [
  {
    time: "1:00PM",
    color: "#D6FF6B",
    bg: "#FF914D",
    title: "Marketing Strategy Presentation",
    subtitle: "Marketing",
    text: "text-black",
    subtext: "text-black/90",
    faded: false,
  },
  {
    time: "2:30PM",
    color: "#E6F8B3",
    bg: "#FFA14A",
    title: "HR Policy Update Session",
    subtitle: "Human Resources",
    text: "text-black",
    subtext: "text-black/90",
    faded: false,
  },
  {
    time: "4:00PM",
    color: "#BFCFFF",
    bg: "#FFD580",
    title: "Customer Feedback Analysis",
    subtitle: "Customer Support",
    text: "text-black",
    subtext: "text-black/90",
    faded: false,
  },
  {
    time: "5:30PM",
    color: "#BFCFFF",
    bg: "#7B8FFF",
    title: "Financial Reporting Session",
    subtitle: "Finance",
    text: "text-black",
    subtext: "text-black/90",
    faded: true,
  },
];

function ScheduleCard() {
  return (
    <div className={`${glass} ${animateCard} rounded-2xl p-8 min-w-[380px] max-h-[670px] animate-fade-in mt-24`}>
      <div className="flex items-center justify-between mb-6">
        <div className="text-xl font-semibold text-[#181C32]">Schedule</div>
        <div className="flex items-center gap-2 bg-[#F6F6F6] px-2 py-2 rounded-lg text-gray-500 text-xl font-medium">
          <Calendar className="w-4 h-4" stroke="#bbb" />
          <span className="ml-2">Today</span>
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
            <path d="M19 9l-7 7-7-7" stroke="#bbb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      <div className="flex flex-col gap-7">
        {scheduleData.map((item, idx) => (
          <div key={idx} className="flex items-center  group">
            {/* Time & Dot */}
            <div className="flex flex-col items-center min-w-[60px]">
              <span className="text-sm font-medium text-[#181C32] mb-2">{item.time}</span>
              <span
                className="inline-block w-4 h-4 rounded-full"
                style={{ background: item.color, opacity: item.faded ? 0.5 : 1 }}
              />
              {idx < scheduleData.length && (
                <span className="w-1 h-10 bg-gray-200 rounded-full mt-1" />
              )}
            </div>
            {/* Card */}
            <div
              className={`flex-1 rounded-md px-7 py-2 transition-all duration-300 shadow-sm ${
                item.faded
                  ? "bg-[#F6F8FF] opacity-80"
                  : "hover:scale-[1.02] hover:shadow-lg"
              }`}
              style={{ background: item.bg }}
            >
              <div className={`text-sm font-medium mb-1 ${item.text}`}>{item.title}</div>
              <div className={`text-base font-normal ${item.subtext}`}>{item.subtitle}</div>
            </div>
          </div>
        ))}
      </div>
      {/* Animation keyframes */}
      <style jsx>{`
        .animate-fade-in {
          animation: fadeInUp 0.7s cubic-bezier(0.23, 1, 0.32, 1);
        }
          @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </div>
  );
}

const vacancies = [
  {
    id: 1,
    icon: <Code className="w-8 h-8 text-white" />,
    iconBg: "bg-[#7B8FFF]",
    title: "Software Developer",
    tags: ["Full-time", "Remote"],
    salary: "$70K-$90K",
    salaryNote: "y",
    applicants: 120,
  },
  {
    id: 2,
    icon: <PenTool className="w-8 h-8 text-white" />,
    iconBg: "bg-[#FF5C1A]",
    title: "Graphic Designer",
    tags: ["Part-time", "Hybrid"],
    salary: "$40K-$55K",
    salaryNote: "(pro-rated)",
    applicants: 75,
  },
  {
    id: 3,
    icon: <LineChart className="w-8 h-8 text-white" />,
    iconBg: "bg-[#FF5C1A]",
    title: "Sales Manager",
    tags: ["Full-time", "On-site"],
    salary: "$65K-$80K",
    salaryNote: "y + comission",
    applicants: 75,
  },
  {
    id: 4,
    icon: <User className="w-8 h-8 text-white" />,
    iconBg: "bg-[#7B8FFF]",
    title: "HR Coordinator",
    tags: ["Contract", "Remote"],
    salary: "$50K-$60K",
    salaryNote: "",
    applicants: 60,
  },
];

const tasks = [
  {
    percent: 40,
    title: "Resume Screening",
    status: "Evaluating",
    date: "May 27,2027",
  },
  {
    percent: 60,
    title: "Interview Scheduling",
    status: "",
    date: "May 20,2025",
  },
  {
    percent: 30,
    title: "Candidate Communication",
    status: "",
    date: "May 23,2025",
  },
  {
    percent: 50,
    title: "Offer Management",
    status: "",
    date: "May 25,2025",
  },
];

function VacancyAndTaskCards() {
  return (
    <div className="flex gap-8 mt-12">
      {/* Left: Vacancies */}
      <div className="flex-1">
        <div className="flex items-center justify-between mb-6">
          <div className="text-2xl font-semibold text-[#181C32]">
            Current Vacancies <span className="text-lg font-normal text-gray-400">(104)</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-lg text-gray-600">
              Sort by:
              <button className="bg-gray-100 px-2 py-1 rounded-lg border border-gray-200 font-medium flex items-center gap-2">
                Popular
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <button className="bg-gray-100 px-2 py-1 rounded-lg border border-gray-200 font-medium text-lg">See All</button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {vacancies.map((v, i) => (
            <div key={v.id} className={`${glass} ${animateCard} rounded-2xl border border-gray-100 p-6 flex flex-col gap-4 min-h-[200px]`}
              style={{ animation: `fadeInCard 0.7s ${i * 0.1 + 0.2}s both` }}
            >
              <div className="flex items-center gap-4">
                <div className={`w-110 h-10 rounded-lg flex items-center justify-center ${v.iconBg}`}>
                  {v.icon}
                </div>
                <div className="text-xl font-semibold text-[#181C32]">{v.title}</div>
                <div className="ml-auto">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="opacity-40">
                    <circle cx="12" cy="12" r="2" fill="#bbb"/>
                    <circle cx="19" cy="12" r="2" fill="#bbb"/>
                    <circle cx="5" cy="12" r="2" fill="#bbb"/>
                  </svg>
                </div>
              </div>
              <div className="flex gap-3">
                {v.tags.map((tag) => (
                  <span key={tag} className="bg-[#F6F6F6] text-[#181C32] text-sm px-4 py-1 rounded-md font-medium">{tag}</span>
                ))}
              </div>
              <div className="flex items-end gap-4 mt-2">
                <span className="text-lg font-semibold text-[#181C32]">{v.salary}</span>
                {/*<span className="text-base text-gray-500">{v.salaryNote}</span>*/}
                <span className="ml-auto text-lg text-gray-700">{v.applicants} Applicants</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Right: Tasks */}
      <div className={`${glass} ${animateCard} w-[300px]`}>
        <div className="flex items-center justify-between mb-6">
          <div className="text-2xl font-semibold text-[#181C32]">Tasks</div>
          <button className="bg-[#FF5C1A] rounded-lg w-10 h-10 flex items-center justify-center">
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
              <rect width="24" height="24" rx="6" fill="#FF5C1A"/>
              <path d="M12 8v8M8 12h8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
        <div className="flex flex-col gap-4">
          {tasks.map((task, idx) => (
            <div key={idx} className="bg-[#F6F6F6] rounded-xl flex items-center px-6 py-4">
              <svg width="56" height="56" viewBox="0 0 56 56" className="mr-4">
                <circle cx="28" cy="28" r="24" fill="#fff" />
                <circle
                  cx="28"
                  cy="28"
                  r="22"
                  fill="none"
                  stroke="#7B8FFF"
                  strokeWidth="4"
                  strokeDasharray={2 * Math.PI * 22}
                  strokeDashoffset={2 * Math.PI * 22 * (1 - task.percent / 100)}
                  strokeLinecap="round"
                />
                <text
                  x="28"
                  y="33"
                  textAnchor="middle"
                  fontSize="18"
                  fill="#7B8FFF"
                  fontWeight="bold"
                >
                  {task.percent}%
                </text>
              </svg>
              <div>
                <div className="text-sm font-semibold text-[#181C32]">{task.title}</div>
                {task.status && (
                  <span className="text-base text-[#181C32] font-medium">{task.status} &nbsp;·&nbsp;</span>
                )}
                <span className={`text-base ${task.status ? "text-gray-500" : "text-[#181C32] font-semibold"}`}>
                  {task.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


//

// Data
const applicantSources = [
  { name: "Job Boards", value: 350, color: "#FF914D" },
  { name: "Social Media", value: 300, color: "#FFA14A" },
  { name: "Employee Referrals", value: 200, color: "#FFD580" },
  { name: "Recruitment Agencies", value: 150, color: "#BFCFFF" },
];

const appDeptData = [
  { name: "Engineering", value: 120, color: "#FF914D" },
  { name: "Marketing", value: 110, color: "#FFA14A" },
  { name: "Sales", value: 95, color: "#FFD580" },
  { name: "Customer Support", value: 85, color: "#BFCFFF" },
  { name: "Finance", value: 65, color: "#7B8FFF" },
  { name: "Human Resources", value: 50, color: "#F6F6F6" },
];

const appChartData = [
  { date: "13May", applied: 200, shortlisted: 120 },
  { date: "14May", applied: 240, shortlisted: 150 },
  { date: "15May", applied: 180, shortlisted: 100 },
  { date: "16May", applied: 220, shortlisted: 130 },
  { date: "17May", applied: 190, shortlisted: 110 },
  { date: "18May", applied: 210, shortlisted: 90 },
];

// Applications and Department Cards
function ApplicationsAndDepartmentCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      {/* Applications Bar Chart Card */}
      <div className={`${glass} ${animateCard} rounded-2xl p-8 flex-1 min-w-0`}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-semibold text-[#181C32]">Applications</h3>
          <div className="flex items-center gap-2 bg-[#F6F6F6] px-2 py-2 rounded-lg text-gray-500 text-lg font-medium">
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
              <rect x="3" y="4" width="18" height="18" rx="4" stroke="#bbb" strokeWidth="2" />
              <path d="M8 2v4M16 2v4" stroke="#bbb" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span className="ml-2">13-18May</span>
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
              <path d="M19 9l-7 7-7-7" stroke="#bbb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        {/* Legend */}
        <div className="flex items-center gap-8 mb-2 mt-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-4 h-4 rounded-full" style={{ background: "#7B8FFF" }} />
            <span className="text-lg font-medium text-[#181C32]">Applied</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-4 h-4 rounded-full" style={{ background: "#FF5C1A" }} />
            <span className="text-lg font-medium text-[#181C32]">Shortlisted</span>
          </div>
        </div>
        {/* Bar Chart */}
        <ResponsiveContainer width="100%" height={270}>
          <BarChart data={appChartData} barCategoryGap={32}>
            <XAxis
              dataKey="date"
              fontSize={14}
              tickLine={false}
              axisLine={true}
              tick={{ fill: "#181C32", fontWeight: 500 }}
              tickMargin={16}
            />
            <YAxis
              fontSize={15}
              tickLine={true}
              axisLine={true}
              tick={{ fill: "#181C32", fontWeight: 500 }}
              tickMargin={12}
              domain={[0, 400]}
              ticks={[0, 100, 200, 300, 400]}
            />
            <Tooltip />
            <Bar dataKey="applied" fill="#7B8FFF" name="Applied" barSize={24} radius={[0, 0, 0, 0]} />
            <Bar dataKey="shortlisted" fill="#FF5C1A" name="Shortlisted" barSize={24} radius={[0, 0, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Application by Department Pie Chart Card */}
      <div className={`${glass} ${animateCard} rounded-2xl p-8 flex-1 min-w-0`}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-semibold text-[#181C32]">Application by Department</h3>
          <div className="flex items-center gap-2 bg-gray-100 px-2 py-2 rounded text-gray-500 text-lg font-medium ml-4">
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
              <rect x="3" y="4" width="18" height="18" rx="4" stroke="#888" strokeWidth="2" />
              <path d="M8 2v4M16 2v4" stroke="#888" strokeWidth="2" strokeLinecap="round" />
            </svg>
            Today
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
              <path d="M19 9l-7 7-7-7" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        <div className="flex flex-row items-center gap-8">
          <div>
            <PieChart width={190} height={190}>
              <Pie
                data={appDeptData}
                cx={90}
                cy={90}
                innerRadius={70}
                outerRadius={90}
                dataKey="value"
                startAngle={210}
                endAngle={-180}
                paddingAngle={3}
                stroke="none"
              >
                {appDeptData.map((entry, idx) => (
                  <Cell key={`cell-${idx}`} fill={entry.color} />
                ))}
              </Pie>
              <text
                x={90}
                y={90}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize={32}
                fill="#181C32"
                fontWeight={600}
              >
                525
              </text>
              <text
                x={95}
                y={120}
                textAnchor="middle"
                fontSize={16}
                fill="#888"
              >
                Total Applications
              </text>
            </PieChart>
          </div>
          <div className="flex-1 ml-4">
            <div className="flex flex-col gap-3">
              {appDeptData.map((dept, idx) => (
                <div key={dept.name} className="flex items-center gap-3">
                  <span className="inline-block w-5 h-5 rounded-full" style={{ background: dept.color }} />
                  <span className={`text-lg ${idx === 2 ? "font-bold" : "font-normal"} text-[#181C32]`}>
                    {dept.name}
                  </span>
                  <span className={`ml-auto text-lg ${idx === 2 ? "font-bold" : "font-normal"} text-[#181C32]`}>
                    {dept.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main Dashboard Page
export default function DashboardPage() {
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
        <div className="flex-1 max-w-5xl flex flex-col">
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
          {/* Applications and Department Cards below the 4 blocks */}
          <ApplicationsAndDepartmentCards />

          <VacancyAndTaskCards />

          <ApplicantsListCard />
        </div>

        {/* Applicant Resources Card on the right */}
        <div className={`${glass} ${animateCard} bg-[#F6F8FF]/80 rounded-2xl shadow p-8 flex flex-col items-center min-w-[380px] max-w-[340px] max-h-[440px]`}>
          <div className="w-full mb-4">
            <div className="text-2xl font-medium text-[#222] mb-2">Applicant Resources</div>
          </div>
          <PieChart width={260} height={190}>
            <Pie
              data={applicantSources}
              cx={130}
              cy={90}
              innerRadius={70}
              outerRadius={90}
              dataKey="value"
              startAngle={210}
              endAngle={-180}
              paddingAngle={6}
              stroke="none"
            >
              {applicantSources.map((entry, idx) => (
                <Cell key={`cell-${idx}`} fill={entry.color} />
              ))}
            </Pie>
            <text
              x={130}
              y={90}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize={32}
              fill="#7B8FFF"
              fontWeight={600}
            >
              1,000
            </text>
            <text
              x={135}
              y={120}
              textAnchor="middle"
              fontSize={16}
              fill="#222"
            >
              Total Applicants
            </text>
          </PieChart>
          <div className="h-2 w-full bg-[#BFCFFF] rounded-full my-2" />
          <div className="grid grid-cols-2 gap-y-4 gap-x-6 text-base w-full">
            <div className="flex items-center gap-2">
              <span className="inline-block w-4 h-4 rounded-full" style={{ background: "#FF914D" }} />
              <span className="font-semibold text-[#222]">350</span>
              <span className="text-[#222] text-sm ml-2 font-semibold">Job Boards</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block w-4 h-4 rounded-full" style={{ background: "#FFA14A" }} />
              <span className="font-semibold text-[#222]">200</span>
              <span className="text-[#222] text-sm ml-2 font-semibold">Employee Referrals</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block w-4 h-4 rounded-full" style={{ background: "#FFD580" }} />
              <span className="font-semibold text-[#222]">300</span>
              <span className="text-[#222] text-sm ml-2 font-semibold">Social Media</span>
            </div>
           <div className="flex items-center gap-2">
              <span className="inline-block w-4 h-4 rounded-full" style={{ background: "#BFCFFF" }} />
              <span className="font-semibold text-[#222]">150</span>
              <span className="text-[#222] text-sm font-semibold">Recruitment Agencies</span>
            </div>
          </div>
          <ScheduleCard />
          <RecentActivityCard />
        </div>
      </div>
    </div>
  );
}