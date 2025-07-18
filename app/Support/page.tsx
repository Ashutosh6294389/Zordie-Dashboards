"use client";

import Sidebar from "@/components/Sidebar";
import Support from "@/components/Support";

export default function Recruitment() {

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-1 bg-gray-50">
        <Support />
      </main>
    </div>
  );
}