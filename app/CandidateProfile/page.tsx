"use client";

import { useSearchParams } from "next/navigation";
import CandidateProfile from "@/components/CandidateProfile";
import Sidebar from "@/components/Sidebar";

export default function CandidateProfilePage() {
  const params = useSearchParams();
  const candidate = {
    name: params.get("name"),
    email: params.get("email"),
    contact: params.get("contact"),
    img: params.get("img"),
    role: params.get("role"),
    age: params.get("age"),
    degree: params.get("degree"),
    gender: params.get("gender"),
    experience: params.get("experience"),
    matchRate: params.get("matchRate"),
    educationScore: params.get("educationScore"),
    experienceScore: params.get("experienceScore"),
    skillsScore: params.get("skillsScore"),
    ageScore: params.get("ageScore"),
    linkedin: params.get("linkedin"),
    address: params.get("address"),
    // add more fields if needed
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-4 bg-gray-50">
        <CandidateProfile candidate={candidate} />
      </main>
    </div>
  );
}