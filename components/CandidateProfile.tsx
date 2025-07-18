import React, {useState} from "react";
import {Users, Star, CheckCircle, XCircle, ArrowUp, ArrowDown, Search, Bell, User, ChevronRight, ArrowUpRight, Edit, Download, Pause, X, Plus, Calendar } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, PieChart, Pie, Cell, LineChart, Line } from "recharts";
import CandidatesPage from "@/components/CandidatesPage";
import { useRouter } from 'next/navigation';

function DashboardHeader() {
  return (
    <header className="flex items-center justify-between mb-10">
      {/* Logo */}
      <div className="text-2xl text-black-600">Candidate Profile</div>
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

interface CandidateProfileCardProps {
  candidate: {
    name: string;
    img: string;
    gender?: string;
    age?:  string;
    degree?: string;
    role: string;
    experience?: string;
    matchRate?: number;
    educationScore?: number;
    experienceScore?: number;
    skillsScore?: number;
    ageScore?: number;
  };
}

function CandidateProfileCard({ candidate }: { candidate: CandidateProfileCardProps["candidate"] }) {
  return (
    <div className="min-w-[470px] mx-auto rounded-3xl overflow-hidden shadow-xl bg-white" style={{background: "linear-gradient(180deg,white 60%,#e0f2fe 100%)"}}>
      {/* Top Banner with Image */}
      <div className="relative h-64 bg-gray-200 flex items-end rounded-b-3xl overflow-hidden">
        <img
          src={candidate.img}
          alt={candidate.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 p-6 w-full flex flex-col">
          <div className="text-white text-3xl font-bold drop-shadow">{candidate.name}</div>
          <div className="text-white text-lg font-medium drop-shadow">
            {candidate.gender ? `${candidate.gender} - ` : ""}
            {candidate.age}
          </div>
          {candidate.degree && (
            <div className="absolute right-6 bottom-6">
              <span className="bg-gray-200/80 text-gray-700 px-4 py-2 rounded-xl text-base font-medium shadow">
                {candidate.degree}
              </span>
            </div>
          )}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-0" />
      </div>
      <div className="bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200 p-6 rounded-b-3xl">
        <div className="mb-2">
          <div className="text-2xl font-bold text-gray-800">{candidate.role}</div>
          <div className="text-gray-400 text-base">{candidate.experience}</div>
        </div>
        {/* Basic Info Accordion (static for now) */}
        <div className="bg-white rounded-xl shadow flex items-center justify-between px-6 py-4 mb-4">
          <div className="text-lg font-semibold text-gray-800">Basic Information</div>
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-gray-400">
            <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        {/* Job Match */}
        <div className="bg-white rounded-xl shadow flex items-center justify-between px-6 py-4 mb-4">
          <div>
            <div className="text-xl font-semibold text-gray-800">Job Match</div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-gray-900">{candidate.matchRate ?? 0}%</div>
            <div className="text-gray-400 text-sm">Match Rate</div>
          </div>
        </div>
        {/* Scores */}
        <div className="space-y-4">
          <ScoreBar label="Education" value={candidate.educationScore ?? 0} />
          <ScoreBar label="Experience" value={candidate.experienceScore ?? 0} />
          <ScoreBar label="Skills" value={candidate.skillsScore ?? 0} />
          <ScoreBar label="Age" value={candidate.ageScore ?? 0} />
        </div>
      </div>
    </div>
  );
}
function ScoreBar({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex items-center justify-between bg-gray-100 rounded-full px-6 py-3">
      <span className="text-gray-700 font-medium">{label}</span>
      <span className="bg-white rounded-full px-6 py-2 text-lg font-bold shadow text-gray-700">{value}%</span>
    </div>
  );
}

function SkillsCard({ skills }: { skills: { name: string; score: number }[] }) {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 mt-6 max-w-[540px] w-full" style={{background: "linear-gradient(180deg,white 60%,#e0f2fe 100%)"}}>
      <div className="text-2xl font-bold text-gray-900 mb-4">Skills</div>
      <hr className="mb-6 border-gray-200" />
      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name} className="flex items-center justify-between bg-gray-50 rounded-full px-6 py-4 shadow-sm">
            <span className="text-gray-800 font-medium">{skill.name}</span>
            <span className="bg-white rounded-full px-6 py-2 text-lg font-bold shadow text-gray-800">{skill.score}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ContactDetailsCard({ candidate }: { candidate: CandidateProfileCardProps["candidate"] }) {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 mt-6 max-w-[540px] w-full">
      <div className="text-2xl font-bold text-gray-900 mb-4">Contact Details</div>
      <hr className="mb-6 border-gray-200" />
      <div className="space-y-4">
        <div className="flex items-center">
          <span className="text-gray-500 font-medium w-40">Phone Number</span>
          <span className="text-gray-400 mx-2">:</span>
          <span className="text-gray-600">{candidate.contact}</span>
        </div>
        <div className="flex items-center">
          <span className="text-gray-500 font-medium w-40">Email ID</span>
          <span className="text-gray-400 mx-2">:</span>
          <span className="text-gray-600">{candidate.email}</span>
        </div>
        <div className="flex items-center">
          <span className="text-gray-500 font-medium w-40">Address</span>
          <span className="text-gray-400 mx-2">:</span>
          <span className="text-gray-600">{candidate.address}</span>
        </div>
        <div className="flex items-center">
          <span className="text-gray-500 font-medium w-40">LinkedIn</span>
          <span className="text-gray-400 mx-2">:</span>
          <span className="text-gray-600">{candidate.linkedin}</span>
        </div>
      </div>
    </div>
  );
}

const resumeData = [
  {
    title: "Frontend Developer",
    company: "Google",
    period: "May 2023 - Feb 2024",
    location: "Remote",
    description:
      "Built fast, accessible UIs for Google Search using React, TypeScript, and internal frameworks. Improved load speed by 30% through component optimization and lazy loading. Led WCAG-compliant UI migration adopted by multiple product teams.",
  },
  {
    title: "Frontend Developer",
    company: "Microsoft",
    period: "May 2022 - Feb 2023",
    location: "On-site",
    description:
      "Created frontend features for Microsoft Edge developer tools using Fluent UI and D3.js. Migrated legacy modules to modern TypeScript structure, reducing tech debt. Built reusable components that improved development speed across teams.",
  },
  {
    title: "Frontend Developer Intern",
    company: "Amazon",
    period: "May 2021 - Feb 2022",
    location: "Hybrid",
    description:
      "Worked on Seller Central dashboard during internship. Optimized React components, improving performance by 20%, and built a vendor analytics panel used by operations teams. Presented final project to leadership, receiving a distinction for technical depth.",
  },
];

function ResumeSection() {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 mt-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex gap-2">
          <button className="border px-4 py-2 rounded-lg font-medium">Personal Information</button>
          <button className="border px-4 py-2 rounded-lg font-medium">Educational Background</button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium shadow">Job Objective</button>
        </div>
        <button className="p-2 rounded-full border border-gray-200 hover:bg-gray-100 transition">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8v8"/></svg>
        </button>
      </div>
      <div>
        <button className="border px-4 py-2 rounded-lg font-medium mb-4">Resume</button>
        {resumeData.map((item, idx) => (
          <div key={idx} className="mb-6">
            <div className="flex justify-between items-center">
              <div>
                <div className="font-bold text-xl">{item.title}</div>
                <div className="text-gray-500">{item.company}</div>
              </div>
              <div className="text-right">
                <div className="text-gray-500">{item.period}</div>
                <div className="text-gray-400">{item.location}</div>
              </div>
            </div>
            <div className="mt-2 text-gray-700 text-lg">{item.description}</div>
            {idx < resumeData.length - 1 && <hr className="my-4 border-gray-200" />}
          </div>
        ))}
      </div>
    </div>
  );
}

function CoverLetterCard() {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 mt-6">
      <div className="flex items-center justify-between mb-6">
        <button className="border px-4 py-2 rounded-lg font-medium">Cover Letter</button>
        <button className="p-2 rounded-full border border-gray-200 hover:bg-gray-100 transition">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <path d="M8 12h8M12 8v8"/>
          </svg>
        </button>
      </div>
      <div className="text-gray-700 text-xl leading-relaxed whitespace-pre-line">
        {"I'm Sarah Johnson, a frontend developer with experience at Google, Microsoft, and Amazon. Over the past few years, I’ve designed and built responsive, accessible UIs using React and TypeScript, optimized performance on high-traffic platforms, and developed scalable component systems adopted across multiple teams.\n\nAt Google, I improved Search UI load times by 30%. At Microsoft, I migrated legacy modules to modern TypeScript architecture, enhancing developer efficiency. During my internship at Amazon, I delivered a vendor analytics dashboard feature and contributed to key frontend performance improvements. I’m passionate about writing clean, maintainable code and building seamless user experiences.\n\nI'm excited by the opportunity to bring that energy to [Company Name] and contribute to meaningful, high-impact products.\n\nThank you for considering my application.\n– Sarah Johnson"}
      </div>
    </div>
  );
}

export default function CandidateProfile({candidate }: {candidate: CandidateProfileCardProps["candidate"]}) {
  const skills = [
    { name: "React Development", score: 90 },
    { name: "TypeScript", score: 88 },
    { name: "UI Optimization", score: 90 },
    { name: "Component Architecture", score: 78 },
  ];
  const [activeTab, setActiveTab] = useState("Profile");
  const router = useRouter();
  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <DashboardHeader />
      <div className="flex gap-8 mb-8">
        {/* Left: Candidate Profile Card */}
        <div className="flex-shrink-0 flex flex-col items-center">
          <CandidateProfileCard candidate={candidate} />
          <SkillsCard skills={skills} />
          <ContactDetailsCard candidate={candidate} />
        </div>
        {/* Right: Resume & Tabs */}
        <div className="flex flex-1 flex-col gap-4">
          <div className="flex gap-6 mb-6">
            {["Profile", "Results", "Interview", "Activity", "Messages"].map((tab) => (
              <button
                key={tab}
                className={`px-6 py-2 rounded-full font-semibold shadow ${
                  activeTab === tab
                    ? "bg-green-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => {
                  if (tab === "Results") {
                    router.push('/Result');
                  } else {
                    setActiveTab(tab);
                  }
                }}
              >
                {tab}
              </button>
            ))}
          </div>
          {activeTab === "Profile" && (
            <>
              <ResumeSection />
              <CoverLetterCard />
            </>
          )}
          {/* Add other tab content here as needed */}
        </div>
      </div>
    </div>
  );
}