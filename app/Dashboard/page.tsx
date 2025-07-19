"use client";

import Sidebar from "@/components/Sidebar";
import Dashboard from "@/components/DashboardPage";

export default function Dashboard() {

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-1 bg-gray-50">
        <Dashboard />
      </main>
    </div>
  );
}