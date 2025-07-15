"use client";

import React, { useState } from "react";
import { Bell, Calendar, FileText, LayoutDashboard, Users, CheckCircle, DollarSign } from "lucide-react";
import Link from "next/link";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import RecruitmentBoard from "@/components/RecruitmentBoard";
import DashboardPage from '@/components/DashboardPage';

const SidebarItem = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <div className="flex items-center space-x-3 cursor-pointer px-3 py-2 rounded-md transition duration-300 hover:bg-gradient-to-r hover:from-[#2563eb] hover:to-[#60a5fa] hover:text-white">
    <div className="text-orange-500 group-hover:text-white">{icon}</div>
    <span className="font-medium text-sm">{label}</span>
  </div>
);

const COLORS = ["#00C49F", "#FFBB28", "#FF8042", "#8884d8", "#82ca9d"];

const appDeptData = [
  { name: "Engineering", value: 120 },
  { name: "Marketing", value: 110 },
  { name: "Sales", value: 95 },
  { name: "Support", value: 65 },
  { name: "Finance", value: 45 },
];

const appChartData = [
  { date: "13 May", applied: 200, shortlisted: 120 },
  { date: "14 May", applied: 240, shortlisted: 150 },
  { date: "15 May", applied: 180, shortlisted: 100 },
  { date: "16 May", applied: 220, shortlisted: 130 },
  { date: "17 May", applied: 190, shortlisted: 110 },
];

const vacancies = [
  { title: "Software Developer", type: "Full-time", location: "Remote", salary: "$70K-$90K", applicants: 120 },
  { title: "Graphic Designer", type: "Part-time", location: "Hybrid", salary: "$40K-$55K", applicants: 75 },
  { title: "Sales Manager", type: "Full-time", location: "On-site", salary: "$65K-$80K", applicants: 70 },
  { title: "HR Coordinator", type: "Contract", location: "Remote", salary: "$50K-$60K", applicants: 60 },
];

const tasks = [
  { title: "Resume Screening", date: "May 17, 2025" },
  { title: "Interview Scheduling", date: "May 20, 2025" },
  { title: "Candidate Communication", date: "May 23, 2025" },
  { title: "Offer Management", date: "May 25, 2025" },
];

const applicants = [
  { name: "Alex Bob", role: "Software Engineer", date: "Apr 15, 2027", type: "Full-time", status: "Interviewing" },
  { name: "Alice Jenson", role: "HR Specialist", date: "Apr 10, 2027", type: "Contract", status: "Shortlisted" },
  { name: "Bob Lee", role: "Sales Associate", date: "Apr 18, 2025", type: "Temporary", status: "Screening" },
  { name: "Mark Brown", role: "Financial Analyst", date: "Apr 22, 2025", type: "Full-time", status: "Job Offer" },
];

const activities = [
  "Darren Wright viewed 15 candidate profiles.",
  "Corey Smith scheduled interviews with 3 candidates.",
  "Rohit submitted customer feedback report.",
  "Offer letter accepted by candidate Mark Brown."
];

const OptimusDashboard = () => {
  const [selectedView, setSelectedView] = useState<"dashboard" | "recruitment">("dashboard");

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <aside className="w-64 bg-white shadow-md p-4">
        <Link href="/">
          <div className="flex items-center space-x-2 mb-6 cursor-pointer">
            <img src="/assets/zordie-logo.png" alt="Zordie Logo" className="w-12 h-13" />
            <h2 className="text-black font-bold text-xl">Zordie</h2>
          </div>
        </Link>
        <nav className="space-y-2">
          <Link href="/">
            <SidebarItem icon={<LayoutDashboard size={20} />} label="Dashboard" />
          </Link>
          <SidebarItem icon={<FileText size={20} />} label="Inbox" />
          <Link href="/CalendarPage">
            <div>
              <SidebarItem icon={<Calendar size={20} />} label="Schedule" />
            </div>
          </Link>
          <SidebarItem icon={<FileText size={20} />} label="Jobs" />
          <Link href="/candidate-dashboard">
            <SidebarItem icon={<Users size={20} />} label="Candidates" />
          </Link>
          <div onClick={() => setSelectedView("recruitment")}>
            <SidebarItem icon={<FileText size={20} />} label="Recruitment Dashboard" />
          </div>
          <SidebarItem icon={<CheckCircle size={20} />} label="Offers" />
          <SidebarItem icon={<DollarSign size={20} />} label="Onboarding" />
        </nav>
        <div className="mt-6">
          <div className="bg-gradient-to-r from-orange-500 to-orange-300 text-white rounded-md p-4 text-center text-sm">
            <p className="mb-2 font-medium">Elevate Your Recruitment Strategy</p>
            <button className="bg-white text-orange-500 font-semibold px-3 py-1 rounded-md hover:bg-gray-100 text-sm">Upgrade Now</button>
          </div>
        </div>
      </aside>

      <main className="flex-1 flex flex-col">
        {selectedView === "dashboard" && (
          <DashboardPage />
        )}
        {selectedView === "recruitment" && (
          <RecruitmentBoard />
        )}
      </main>
    </div>
  );
};

export default OptimusDashboard;