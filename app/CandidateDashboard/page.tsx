"use client";

import Sidebar from "@/components/Sidebar";
import Joblist from "@/components/Joblist";

export default function CandidateDashboard() {

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-1 bg-gray-50">
        <Joblist />
      </main>
    </div>
  );
}