import React, {useState} from "react";
import {Users, Star, CheckCircle, XCircle, ArrowUp, ArrowDown, Search, Bell, User, ChevronRight, ArrowUpRight, Edit, Download, Pause, X, Plus, Calendar } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, PieChart, Pie, Cell, LineChart, Line } from "recharts";
import { useRouter } from "next/navigation";
import Link from 'next/link'

const cardGradient = "bg-[linear-gradient(180deg,white_60%,#e0f2fe_100%)]";

function ScheduleCard() {
  const events = [
    {
      time: "1:00PM",
      color: "bg-lime-200",
      icon: <span className="inline-block w-4 h-4 rounded-full bg-lime-200 border border-lime-400"></span>,
      title: "Marketing Strategy Presentation",
      department: "Marketing",
      bg: "bg-orange-400 text-white",
      faded: false,
    },
    {
      time: "2:30PM",
      color: "bg-yellow-200",
      icon: <span className="inline-block w-4 h-4 rounded-full bg-yellow-200 border border-yellow-400"></span>,
      title: "HR Policy Update Session",
      department: "Human Resources",
      bg: "bg-orange-300 text-white",
      faded: false,
    },
    {
      time: "4:00PM",
      color: "bg-indigo-100",
      icon: <span className="inline-block w-4 h-4 rounded-full bg-indigo-200 border border-indigo-400"></span>,
      title: "Customer Feedback Analysis",
      department: "Customer Support",
      bg: "bg-indigo-400 text-white",
      faded: false,
    },
    {
      time: "5:30PM",
      color: "bg-indigo-50",
      icon: <span className="inline-block w-4 h-4 rounded-full bg-indigo-100 border border-indigo-200"></span>,
      title: "Financial Reporting Session",
      department: "Finance",
      bg: "bg-indigo-50 text-gray-400",
      faded: true,
    },
  ];

  return (
    <div className="rounded-3xl shadow-md p-8 bg-white border border-gray-100 mb-6 min-w-[390px]" style={{background: "linear-gradient(180deg,white 80%,#f8fafc 100%)"}}>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-[#181C32]">Schedule</h2>
        <button className="flex items-center gap-2 bg-gray-100 rounded-lg px-4 py-2 text-base font-medium text-gray-500">
          <Calendar className="w-5 h-5" />
          Today
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>
      <div className="space-y-8">
        {events.map((event) => (
          <div key={event.title + event.time} className="flex items-center">
            <div className="w-24 text-right pr-4 text-lg font-medium text-black">{event.time}</div>
            <div className="flex flex-col items-center mr-4">
              {event.icon}
            </div>
            <div className={`flex-1 rounded-md px-8 py-6 ${event.bg} ${event.faded ? "opacity-60" : ""}`}>
              <div className={`text-sm font-normal mb-2 ${event.faded ? "text-gray-400" : ""}`}>{event.title}</div>
              <div className={`text-sm ${event.faded ? "text-gray-300" : "text-white"}`}>{event.department}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TasksCard() {
  const tasks = [
    {
      title: "Resume Screening",
      status: "Evaluating",
      date: "May 27, 2027",
      percent: 40,
    },
    {
      title: "Interview Scheduling",
      status: "",
      date: "May 20, 2025",
      percent: 60,
    },
    {
      title: "Candidate Communication",
      status: "",
      date: "May 23, 2025",
      percent: 30,
    },
    {
      title: "Offer Management",
      status: "",
      date: "May 25, 2025",
      percent: 50,
    },
  ];

  // Simple circular progress SVG
  function ProgressCircle({ percent }: { percent: number }) {
    const radius = 24;
    const stroke = 5;
    const normalizedRadius = radius - stroke / 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - (percent / 100) * circumference;
    return (
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke="#E0E7FF"
          fill="none"
          strokeWidth={stroke}
          cx={radius}
          cy={radius}
          r={normalizedRadius}
        />
        <circle
          stroke="#6366F1"
          fill="none"
          strokeWidth={stroke}
          strokeLinecap="round"
          cx={radius}
          cy={radius}
          r={normalizedRadius}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          style={{ transition: "stroke-dashoffset 0.5s" }}
        />
        <text
          x="50%"
          y="54%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="14"
          fontWeight="bold"
          fill="#6366F1"
        >
          {percent}%
        </text>
      </svg>
    );
  }

  return (
    <div className="rounded-3xl shadow-md p-8 bg-white border border-gray-100 mb-6" style={{background: "linear-gradient(180deg,white 80%,#f8fafc 100%)"}}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-[#181C32]">Tasks</h2>
        <button className="bg-orange-500 hover:bg-orange-600 rounded-xl p-3 transition">
          <Plus className="w-8 h-8 text-white" />
        </button>
      </div>
      <div className="flex flex-col gap-4">
        {tasks.map((task, idx) => (
          <div
            key={task.title}
            className="flex items-center bg-gray-50 rounded-xl px-4 py-4 mb-1"
          >
            <div className="mr-4">
              <ProgressCircle percent={task.percent} />
            </div>
            <div className="flex-1">
              <div className="text-xl font-medium">{task.title}</div>
              {task.status ? (
                <div className="flex items-center gap-2 mt-1">
                  <span className="font-semibold">Evaluating</span>
                  <span className="mx-1 text-gray-400 text-lg">•</span>
                  <span className="text-gray-700">{task.date}</span>
                </div>
              ) : (
                <div className="mt-1 text-lg text-gray-700">{task.date}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AdminControlsCard() {
  return (
    <div className="rounded-3xl shadow-md p-8 bg-white border border-gray-100 mb-6" style={{background: "linear-gradient(180deg,white 80%,#e0f2fe 100%)"}}>
      <h2 className="text-2xl font-bold text-[#181C32] mb-8">Admin Controls</h2>
      <div className="flex flex-col gap-6">
        <button className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white text-xl font-semibold rounded-xl py-4 transition">
          <Edit className="w-6 h-6" />
          Edit Job
        </button>
        <button className="flex items-center justify-center gap-3 bg-gray-100 text-gray-700 text-xl font-semibold rounded-xl py-4 transition hover:bg-gray-200">
          <Download className="w-6 h-6" />
          Export Candidates
        </button>
        <button className="flex items-center justify-center gap-3 bg-yellow-100 text-yellow-800 text-xl font-semibold rounded-xl py-4 transition hover:bg-yellow-200">
          <Pause className="w-6 h-6" />
          Pause Job
        </button>
        <button className="flex items-center justify-center gap-3 bg-red-100 text-red-700 text-xl font-semibold rounded-xl py-4 transition hover:bg-red-200">
          <X className="w-6 h-6" />
          Close Job
        </button>
      </div>
    </div>
  );
}

function CandidateProfileDrawer({ open, onClose, candidate }) {
  const [expanded, setExpanded] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const router = useRouter();

  if (!open || !candidate) return null;

  const handleExpand = () => setExpanded((prev) => !prev);
  const handleLayoutToggle = () => {
    // Implement your layout toggle logic here
    alert("Layout toggled!");
  };
  const handleFullscreen = () => {
  // Convert all values to string to ensure proper parsing
  const params = new URLSearchParams(
    Object.entries(candidate).reduce((acc, [key, value]) => {
      acc[key] = value !== undefined && value !== null ? String(value) : "";
      return acc;
    }, {} as Record<string, string>)
  );
  router.push(`/CandidateProfile?${params.toString()}`);
};
  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/30 z-40"
        onClick={onClose}
        aria-label="Close profile drawer"
      />
      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-2xl z-50 flex flex-col overflow-y-auto transition-transform duration-300 ${
          fullscreen ? "w-full max-w-full" : "w-full max-w-xl"
        }`}
        style={{ transform: open ? "translateX(0)" : "translateX(100%)" }}
      >
          {/* Top Action Buttons */}
        <div className="flex items-center gap-8 p-4 pb-0">
          <button
            className="text-gray-500 hover:text-gray-700 transition"
            title="Expand/Collapse"
            onClick={handleExpand}
          >
            {/* Double Arrow Icon */}
            <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 36 36">
              <path d="M10 14l6 6m0 0l6-6m-6 6V6" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M26 22l-6-6m0 0l-6 6m6-6v12" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            className="text-gray-500 hover:text-gray-700 transition"
            title="Fullscreen"
            onClick={handleFullscreen}
          >
            {/* Fullscreen Icon */}
            <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 36 36">
              <path d="M6 30v-8m0 8h8m-8 0l8-8" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M30 6v8m0-8h-8m8 0l-8 8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            className="text-gray-500 hover:text-gray-700 transition"
            title="Layout Toggle"
            onClick={handleLayoutToggle}
          >
            {/* Layout Icon */}
            <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 36 36">
              <rect x="8" y="8" width="20" height="20" rx="4" strokeLinecap="round" strokeLinejoin="round"/>
              <rect x="8" y="8" width="8" height="20" rx="2" fill="#888" />
            </svg>
          </button>
        </div>
        <div className="p-8">
          <div className="flex items-center gap-4 mb-6">
            <img src={candidate.img} alt={candidate.name} className="w-16 h-16 rounded-full object-cover" />
            <div>
              <div className="text-2xl font-bold">{candidate.name}</div>
              <div className="text-gray-400 text-lg">{candidate.role}</div>
            </div>
          </div>
          {/* Stage Progress */}
          <div className="bg-white rounded-2xl shadow p-4 mb-6">
            <div className="mb-4 flex items-center gap-2">
              <div className="border px-4 py-2 rounded-lg font-medium text-gray-600 bg-gray-50">Current Stage</div>
              <span className="text-gray-400 ml-2">Candidates stage will be changed after application review.</span>
            </div>
            <div className="flex items-center gap-8 mb-4">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-blue-600 mb-1" />
                <span className="text-blue-700 font-semibold">Review</span>
              </div>
              <div className="flex-1 h-1 bg-blue-200 rounded" />
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full border-2 border-blue-400 bg-white mb-1" />
                <span className="text-blue-400 font-semibold">Screening</span>
              </div>
              <div className="flex-1 h-1 bg-blue-200 rounded" />
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full border-2 border-gray-300 bg-white mb-1" />
                <span className="text-gray-400 font-semibold">Interview</span>
              </div>
              <div className="flex-1 h-1 bg-blue-200 rounded" />
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full border-2 border-gray-300 bg-white mb-1" />
                <span className="text-gray-400 font-semibold">Offered</span>
              </div>
            </div>
            <div className="flex gap-4">
              <button className="bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold">Move Next Stage</button>
              <button className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg font-semibold">Move Back</button>
            </div>
          </div>
          {/* Tabs */}
          <div className="bg-white rounded-2xl shadow p-6 mb-6">
            <div className="flex gap-2 mb-6">
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold">Basic Information</button>
              <button className="border px-4 py-2 rounded-lg font-semibold">Education</button>
              <button className="border px-4 py-2 rounded-lg font-semibold">Experience</button>
              <button className="border px-4 py-2 rounded-lg font-semibold">Resume</button>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex">
                <div className="w-48 text-gray-500 text-lg font-medium">Department</div>
                <div className="text-gray-900 text-lg font-semibold">Development</div>
              </div>
              <div className="flex">
                <div className="w-48 text-gray-500 text-lg font-medium">Work Type</div>
                <div className="text-gray-900 text-lg font-semibold">Remote</div>
              </div>
              <div className="flex">
                <div className="w-48 text-gray-500 text-lg font-medium">Job Board</div>
                <div className="text-gray-900 text-lg font-semibold">LinkedIn</div>
              </div>
              <div className="flex">
                <div className="w-48 text-gray-500 text-lg font-medium">Phone Number</div>
                <div className="text-gray-900 text-lg font-semibold">{candidate.contact}</div>
              </div>
              <div className="flex">
                <div className="w-48 text-gray-500 text-lg font-medium">Email ID</div>
                <div className="text-gray-900 text-lg font-semibold">{candidate.email}</div>
                </div>
              </div>
          </div>
          {/* Comments & Status */}
          <div className="mb-4">
            <button className="border px-4 py-2 rounded-lg font-semibold mb-4">Comments & Status</button>
            <div className="flex items-center gap-2 mb-2 text-gray-500">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M16 3v4M8 3v4M3 7h18M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              Stage Changed to <span className="text-blue-600 font-semibold">screening</span> by <span className="font-semibold">@Katie Green</span> <span>(2 hours ago)</span>
            </div>
            <div className="flex items-start gap-3 mb-2">
              <img src="/images/People_2.png" className="w-8 h-8 rounded-full" alt="Katie Green" />
              <div>
                <div className="font-semibold">Katie Green</div>
                <div className="text-gray-700">Shane successfully participated in the screening stage. <span className="text-gray-400">(10:20 am)</span></div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <img src="/images/People_2.png" className="w-8 h-8 rounded-full" alt="Katie Green" />
              <div>
                <div className="font-semibold">Katie Green</div>
                <div className="text-gray-700">Shane has proved himself to be a great candidate. <span className="text-gray-400">(11:00 am)</span></div>
              </div>
              </div>
          </div>
          {/* Add comment */}
          <div className="flex items-center gap-3 mt-6">
            <img src="/images/People_4.png" className="w-10 h-10 rounded-full" alt="You" />
            <input
              type="text"
              placeholder="Add a comment"
              className="flex-1 border rounded-full px-6 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-100"
            />
            <button className="bg-gradient-to-r from-blue-400 to-purple-400 text-white rounded-full px-4 py-2 text-lg">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function RecentApplicationsCard() {
  const applications = [
    {
      name: "Alex Johnson",
      img: "/images/People_1.png",
      applied: "Applied 2 hours ago",
      source: "LinkedIn",
      match: 95,
      matchColor: "bg-green-100 text-green-700",
      profileUrl: "#",
      contact: "(684) 555-0102",
      email: "alex.johnson@email.com",
    },
    {
      name: "Sarah Chen",
      img: "/images/People_2.png",
      applied: "Applied 1 day ago",
      source: "Referral",
      match: 87,
      matchColor: "bg-yellow-100 text-yellow-800",
      profileUrl: "#",
      contact: "(704) 555-0127",
      email: "sarah.chen@email.com",
    },
    {
      name: "Mike Rodriguez",
      img: "/images/People_3.png",
      applied: "Applied 3 days ago",
      source: "Direct",
      match: 78,
      matchColor: "bg-blue-100 text-blue-700",
      profileUrl: "#",
      contact: "(302) 555-0107",
      email: "mike.rodriguez@email.com",
    },
  ];

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  const handleViewProfile = (candidate) => {
    setSelectedCandidate(candidate);
    setDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
    setSelectedCandidate(null);
  };

  return (
    <>
    <div className="rounded-3xl shadow-md p-8 bg-white border border-gray-100 max-w-6xl w-full mb-6" style={{background: "linear-gradient(180deg,white 80%,#e0f2fe 100%)"}}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-[#181C32]">Recent Applications</h2>
        <button className="flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 transition">
          See All
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
      <div className="space-y-6">
        {applications.map((app) => (
          <div key={app.name + app.applied} className="flex items-center bg-white rounded-2xl border border-gray-200 px-6 py-5">
            <img
              src={app.img}
              alt={app.name}
              className="w-14 h-14 rounded-full object-cover border-2 border-white shadow mr-6"
            />
            <div className="flex-1 min-w-0">
              <div className="font-bold text-xl text-[#181C32]">{app.name}</div>
              <div className="text-gray-400 text-base truncate">{app.applied} • {app.source}</div>
            </div>
            <div className="flex items-center gap-6 ml-auto">
              <span className={`px-4 py-2 rounded-lg font-semibold text-base ${app.matchColor}`}>{app.match}% Match</span>
              <a
                href={app.profileUrl}
                className="text-blue-600 font-semibold text-base hover:underline"
                onClick={() => handleViewProfile(app)}
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
    <CandidateProfileDrawer open={drawerOpen} onClose={handleCloseDrawer} candidate={selectedCandidate} />
    </>
  );
}



function CandidatesCard() {

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  const candidates = [
    {
      name: "Shane",
      role: "Frontend Developer",
      appliedOn: "9:30 AM 20-5-2025",
      contact: "(684) 555-0102",
      img: "/images/People_1.png",
      email:"Shane@gmail.com",
      age: "28",
      degree: "Bachelor’s Degree",
      gender: "Female",
      experience: "3 years of Experience",
      matchRate: "96",
      educationScore: "90",
      experienceScore: "88",
      skillsScore: "90",
      ageScore: "78",
      linkedin: "r",
      address: "r",
    },
    {
      name: "Sarah Johnson",
      role: "Frontend Developer",
      appliedOn: "9:00 AM 20-5-2025",
      contact: "(704) 555-0127",
      img: "/images/People_2.png",
      email:"Sarah,johnson@gmail.com",
      age: "28",
      degree: "Bachelor’s Degree",
      gender: "Female",
      experience: "3 years of Experience",
      matchRate: "96",
      educationScore: "90",
      experienceScore: "88",
      skillsScore: 90,
      ageScore: 78,
      linkedin: "r",
      address: "r",
    },
    {
      name: "Victoria",
      role: "Frontend Developer",
      appliedOn: "8:30 AM 20-5-2025",
      contact: "(302) 555-0107",
      img: "/images/People_3.png",
      email:"Victoria@gmail.com",
      age: 28,
      degree: "Bachelor’s Degree",
      gender: "Female",
      experience: "3 years of Experience",
      matchRate: 96,
      educationScore: 90,
      experienceScore: 88,
      skillsScore: 90,
      ageScore: 78,
      linkedin: "r",
      address: "r",
    },
    {
      name: "Angel",
      role: "Frontend Developer",
      appliedOn: "7:30 AM 20-5-2025",
      contact: "(239) 555-0108",
      img: "/images/People_6.png",
      email:"Angel@gmail.com",
      age: 28,
      degree: "Bachelor’s Degree",
      gender: "Female",
      experience: "3 years of Experience",
      matchRate: 96,
      educationScore: 90,
      experienceScore: 88,
      skillsScore: 90,
      ageScore: 78,
      linkedin: "",
      address: "r",
    },
    {
      name: "Kristin",
      role: "Frontend Developer",
      appliedOn: "6:00 AM 20-5-2025",
      contact: "(702) 555-0122",
      img: "/images/People_5.png",
      email:"Kristin@gmail.com",
      age: 28,
      degree: "Bachelor’s Degree",
      gender: "Female",
      experience: "3 years of Experience",
      matchRate: 96,
      educationScore: 90,
      experienceScore: 88,
      skillsScore: 90,
      ageScore: 78,
      linkedin: "r",
      address: "r",
    },
  ];

  const handleViewProfile = (candidate) => {
    setSelectedCandidate(candidate);
    setDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
    setSelectedCandidate(null);
  };

  return (
    <>
    <div className="rounded-3xl shadow-md p-8 bg-white border border-gray-100 max-w-6xl w-full mb-6" style={{background: "linear-gradient(180deg,white 80%,#e0f2fe 100%)"}}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-[#181C32]">Candidates</h2>
        <button className="flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 transition">
          See All
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
      <hr className="mb-6 border-gray-200" />
      <div className="space-y-8">
        {candidates.map((c) => (
          <div key={c.name+c.appliedOn} className="flex items-center">
            <img
              src={c.img}
              alt={c.name}
              className="w-14 h-14 rounded-full object-cover border-2 border-white shadow mr-6"
            />
            <div className="flex-1">
              <div className="font-bold text-lg text-[#181C32]">{c.name}</div>
              <div className="text-gray-400 text-base">{c.role}</div>
            </div>
            <div className="flex-1">
              <div className="font-semibold text-gray-600">Applied On</div>
              <div className="text-gray-500">{c.appliedOn}</div>
            </div>
            <div className="flex-1">
              <div className="font-semibold text-gray-600">Contact</div>
              <div className="text-gray-500">{c.contact}</div>
            </div>
            <button className="ml-8 bg-white border border-blue-200 text-blue-600 font-semibold px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-50 transition"
            onClick={() => handleViewProfile(c)}
            >
              View Profile
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
    <CandidateProfileDrawer open={drawerOpen} onClose={handleCloseDrawer} candidate={selectedCandidate} />
    </>
  );
}

function CandidateComparisonCard() {
  const data = [
    {
        name:"",
        candidate1: 0,
        candidate2: 0,
        label1: "",
        label2: "",
    },
    {
      name: "Skill Score",
      candidate1: 200,
      candidate2: 300,
      label1: "",
      label2: "High",
    },
    {
      name: "Technical Test",
      candidate1: 100,
      candidate2: 200,
      label1: "",
      label2: "Medium",
    },
    {
      name: "Soft Skills",
      candidate1: 200,
      candidate2: 400,
      label1: "Medium",
      label2: "",
    },
    {
      name: "Cultural Fit",
      candidate1: 400,
      candidate2: 100,
      label1: "High",
      label2: "Low",
    },
    {
      name: "Resume Quality",
      candidate1: 100,
      candidate2: 400,
      label1: "Low",
      label2: "",
    },
  ];

  // Custom dot with label
const renderCustomDot = (props) => {
  const { cx, cy, value, dataKey, index } = props;
  const label = data[index][dataKey === "candidate1" ? "label1" : "label2"];
  if (!label) return (
    <circle cx={cx} cy={cy} r={6} fill={dataKey === "candidate1" ? "#19D3A2" : "#A259FF"} stroke="#fff" strokeWidth={3} />
  );
  return (
    <>
      <circle
        key="dot"
        cx={cx}
        cy={cy}
        r={8}
        fill={dataKey === "candidate1" ? "#19D3A2" : "#A259FF"}
        stroke="#fff"
        strokeWidth={3}
      />
      <foreignObject
        key="label"
        x={cx - 40}
        y={cy - 40}
        width={80}
        height={32}
      >
        <div
          style={{
            color: dataKey === "candidate1" ? "#19D3A2" : "#A259FF",
            background: dataKey === "candidate1" ? "#ECFFFA" : "#F6F0FF",
            borderRadius: 8,
            fontWeight: 600,
            fontSize: 18,
            textAlign: "center",
            boxShadow: `0 0 12px 0 ${dataKey === "candidate1" ? "#19D3A2" : "#A259FF"}22`,
            padding: "2px 12px",
            width: "fit-content",
            margin: "auto",
          }}
        >
          {label}
        </div>
      </foreignObject>
    </>
  );
};

  return (
    <div className="rounded-3xl shadow-md p-8 bg-white mb-6 border border-gray-100 max-w-6xl w-full" style={{background: "linear-gradient(180deg,white 60%,#e0f2fe 100%)"}}>
      <div className="text-2xl font-bold mb-2 text-[#181C32]">Candidate Comparison</div>
      <Legend
            verticalAlign="top"
            align="right"
            iconType="circle"
            wrapperStyle={{ fontSize: 20, marginBottom: 16 }}
            formatter={(value) =>
              value === "candidate1" ? (
                <span style={{ color: "#19D3A2" }}>Candidate 1</span>
              ) : (
                <span style={{ color: "#A259FF" }}>Candidate 2</span>
              )
            }
          />
      <div className="border-b border-[#E5E7EB] mb-8"></div>
      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={data} margin={{ top: 32, right: 32, left: 0, bottom: 8 }}>
          <XAxis dataKey="name" tick={{ fontSize: 18, fill: "#18181B" }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 18, fill: "#7C7C8A" }} axisLine={false} tickLine={false} label={{ value: "Scores", angle: -90, position: "insideLeft", fontSize: 18, fill: "#7C7C8A" }} />
          <Tooltip />
          
          <Line
            type="monotone"
            dataKey="candidate1"
            stroke="#19D3A2"
            strokeWidth={4}
            dot={renderCustomDot}
            activeDot={{ r: 10 }}
          />
          <Line
            type="monotone"
            dataKey="candidate2"
            stroke="#A259FF"
            strokeWidth={4}
            dot={renderCustomDot}
            activeDot={{ r: 10 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}


function JobDetailsCard() {
  return (
    <div className="rounded-3xl shadow-md p-4 bg-white max-w-6xl  mb-6 border border-gray-100" style={{background: "linear-gradient(180deg,white 60%,#e0f2fe 100%)"}}>
      <div className="flex items-center mb-4">
        <button className="mr-2 text-gray-500 hover:text-gray-700 text-2xl">&lt;</button>
        <h1 className="text-2xl text-grey flex-1">Frontend Developer</h1>
        <span className="bg-green-100 text-green-700 text-sm font-semibold px-4 py-2 rounded-full ml-2">Open</span>
      </div>
      <div className="flex flex-wrap gap-16 mb-6">
        <div>
          <div className="text-lg text-gray-400">Job ID</div>
          <div className="font-medium">JOB-2024-001</div>
        </div>
        <div>
          <div className="text-lg text-gray-400">Posted On</div>
          <div className="font-medium">Jan 15, 2024</div>
        </div>
        <div>
          <div className="text-lg text-gray-400">Job Type</div>
          <div className="flex items-center gap-1 font-medium">
            <svg width="18" height="18" className="inline-block text-blue-500" fill="none" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2" stroke="#3B82F6" strokeWidth="2"/><path d="M16 3v4M8 3v4" stroke="#3B82F6" strokeWidth="2"/></svg>
            Remote
          </div>
        </div>
        <div>
          <div className="text-lg text-gray-400">Hiring Manager</div>
          <div className="font-medium">Sarah Chen</div>
        </div>
      </div>
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-4">Job Description</h2>
        <div className="mb-2">
          <span className="font-semibold">Role Summary</span>
          <p className="text-gray-600 mt-1">
            We're looking for a Senior Frontend Developer to join our dynamic team and help build cutting-edge web applications using React, TypeScript, and modern frontend technologies.
          </p>
        </div>
        <div className="mb-2 mt-4">
          <span className="font-semibold">Required Skills</span>
          <div className="flex flex-wrap gap-8 mt-2">
            {["React", "TypeScript", "JavaScript", "CSS", "HTML"].map(skill => (
              <span key={skill} className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">{skill}</span>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-8 mt-8">
          <div>
            <div className="font-semibold">Experience Range</div>
            <div className="text-gray-600">5-8 years of frontend development experience</div>
          </div>
          <div>
            <div className="font-semibold">Compensation</div>
            <div className="text-gray-600">$120,000 - $150,000 annually</div>
          </div>
        </div>
      </div>
      <div className="flex gap-2 mt-4">
        <button className="ml-auto bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium border border-gray-200 hover:bg-gray-200">Share</button>
        <button className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700">Edit</button>
      </div>
    </div>
  );
}


function DashboardHeader() {
  return (
    <header className="flex items-center justify-between mb-10">
      {/* Logo */}
      <div className="text-2xl text-black-600">Job List</div>
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
      style={{ background: bg, minWidth: 245, maxHeight: 135, boxShadow: "0 8px 24px 0 rgba(0,0,0,0.06)" }}
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
      <div className="mt-0">
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
        title="New Candidates"
        value="20"
        icon={<Users className="w-14 h-14 text-[#7BAA4D]" />}
        bg="#EEFFBC"
        iconBg="#DDF7A6"
        trend={1}
        trendValue={12.5}
        trendColor="#18181B"
      />
      <KpiCard
        title="Total Candidates"
        value="40"
        icon={<Star className="w-14 h-14 text-[#4F3CC9]" fill="#4F3CC9" />}
        bg="#E7E3FF"
        iconBg="#CFC6FF"
        trend={1}
        trendValue={8.0}
        trendColor="#18181B"
      />
      <KpiCard
        title="Hired"
        value="8"
        icon={<CheckCircle className="w-14 h-14 text-yellow-100" fill="#C9A13C" />}
        bg="#FFF6D9"
        iconBg="#FFE7A6"
        trend={1}
        trendValue={12.5}
        trendColor="#18181B"
      />
      <KpiCard
        title="Rejected"
        value="4"
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
          <text x="0" y="65" fill="grey" fontSize="20" fontWeight="600">Website</text>
          {/* Sales */}
          <line x1="240" y1="180" x2="28" y2="230" stroke="#4CC9F0" strokeWidth="2"/>
          <text x="0" y="255" fill="grey" fontSize="20" fontWeight="600">Referrals</text>
          {/* Engineering */}
          <line x1="200" y1="290" x2="250" y2="330" stroke="#19D3A2" strokeWidth="2"/>
          <text x="255" y="345" fill="grey" fontSize="20" fontWeight="600">Linkedin</text>
          {/* Marketing */}
          <line x1="275" y1="120" x2="320" y2="40" stroke="#FF5C7C" strokeWidth="2"/>
          <text x="290" y="40" fill="grey" fontSize="20" fontWeight="600">Indeed</text>
        </svg>
      </div>
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
        <h2 className="font-semibold text-2xl">Top Performing Candidates</h2>
        <button className="border px-4 py-1 rounded-2xl text-lg font-medium">See All</button>
      </div>
      <div className="border-b border-gray-200 mb-4"></div>
      <div className="space-y-5">
        {activities.map((item) => (
          <div key={item.title + item.subtitle} className="flex items-center justify-between bg-gray-100 rounded-xl px-5 py-5">
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

export default function Joblist() {
  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <DashboardHeader />
      <div className="flex gap-4 mb-8">
        <div className="flex flex-col flex-1 gap-4">
            <KpiCardsRow />
            
          {/*<HelpCard /> 
          <HelpTopicsCard />
          <HelpQueriesCard />
          <PastHelpQueries />*/}
          <div className="flex-1 h-full">
            <JobDetailsCard />
            <CandidateComparisonCard />
            <CandidatesCard />
            <RecentApplicationsCard />
            {/*<ScoreDistributionCard /> */}
          </div>
        </div>
        <div className="h-full flex-shrink-0 flex flex-col gap-8" style={{ minWidth: 390, maxWidth: 440 }}>
            <ApplicationByDepartmentCard />
            <TasksCard />

            <OngoingActivitiesCard />
            <AdminControlsCard />
            {/*<CustomerSatisfactionCard />
            <TimeToResolveCard />
            <AvgAnswersResolvedCard />
          *<OngoingActivitiesCard /> */}
        </div>
      </div>
      {/*<JobListsTableCard /> */}
      {/*<RecentApplicationsCard /> */}
    </div>
  );
}