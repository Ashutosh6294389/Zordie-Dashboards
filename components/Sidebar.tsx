import React from "react";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-72 min-h-screen bg-white border-r px-6 py-8 flex flex-col">
      <div className="flex items-center mb-12">
        <img src="/assets/zordie-logo.png" alt="Logo" className="w-10 h-10 mr-3" />
        <span className="text-2xl font-bold tracking-wide">ZORDIE</span>
      </div>
      <nav className="flex-1">
        <ul className="space-y-2">
          <li>
            <Link href="/Dashboard" className="flex items-center gap-3 text-gray-400 font-medium py-2 hover:text-green-700 transition">
              <span className="text-xl">▦</span> Dashboard
            </Link>
          </li>
          <li>
            <Link href="/AIChatBot" className="flex items-center gap-3 text-gray-400 font-medium py-2 hover:text-green-700 transition">
              <span className="text-xl">🤖</span> Prime Copilot
            </Link>
          </li>
          <li>
            <Link href="/Recruitment" className="flex items-center gap-3 text-gray-400 font-medium py-2 hover:text-green-700 transition">
              <span className="text-xl">🗃️</span> Recruitment
            </Link>
          </li>
          <li>
            <Link href="/AnalyticsReporting" className="flex items-center gap-3 text-gray-400 font-medium py-2 hover:text-green-700 transition">
              <span className="text-xl">📊</span> Analytics & Reporting 
            </Link>
          </li>
          <li>
            <Link href="/MyJobs" className="flex items-center gap-3 text-gray-400 font-medium py-2 hover:text-green-700 transition">
              <span className="text-xl">🗂️</span> My Jobs
            </Link>
          </li>
          <li>
            <Link href="/CalendarPage" className="flex items-center gap-3 text-gray-400 font-medium py-2 hover:text-green-700 transition">
              <span className="text-xl">🗓️</span> Schedule
            </Link>
          </li>
          <li>
            <Link href="/ComplianceAudit" className="flex items-center gap-3 text-gray-400 font-medium py-2 hover:text-green-700 transition">
              <span className="text-xl">📋</span> Compliance & Audit
            </Link>
          </li>
          <li>
            <Link href="/Support" className="flex items-center gap-3 text-gray-400 font-medium py-2 hover:text-green-700 transition">
              <span className="text-xl">🎧</span> Support
            </Link>
          </li>
          <li>
            <Link href="/Settings" className="flex items-center gap-3 text-gray-400 font-medium py-2 hover:text-green-700 transition">
              <span className="text-xl">⚙️</span> Settings
            </Link>
          </li>
        </ul>
        <div className="mt-10">
          <div className="font-bold text-lg mb-2">People</div>
          <ul className="space-y-2">
            <li>
              <Link href="/Interview" className="flex items-center gap-3 text-gray-400 font-medium py-2 hover:text-green-700 transition">
                <span className="text-xl">🔍</span> Interview
              </Link>
            </li>
            <li>
              <Link href="/CandidateDashboard" className="flex items-center gap-3 font-medium py-2 bg-green-600 text-white rounded-xl px-3 shadow hover:bg-green-700 transition">
                <span className="text-xl">👥</span> Candidates
              </Link>
            </li>
            <li>
              <Link href="/Department" className="flex items-center gap-3 text-gray-400 font-medium py-2 hover:text-green-700 transition">
                <span className="text-xl">💼</span> Department
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
}