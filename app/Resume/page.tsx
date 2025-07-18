"use client";

import Sidebar from "@/components/Sidebar";
import ResumeScore from "@/components/ResumeScore"

export default function Resume() {

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-1 bg-gray-50">
        <ResumeScore />
      </main>
    </div>
  );
}