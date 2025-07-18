"use client";

import Sidebar from "@/components/Sidebar";
import BehaviourScore from "@/components/BehaviourScore";

export default function Behaviour() {

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-1 bg-gray-50">
        <BehaviourScore />
      </main>
    </div>
  );
}