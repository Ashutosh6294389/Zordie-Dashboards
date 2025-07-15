"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { User, Video, Calendar as CalendarIcon, Shield, DollarSign, Brain, TrendingUp, FileText } from "lucide-react"
import { useState } from "react"
import Image from 'next/image'

const glass = "backdrop-blur-lg bg-white/60 shadow-2xl border border-white/30";
const animateCard = "transition-transform duration-500 hover:scale-[1.025] hover:shadow-2xl";

function AgentsPayrollAssetCards() {
  return (
    <div className="flex flex-col md:flex-row gap-8 mt-8">
      {/* Laxmi Card */}
      <div className={`${glass} ${animateCard} rounded-2xl p-8 max-w-[540px] min-w-[450px] flex-1 flex flex-col`}>
        {/* Header */}
        <div className="flex items-center gap-4 mb-1">
          <div className="w-12 h-12 rounded-full bg-[#E5E7EB] flex items-center justify-center">
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" fill="#8B8DF6" />
              <circle cx="12" cy="10" r="4" fill="#fff" />
            </svg>
          </div>
          <span className="text-4xl font-extrabold text-[#181C32]">Laxmi</span>
          <span className="ml-3 text-xl font-semibold text-[#3FC98B]">Active</span>
        </div>
        <div className="text-xl text-[#A0AEC0] font-medium mb-12 mt-1">Payroll &amp; Finance Management</div>
        {/* Payroll Status and Donut */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="text-lg text-[#A0AEC0] font-medium mb-2">Payroll Status</div>
            <div className="text-4xl font-bold text-[#6B7280] mb-16">June 30</div>
            <div className="text-lg text-[#A0AEC0] font-medium mb-2">Expense Approvals</div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-4xl font-bold text-[#6B7280]">24</span>
              <span className="text-lg text-[#A0AEC0] font-medium">Pending</span>
            </div>
            <div className="text-base">
              <span className="text-[#FF6B6B] font-semibold">8</span>
              <span className="text-[#A0AEC0] ml-1">urgent (&gt;5 days)</span>
            </div>
          </div>
          {/* Donut Progress */}
          <div className="flex flex-col items-center">
            <svg width="180" height="180" viewBox="0 0 120 120">
              {/* Track */}
              <circle cx="60" cy="60" r="52" stroke="#E5E7EB" strokeWidth="8" fill="none" />
              {/* Progress (85%) */}
              {[...Array(60)].map((_, i) => (
                <rect
                  key={i}
                  x={60}
                  y={8}
                  width={2}
                  height={12}
                  rx={1}
                  fill={i < 51 ? "#3B5BDB" : "#E5E7EB"}
                  transform={`rotate(${i * 6} 60 60)`}
                />
              ))}
              <text x="60" y="62" textAnchor="middle" fill="#6B7280" fontSize="20" fontWeight={500}>85%</text>
              <text x="60" y="82" textAnchor="middle" fill="#6B7280" fontSize="16">Complete</text>
            </svg>
          </div>
        </div>
        <div className="border-b border-[#E9ECF1] my-4"></div>
        {/* Payroll Batch History & Incentive Calculator */}
        <div className="flex justify-between items-end mt-2">
          {/* Payroll Batch History */}
          <div>
            <div className="text-lg text-[#A0AEC0] font-medium mb-2">Payroll Batch History</div>
            <div className="flex flex-col gap-1">
              <div className="flex gap-4 items-center">
                <span className="text-[#6B7280] text-base">May 2025</span>
                <span className="text-[#3FC98B] text-base font-semibold ml-4">Completed</span>
              </div>
              <div className="flex gap-4 items-center">
                <span className="text-[#6B7280] text-base">April 2025</span>
                <span className="text-[#3FC98B] text-base font-semibold ml-4">Completed</span>
              </div>
              <div className="flex gap-4 items-center">
                <span className="text-[#6B7280] text-base">March 2025</span>
                <span className="text-[#3FC98B] text-base font-semibold ml-1">Completed</span>
              </div>
            </div>
          </div>
          {/* Incentive Calculator */}
          <div>
            <div className="text-lg text-[#A0AEC0] font-medium mb-2">Incentive Calculator</div>
            <div className="text-3xl font-bold text-[#181C32] mb-1">$143,250</div>
            <div className="text-base text-[#A0AEC0]">Q2 performance<br />bonus pool</div>
          </div>
        </div>
      </div>
      

      {/* Nova Card */}
      <div className={`${glass} ${animateCard} rounded-2xl p-8 max-w-[540px] min-w-[420px] flex-1 flex flex-col`}>
        {/* Header */}
        <div className="flex items-center gap-4 mb-1">
          <div className="w-12 h-12 rounded-full bg-[#E5E7EB] flex items-center justify-center">
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" fill="#8B8DF6" />
              <circle cx="12" cy="10" r="4" fill="#fff" />
            </svg>
          </div>
          <span className="text-4xl font-extrabold text-[#181C32]">Nova</span>
          <span className="ml-3 text-xl font-semibold text-[#FF6B6B]">Offline</span>
        </div>

        <div className="text-xl text-[#A0AEC0] font-medium mb-8 mt-1">Document &amp; Asset Management</div>
        {/* Legends and Totals - exact layout */}
        <div className="flex items-start justify-between mb-8">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="w-5 h-5 rounded-full bg-[#3FC98B] inline-block" />
              <span className="text-2xl text-[#6B7280]">Document Status</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-5 h-5 rounded-full bg-[#FF6B6B] inline-block" />
              <span className="text-2xl text-[#6B7280]">Asset Tracking</span>
            </div>
          </div>
          <div className="flex flex-col items-end gap-6">
            <span className="text-4xl font-bold text-[#6B7280] leading-none">
              1,247 <span className="text-xl font-normal text-[#A0AEC0]">total</span>
            </span>
            <span className="text-3xl font-bold text-[#A0AEC0] leading-none">
              667 <span className="text-xl font-normal text-[#A0AEC0]">total</span>
            </span>
          </div>
        </div>
        
        {/* Bar Chart */}
        <div className="w-full h-56 flex items-center justify-center mb-2">
          <svg width="420" height="180" viewBox="0 0 420 180" fill="none">
            {/* Y-axis grid lines */}
            {[0, 600, 1200, 1800, 2400].map((y, i) => (
              <g key={y}>
                <text x="0" y={170 - (i * 35)} fill="#A0AEC0" fontSize="16" fontFamily="inherit">{y}</text>
                <line x1="40" y1={170 - (i * 35)} x2="400" y2={170 - (i * 35)} stroke="#E9ECF1" strokeWidth="2"/>
              </g>
            ))}
            {/* Bars for 5 days */}
            {[0, 1, 2, 3, 4].map((d) => {
              const docHeight = 120;
              const assetHeight = 80;
              const x = 60 + d * 70;
              return (
                <g key={d}>
                  {/* Document Status */}
                  <rect x={x} y={170 - docHeight} width={12} height={docHeight} rx={6} fill="#3FC98B" />
                  {/* Asset Tracking */}
                  <rect x={x + 20} y={170 - assetHeight} width={12} height={assetHeight} rx={6} fill="#FF6B6B" />
                </g>
              );
            })}
          </svg>
        </div>
        {/* Vendor Verification & Document Access */}
        <div className="flex justify-between mt-2">
          {/* Vendor Verification */}
          <div>
            <div className="text-lg text-[#A0AEC0] font-medium mb-2">Vendor Verification</div>
            <div className="flex flex-col gap-1">
              <div className="flex gap-4 items-center">
                <span className="text-[#6B7280] text-base">Verified</span>
                <span className="text-[#3FC98B] text-base font-semibold">24</span>
              </div>
              <div className="flex gap-4 items-center">
                <span className="text-[#6B7280] text-base">Pending</span>
                <span className="text-[#FFA14A] text-base font-semibold">8</span>
              </div>
              <div className="flex gap-4 items-center">
                <span className="text-[#6B7280] text-base">Rejected</span>
                <span className="text-[#FF6B6B] text-base font-semibold">3</span>
              </div>
            </div>
          </div>
          {/* Document Access History */}
          <div>
            <div className="text-lg text-[#A0AEC0] font-medium mb-2">Document Access History</div>
            <div className="w-56 h-20 rounded-xl bg-[#F8F6F6] border border-[#F2F2F2]" />
          </div>
        </div>
      </div>
    </div>
  )
}


function BonusesAndIncentivesCard() {
  return (
    <div className={`${glass} ${animateCard} rounded-[2.5rem] shadow p-0 mb-8 w-full max-w-[480px] mx-auto relative overflow-hidden`} style={{ minHeight: 480 }}>
      {/* Title and expand icon */}
      <div className="flex items-center justify-between px-10 pt-10 pb-2">
        <span className="text-[2.2rem] font-bold text-[#181C32]">Bonuses and Incentives</span>
        <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow absolute right-10 top-10">
          <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#181C32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      {/* Arc Dots Chart */}
      <div className="relative flex flex-col items-center justify-center mt-2 mb-4" style={{ minHeight: 260 }}>
        <svg width="380" height="260" viewBox="0 0 380 260" fill="none" className="block">
          {/* Outer arc dots (blue) */}
          {[...Array(17)].map((_, i) => {
            const angle = Math.PI * (i / 16) - Math.PI / 2;
            const x = 190 - Math.cos(angle) * 140;
            const y = 170 - Math.sin(angle) * 140;
            return (
              <circle
                key={`outer-${i}`}
                cx={x}
                cy={y}
                r="15"
                fill={`rgba(60, 120, 255, ${0.18 + 0.65 * (i / 16)})`}
              />
            );
          })}
          {/* Outer arc dots (blue) */}
          {[...Array(17)].map((_, i) => {
            const angle = Math.PI * (i / 16) - Math.PI / 2;
            const x = 190 + Math.cos(angle) * 140;
            const y = 170 - Math.sin(angle) * 140;
            return (
              <circle
                key={`outer-${i}`}
                cx={x}
                cy={y}
                r="15"
                fill={`rgba(60, 120, 255, ${0.18 + 0.65 * (i / 16)})`}
              />
            );
          })}
          {/* Inner arc dots (green) */}
          {[...Array(9)].map((_, i) => {
            const angle = Math.PI * (i / 8) - Math.PI / 2;
            const x = 190 - Math.cos(angle) * 90;
            const y = 170 - Math.sin(angle) * 90;
            return (
              <circle
                key={`inner-${i}`}
                cx={x}
                cy={y}
                r="14"
                fill={`rgba(60, 180, 120, ${0.22 + 0.65 * (i / 8)})`}
              />
            );
          })}
          {/* Inner arc dots (green) */}
          {[...Array(9)].map((_, i) => {
            const angle = Math.PI * (i / 8) - Math.PI / 2;
            const x = 190 + Math.cos(angle) * 90;
            const y = 170 - Math.sin(angle) * 90;
            return (
              <circle
                key={`inner-${i}`}
                cx={x}
                cy={y}
                r="13"
                fill={`rgba(60, 180, 120, ${0.22 + 0.65 * (i / 8)})`}
              />
            );
          })}
        </svg>
        {/* Centered Totals */}
        <div className="absolute left-0 right-0 top-[120px] flex flex-col items-center pointer-events-none my-2">
          <span className="text-xl text-[#181C32] font-medium">Totals</span>
          <span className="text-4xl font-bold text-[#181C32] mt-1">$10,250</span>
        </div>
      </div>
      {/* Bonuses and Incentives */}
      <div className="flex items-end justify-between px-10 mt-2 mb-2">
        <div className="flex flex-col items-start">
          <span className="text-[1rem] text-[#181C32] font-semibold mb-1">Bonuses</span>
          <span className="text-[2rem] font-bold text-[#181C32] leading-tight">$8,097</span>
          <span className="text-[#3B82F6] text-base font-semibold mt-1">+19.6%</span>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-[1rem] text-[#181C32] font-semibold mb-1">Incentives</span>
          <span className="text-[2rem] font-bold text-[#181C32] leading-tight">$312,101</span>
          <span className="text-[#3B82F6] text-base font-semibold mt-1">2.6%</span>
        </div>
      </div>
      {/* More details button */}
      <div className="flex justify-center mt-6 pb-10">
        <button className="bg-white rounded-xl px-8 py-4 text-lg font-medium text-[#181C32] shadow border border-[#E9ECF1] w-[85%]">More details</button>
      </div>
    </div>
  );
}

function SalaryBreakdownCard() {
  return (
    <div className={`${glass} ${animateCard} rounded-[2.5rem] shadow p-0 w-full max-w-[480px] mx-auto relative overflow-hidden min-h-[420px] flex flex-col justify-between`}>
      {/* Basic Salary */}
      <div className="px-6 pt-8">
        <div className="bg-[#ED7D31] rounded-[2rem] flex items-center justify-between px-8 py-3 mb-6 border-2 border-white">
          <span className="text-2xl font-light text-white">Basic salary</span>
          <span className="text-xl font-light text-white">$2,040</span>
        </div>
        {/* Perform */}
        <div className="bg-white rounded-[2rem] flex items-center justify-between px-8 py-3 mb-6 border-2 border-[#E5E7EB] w-[80%]">
          <span className="text-2xl font-light text-black">Perform</span>
          <span className="text-xl font-light text-black">$300</span>
        </div>
        {/* Gift */}
        <div className="bg-[#ED7D31] rounded-[2rem] flex items-center justify-between px-8 py-3 mb-6 border-2 border-white w-[50%]">
          <span className="text-2xl font-light text-white">Gift</span>
          <span className="text-xl font-light text-white">$200</span>
        </div>
      </div>
      {/* Payment summary */}
      <div className="absolute right-10 top-1/2 -translate-y-1/10 flex flex-col items-end">
        <span className="text-2xl text-white font-light mb-1">Payment</span>
        <span className="text-xl text-white font-light mb-1">100%</span>
        <span className="text-xl text-white font-light">Take home pay</span>
        <span className="text-2xl text-white font-light">$2,540.00</span>
      </div>
      {/* Bottom icons */}
      <div className="flex items-center gap-8 px-8 pb-8 mt-8">
        <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow">
          {/* Document Icon */}
          <svg width="40" height="40" fill="none" viewBox="0 0 24 24">
            <rect x="4" y="4" width="16" height="16" rx="4" fill="#4099F7" />
            <path d="M8 8h8v8H8V8z" fill="#fff" />
          </svg>
        </div>
        <div className="relative">
          <div className="w-20 h-20 rounded-full bg-[#E5E7EB] flex items-center justify-center shadow">
            {/* Card Icon */}
            <svg width="40" height="40" fill="none" viewBox="0 0 24 24">
              <rect x="4" y="4" width="16" height="16" rx="4" fill="#4099F7" />
              <path d="M8 8h8v8H8V8z" fill="#fff" />
            </svg>
          </div>
          <span className="absolute -top-2 -right-2 bg-[#222] text-white text-lg font-bold rounded-full w-8 h-8 flex items-center justify-center">2</span>
        </div>
      </div>
    </div>
  );
}

function AgentsOverviewCards() {
  return (
    <div className="flex flex-col md:flex-row gap-8 mt-8">
    <div className={`${glass} ${animateCard} rounded-2xl p-8 max-w-[520px] min-w-[450px] mx-auto`}>
      {/* Header */}
      <div className="flex items-center gap-4 mb-2">
        <div className="w-12 h-12 rounded-full bg-[#E5E7EB] flex items-center justify-center">
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" fill="#8B8DF6" />
            <circle cx="12" cy="10" r="4" fill="#fff" />
          </svg>
        </div>
        <span className="text-4xl font-extrabold text-[#181C32]">Optimus</span>
        <span className="ml-3 text-xl font-semibold text-[#FF6B6B]">Offline</span>
      </div>
      <div className="text-xl text-[#A0AEC0] font-medium mb-6 mt-1">Recruitment &amp; Talent Acquisition</div>
      {/* Donut and Legend */}
      <div className="flex justify-between items-center mb-8">
        {/* Left legend */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="w-4 h-4 rounded-full bg-[#3FC98B] inline-block" />
            <span className="text-lg text-[#6B7280]">Screening</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-4 h-4 rounded-full bg-[#4CC9F0] inline-block" />
            <span className="text-lg text-[#6B7280]">Interview</span>
          </div>
        </div>
        {/* Donut */}
        <div className="relative flex flex-col items-center">
          <svg width="170" height="170" viewBox="0 0 120 120">
            {/* Screening */}
            <circle cx="60" cy="60" r="48" stroke="#3FC98B" strokeWidth="12" fill="none" strokeDasharray="150 300" strokeDashoffset="0" />
            {/* Interview */}
            <circle cx="60" cy="60" r="48" stroke="#4CC9F0" strokeWidth="12" fill="none" strokeDasharray="60 300" strokeDashoffset="150" />
            {/* Offer */}
            <circle cx="60" cy="60" r="48" stroke="#FFA14A" strokeWidth="12" fill="none" strokeDasharray="45 300" strokeDashoffset="210" />
            {/* Hired */}
            <circle cx="60" cy="60" r="48" stroke="#FF6B6B" strokeWidth="12" fill="none" strokeDasharray="45 300" strokeDashoffset="255" />
            <text x="60" y="65" textAnchor="middle" fill="#A0AEC0" fontSize="16" fontWeight={500}>Recruitment</text>
            <text x="60" y="82" textAnchor="middle" fill="#A0AEC0" fontSize="16" fontWeight={500}>Pipeline</text>
          </svg>
        </div>
        {/* Right legend */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="w-4 h-4 rounded-full bg-[#FFA14A] inline-block" />
            <span className="text-lg text-[#6B7280]">Offer</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-4 h-4 rounded-full bg-[#FF6B6B] inline-block" />
            <span className="text-lg text-[#6B7280]">Hired</span>
          </div>
        </div>
      </div>
      {/* Stats Row */}
      <div className="flex justify-between items-end mb-4">
        <div>
          <div className="text-lg text-[#A0AEC0] font-medium">Time-to-Hire (avg.)</div>
          <div className="flex items-end gap-1">
            <span className="text-4xl font-bold text-[#181C32]">23.5</span>
            <span className="text-lg text-[#6B7280] mb-1">days</span>
          </div>
        </div>
        <div>
          <div className="text-lg text-[#A0AEC0] font-medium">Open Positions</div>
          <div className="flex items-end gap-2">
            <span className="text-4xl font-bold text-[#181C32]">17</span>
            <span className="text-lg text-[#3FC98B] mb-1">8 in progress</span>
          </div>
        </div>
      </div>
      <div className="border-b border-[#E9ECF1] my-4"></div>
      {/* Engagement & Referral */}
      <div className="flex justify-between items-end">
        {/* Candidate Engagement */}
        <div>
          <div className="text-lg text-[#A0AEC0] font-medium mb-2">Candidate Engagement</div>
          <div className="flex items-center gap-2 mb-1">
            <div className="w-32 h-3 rounded-full bg-[#E9ECF1] overflow-hidden flex">
              <div className="h-3 bg-[#3FC98B] rounded-l-full" style={{ width: "87%" }} />
              <div className="h-3 bg-[#E9ECF1]" style={{ width: "13%" }} />
            </div>
          </div>
          <span className="text-[#3FC98B] text-base font-semibold">87% response rate</span>
        </div>
        {/* Referral Tracking */}
        <div>
          <div className="text-lg text-[#A0AEC0] font-medium mb-2">Referral Tracking</div>
          <div className="flex items-center gap-2">
            <span className="text-3xl font-bold text-[#181C32]">12</span>
            <span className="text-base text-[#A0AEC0]">new this month</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-3xl font-bold text-[#181C32]">3</span>
            <span className="text-base text-[#A0AEC0]">hired this month</span>
          </div>
        </div>
      </div>
    </div>

      {/* Maxi Card */}
      <div className={`${glass} ${animateCard} rounded-2xl p-8 flex-1 min-w-[380px] max-w-[540px]`}>
        <div className="flex items-center gap-4 mb-2">
          <div className="w-10 h-10 rounded-full bg-[#E5E7EB] flex items-center justify-center">
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" fill="#8B8DF6" />
              <circle cx="12" cy="10" r="4" fill="#fff" />
            </svg>
          </div>
          <span className="text-3xl font-extrabold text-[#181C32]">Maxi</span>
          <span className="ml-4 text-xl font-semibold text-[#3FC98B]">Active</span>
          <span className="ml-auto text-xl text-[#A0AEC0] font-semibold">82%</span>
        </div>
        <div className="text-lg text-[#A0AEC0] mb-6">Performance &amp; Learning Management</div>
        <div className="flex flex-col gap-4">
          {/* OKR Progress & Training Completion */}
          <div className="flex gap-8">
            <div className="flex-1">
              <div className="text-[#A0AEC0] text-base mb-1">OKR Progress</div>
              <div className="w-full h-2 rounded bg-[#E9ECF1] overflow-hidden mb-1">
                <div className="h-2 bg-[#FFA14A]" style={{ width: "68%" }} />
              </div>
              <div className="text-[#A0AEC0] text-sm">Q2 Progress <span className="ml-16 text-[#181C32] font-semibold">68%</span></div>
            </div>
            <div className="flex-1">
              <div className="text-[#A0AEC0] text-base mb-1">Training Completion</div>
              <div className="w-full h-2 rounded bg-[#E9ECF1] overflow-hidden mb-1">
                <div className="h-2 bg-[#3FC98B]" style={{ width: "82%" }} />
              </div>
              <div className="text-[#A0AEC0] text-sm">Mandatory courses</div>
            </div>
          </div>
          {/* Attendance Overview */}
          <div>
            <div className="text-[#A0AEC0] text-base mb-16">Attendance Overview (Last 7 days)</div>
            <div className="flex items-end gap-12 h-28">
              {/* Example bars */}
              <div className="flex flex-col items-center">
                <div className="w-4 rounded-t bg-[#3FC98B]" style={{ height: "120px" }} />
                <span className="text-[#A0AEC0] text-sm mt-1">M</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-4 rounded-t bg-[#3FC98B]" style={{ height: "140px" }} />
                <span className="text-[#A0AEC0] text-sm mt-1">T</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-4 rounded-t bg-[#4CC9F0]" style={{ height: "130px" }} />
                <span className="text-[#A0AEC0] text-sm mt-1">W</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-4 rounded-t bg-[#FF6B6B]" style={{ height: "110px" }} />
                <span className="text-[#A0AEC0] text-sm mt-1">T</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-4 rounded-t bg-[#4CC9F0]" style={{ height: "150px" }} />
                <span className="text-[#A0AEC0] text-sm mt-1">F</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-4 rounded-t bg-[#3FC98B]" style={{ height: "125px" }} />
                <span className="text-[#A0AEC0] text-sm mt-1">S</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-4 rounded-t bg-[#3FC98B]" style={{ height: "130px" }} />
                <span className="text-[#A0AEC0] text-sm mt-1">S</span>
              </div>
            </div>
          </div>
          {/* Employee Feedback */}
          <div className="flex items-start justify-between mt-8">
            {/* Left: Employee Feedback */}
            <div>
              <div className="text-xl text-[#6B7280] font-medium mb-2">Employee Feedback</div>
              <div className="flex items-center gap-3">
                <span className="text-xl font-bold text-[#6B7280]">4</span>
                {/* 4 orange stars, 1 gray star */}
                <span className="flex items-center text-xl">
                  <span className="text-[#FFA14A]">★</span>
                  <span className="text-[#FFA14A]">★</span>
                  <span className="text-[#FFA14A]">★</span>
                  <span className="text-[#FFA14A]">★</span>
                  <span className="text-[#E5E7EB]">★</span>
                </span>
                <span className="text-[#6B7280] text-sm ml-2">Based on 187 responses</span>
              </div>
            </div>
            {/* Right: Status Legend */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="w-4 h-4 rounded-full bg-[#3FC98B] inline-block" />
                <span className="text-sm text-[#6B7280]">On track: 7</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-4 h-4 rounded-full bg-[#4CC9F0] inline-block" />
                <span className="text-sm text-[#6B7280]">At risk: 2</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-4 h-4 rounded-full bg-[#FFA14A] inline-block" />
                <span className="text-sm text-[#6B7280]">Delayed: 1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ...existing code...

// In your HrAnalyticsDashboard component, add this where you want the cards to appear on the left side.
// For example, place it just above your main grid of analytics/statistics cards:

// ...existing code...
{/* Agents Overview Cards - Place this at the top of the left column */}

const cardData = [
  {
    title: "Total Employees",
    value: "1,247",
    icon: <User className="w-8 h-8 text-[#8B8DF6]" />,
    trend: "+2.1% vs last month",
    trendColor: "text-[#3FC98B]",
    trendIcon: <TrendingUp className="w-4 h-4 text-[#3FC98B]" />,
    subtitle: "",
    highlight: false,
    extra: null,
    bgIcon: "bg-[#F3F4FE]",
  },
  {
    title: "Live Agent Status",
    value: "6 / 7",
    icon: <Video className="w-8 h-8 text-[#4CC9F0]" />,
    trend: "1 agent failing",
    trendColor: "text-[#FFA14A]",
    trendIcon: <TrendingUp className="w-4 h-4 text-[#FFA14A]" />,
    subtitle: "",
    highlight: false,
    extra: (
      <div className="flex items-center gap-1 mt-3">
        <div className="flex-1 flex gap-1 mb-8">
          <div className="h-2 w-8 rounded bg-[#3FC98B]" />
          <div className="h-2 w-8 rounded bg-[#3FC98B]" />
          <div className="h-2 w-8 rounded bg-[#FFA14A]" />
          <div className="h-2 w-8 rounded bg-[#3FC98B]" />
          <div className="h-2 w-8 rounded bg-[#3FC98B]" />
          <div className="h-2 w-8 rounded bg-[#3FC98B]" />
          <div className="h-2 w-8 rounded bg-[#FF6B6B]" />
        </div>
      </div>
    ),
    bgIcon: "bg-[#E6F8FB]",
  },
  {
    title: "Payroll Tracker",
    value: "Jun 30",
    icon: <DollarSign className="w-8 h-8 text-[#FFA14A]" />,
    trend: "Next payroll date",
    trendColor: "",
    trendIcon: null,
    subtitle: "",
    highlight: false,
    extra: (
      <>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-sm text-gray-500">Readiness</span>
          <div className="flex-1 h-2 rounded bg-gray-200 overflow-hidden">
            <div className="h-2 bg-[#FFA14A]" style={{ width: "85%" }} />
          </div>
          <span className="text-sm text-gray-500">85%</span>
        </div>
        <div className="text-gray-400 text-sm mt-2">3 pending approvals needed</div>
      </>
    ),
    bgIcon: "bg-[#FFF3E6]",
  },
  {
    title: "Attendance Anomalies",
    value: "12",
    icon: <CalendarIcon className="w-8 h-8 text-[#FFA14A]" />,
    trend: "4 vs last month",
    trendColor: "text-[#FF6B6B]",
    trendIcon: <TrendingUp className="w-4 h-4 text-[#FF6B6B]" />,
    subtitle: "",
    highlight: true,
    extra: (
      <div className="flex gap-2 mt-4">
        <div className="flex-1 text-center">
          <div className="text-xs text-gray-500">Late arrivals</div>
          <div className="bg-[#FFD9B3] rounded-lg py-1 mt-1 font-bold text-[#FFA14A]">7</div>
        </div>
        <div className="flex-1 text-center">
          <div className="text-xs text-gray-800">Absences</div>
          <div className="bg-[#FFD9B3] rounded-lg py-1 mt-1 font-bold text-[#FFA14A]">3</div>
        </div>
        <div className="flex-1 text-center">
          <div className="text-xs text-gray-500">Early exits</div>
          <div className="bg-[#FFD9B3] rounded-lg py-1 mt-1 font-bold text-[#FFA14A]">2</div>
        </div>
      </div>
    ),
    bgIcon: "bg-[#FFF3E6]",
  },
  {
    title: "Compliance Warnings",
    value: "5",
    icon: <Shield className="w-8 h-8 text-[#FFA14A]" />,
    trend: "Requires attention",
    trendColor: "text-[#FFA14A]",
    trendIcon: <TrendingUp className="w-4 h-4 text-[#FFA14A]" />,
    subtitle: "",
    highlight: false,
    extra: (
      <ul className="mt-4 space-y-1 text-sm">
        <li className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#FFA14A] inline-block" />
          <span className="text-gray-500">3 policy documents expiring</span>
        </li>
        <li className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#FFA14A] inline-block" />
          <span className="text-gray-500">2 background checks pending</span>
        </li>
      </ul>
    ),
    bgIcon: "bg-[#FFF3E6]",
  },
  {
    title: "Smart Suggestions",
    value: "4",
    icon: <Brain className="w-8 h-8 text-[#3FC98B]" />,
    trend: "New recommendations",
    trendColor: "text-[#3FC98B]",
    trendIcon: null,
    subtitle: "",
    highlight: false,
    extra: (
      <ul className="mt-4 space-y-1 text-sm">
        <li className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#FFA14A] inline-block" />
          <span className="text-gray-500">Schedule quarterly performance reviews</span>
        </li>
        <li className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#3FC98B] inline-block" />
          <span className="text-gray-500">Review compensation for 5 key roles</span>
        </li>
      </ul>
    ),
    bgIcon: "bg-[#E6F8F3]",
  },
]

export default function HrAnalyticsDashboard() {
  return (
    <div className="p-6 bg-[#f7f8fa] min-h-screen">
      {/* Header */}
      <Card className={`${glass} ${animateCard} mb-6`}>
        <CardContent className="flex items-center gap-4 py-6">
          <img src="images/People_1.png" alt="User" className="w-12 h-12 rounded-full" />
          <div>
            <div className="font-semibold text-lg">Welcome Back, Aiden</div>
            <div className="text-sm text-muted-foreground">
              You have <span className="text-primary font-medium text-red-500">21</span> Pending Approvals &amp; <span className="text-red-500 font-medium">14</span> Leave Requests
            </div>
          </div>
          <div className="ml-auto flex gap-2">
            <Button variant="ghost" size="icon"><DownloadIcon /></Button>
            <Button variant="ghost" size="icon"><FileText /></Button>
          </div>
        </CardContent>
      </Card>

      {/* Main Layout: 6 cards in 2x3 grid, big card on the right */}
      <div className="flex flex-col xl:flex-row gap-8">
        {/* Left: 2 rows x 3 cols grid for 6 cards */}
        <div className="flex-1 flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-x-6 gap-y-4">
            {cardData.slice(0, 6).map((card) => (
              <div
                key={card.title}
                className={`${glass} ${animateCard} rounded-2xl shadow-sm p-4 flex flex-col h-full relative border border-[#F2F2F2] min-h-[200px] max-h-[220px]`}
              >
                <div className={`absolute top-2 right-2 rounded-full p-2 ${card.bgIcon}`}>
                  {card.icon}
                </div>
                <div className="text-xl font-medium text-[#6B7280] mb-2">{card.title}</div>
                <div className="flex items-center mb-1">
                  <span className="text-4xl font-bold text-[#181C32]">{card.value}</span>
                  {card.trend && (
                    <span className={`flex items-center ml-3 ${card.trendColor} font-medium`}>
                      {card.trendIcon}
                      <span className="ml-1">{card.trend}</span>
                    </span>
                  )}
                </div>
                {card.subtitle && (
                  <div className="text-base text-[#A0AEC0]">{card.subtitle}</div>
                )}
                {card.extra}
              </div>
            ))}
          </div>
          {/* Sales Overview Card */}
          <div className={`${glass} ${animateCard} rounded-2xl shadow-sm p-8 mt-4 border border-[#F2F2F2]`}>
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="text-4xl font-bold text-[#181C32] mb-2">Sales Overview</div>
                <div className="flex items-center gap-6 mt-2">
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-4 h-4 rounded bg-[#FFA14A]" />
                    <span className="text-xl text-[#181C32] font-medium">Income</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-4 h-4 rounded bg-[#E9ECF1]" />
                    <span className="text-xl text-[#181C32] font-medium">Expenses</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl text-[#FFA14A] font-medium">All departments</span>
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path d="M7 10l5 5 5-5" stroke="#FFA14A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            {/* Bar Chart */}
            <div className="w-full overflow-x-auto">
              <svg width="100%" height="320" viewBox="0 0 1100 320" fill="none" style={{ minWidth: 900 }}>
                {/* Y-axis grid lines and labels */}
                <g>
                  <text x="0" y="50" fill="#A0AEC0" fontSize="32" fontFamily="inherit">5K</text>
                  <line x1="60" y1="60" x2="1050" y2="60" stroke="#E9ECF1" strokeWidth="3"/>
                  <text x="0" y="140" fill="#A0AEC0" fontSize="32" fontFamily="inherit">2K</text>
                  <line x1="60" y1="150" x2="1050" y2="150" stroke="#E9ECF1" strokeWidth="3"/>
                  <text x="0" y="230" fill="#A0AEC0" fontSize="32" fontFamily="inherit">1K</text>
                  <line x1="60" y1="240" x2="1050" y2="240" stroke="#E9ECF1" strokeWidth="3"/>
                  <text x="0" y="320" fill="#A0AEC0" fontSize="32" fontFamily="inherit">0</text>
                  <line x1="60" y1="320" x2="1050" y2="320" stroke="#E9ECF1" strokeWidth="3"/>
                </g>
                {/* Bars */}
                {[
                  {income: 150, expense: 110, label: "Jan"},
                  {income: 180, expense: 90, label: "Feb"},
                  {income: 270, expense: 60, label: "Mar"},
                  {income: 140, expense: 110, label: "Apr"},
                  {income: 210, expense: 90, label: "May"},
                  {income: 300, expense: 40, label: "Jun"},
                  {income: 220, expense: 80, label: "Jul"},
                  {income: 150, expense: 110, label: "Aug"},
                  {income: 260, expense: 60, label: "Sep"},
                  {income: 180, expense: 90, label: "Oct"},
                  {income: 210, expense: 90, label: "Nov"},
                  {income: 140, expense: 110, label: "Dec"},
                ].map((d, i) => {
                  // Bar width and spacing
                  const barWidth = 40;
                  const barSpacing = 84;
                  const x = 90 + i * barSpacing;
                  // SVG y=0 is top, so invert
                  const maxBarHeight = 260;
                  const incomeHeight = (d.income / 320) * maxBarHeight + 60;
                  const expenseHeight = (d.expense / 320) * maxBarHeight;
                  return (
                    <g key={d.label}>
                      {/* Expenses (background) */}
                      <rect
                        x={x}
                        y={60}
                        width={barWidth}
                        height={maxBarHeight}
                        rx={12}
                        fill="#E9ECF1"
                      />
                      {/* Income (foreground) */}
                      <rect
                        x={x}
                        y={60 + maxBarHeight - incomeHeight}
                        width={barWidth}
                        height={incomeHeight}
                        rx={12}
                        fill="url(#incomeGradient)"
                      />
                      {/* Month label */}
                      <text
                        x={x + barWidth / 2}
                        y={350}
                        textAnchor="middle"
                        fill="#A0AEC0"
                        fontSize="32"
                        fontFamily="inherit"
                      >
                        {d.label}
                      </text>
                    </g>
                  );
                })}
                {/* Income gradient */}
                <defs>
                  <linearGradient id="incomeGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#FFA14A" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#FFA14A" stopOpacity="0.6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          {/* Employees By Department & Active Employees */}
          <div className="flex flex-col lg:flex-row gap-4 mt-8">
            {/* Employees By Department Card */}
            <div className={`${glass} ${animateCard} rounded-2xl shadow-sm p-8 border border-[#F2F2F2] flex-1 max-w-[480px]`}>
              <div className="flex items-center justify-between mb-6">
                <div className="text-xl font-bold text-[#181C32]">Employees By Department</div>
                <div className="flex items-center gap-2">
                  <span className="text-xl text-[#FFA14A] font-semibold">This week</span>
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path d="M7 10l5 5 5-5" stroke="#FFA14A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="border-b border-[#E9ECF1] mb-6"></div>
              {/* Bar Chart */}
              <div className="w-full">
                {[
                  { label: "UI/UX", value: 170 },
                  { label: "Development", value: 190 },
                  { label: "Management", value: 160 },
                  { label: "HR", value: 100 },
                  { label: "Testing", value: 130 },
                  { label: "Marketing", value: 180 },
                ].map((d, i) => (
                  <div key={d.label} className="flex items-center mb-6 last:mb-0">
                    <div className="w-32 text-lg text-[#6B7280]">{d.label}</div>
                    <div className="flex-1 flex items-center">
                      <div className="h-4 rounded-full bg-gradient-to-r from-[#FFA14A] to-[#FF8C3E]" style={{ width: `${d.value}px`, minWidth: 24 }}></div>
                      <span className="ml-4 text-[#A0AEC0] text-lg">{d.value-80}</span>
                    </div>
                  </div>
                ))}
                {/* X-axis labels */}
                <div className="flex items-center mt-2 ml-32 gap-4">
                  {[0, 20, 40, 60, 80, 100, 120].map((v) => (
                    <span key={v} className="text-[#A0AEC0] text-base">{v}</span>
                  ))}
                </div>
              </div>
            </div>
            {/* Active Employees Card */}
            <div className={`${glass} ${animateCard} rounded-2xl shadow-sm p-8 border border-[#F2F2F2] flex-1 min-w-[380px]`}>
              <div className="flex items-center justify-between mb-6">
                <div className="text-2xl font-bold text-[#181C32]">Active Employees</div>
                <button className="bg-[#F3F4F6] text-[#6B7280] rounded-lg px-4 py-1 font-semibold text-lg">View All</button>
              </div>
              <div className="grid grid-cols-2 mb-4 gap-36">
                <div className="text-lg text-[#A0AEC0] font-semibold">Names</div>
                <div className="text-lg text-[#A0AEC0] font-semibold">Department</div>
              </div>
              <div className="space-y-6">
                {/* Employee 1 */}
                <div className="grid grid-cols-2 items-center">
                  <div className="flex items-center gap-4">
                    <img src="/images/People_2.png" alt="User" className="w-12 h-12 rounded-full" />
                    <div>
                      <div className="text-lg font-semibold text-[#181C32]">Roselle Ehrman</div>
                      <div className="text-[#A0AEC0] text-base">Brazil</div>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <span className="bg-[#CFE1FF] text-[#181C32] px-4 py-1 rounded-lg text-lg font-medium">Finance</span>
                  </div>
                </div>
                {/* Employee 2 */}
                <div className="grid grid-cols-2 items-center">
                  <div className="flex items-center gap-4">
                    <img src="/images/People_3.png" alt="User" className="w-12 h-12 rounded-full" />
                    <div>
                      <div className="text-lg font-semibold text-[#181C32]">Jone Smith</div>
                      <div className="text-[#A0AEC0] text-base">Australia</div>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <span className="bg-[#FFD9B3] text-[#181C32] px-4 py-1 rounded-lg text-lg font-medium">Development</span>
                  </div>
                </div>
                {/* Employee 3 */}
                <div className="grid grid-cols-2 items-center">
                  <div className="flex items-center gap-4">
                    <img src="/images/People_4.png" alt="User" className="w-12 h-12 rounded-full" />
                    <div>
                      <div className="text-lg font-semibold text-[#181C32]">Darron Handler</div>
                      <div className="text-[#A0AEC0] text-base">Greece</div>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <span className="bg-[#FFD6DB] text-[#181C32] px-4 py-1 rounded-lg text-lg font-medium">Marketing</span>
                  </div>
                </div>
                {/* Employee 4 */}
                <div className="grid grid-cols-2 items-center">
                  <div className="flex items-center gap-4">
                    <img src="/images/People_5.png" alt="User" className="w-12 h-12 rounded-full" />
                    <div>
                      <div className="text-lg font-semibold text-[#181C32]">Leatrice Kulik</div>
                      <div className="text-[#A0AEC0] text-base">Moscow</div>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <span className="bg-[#B6F5E7] text-[#181C32] px-4 py-1 rounded-lg text-lg font-medium">Manager</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
              <AgentsOverviewCards />
              <AgentsPayrollAssetCards />
        </div>
        {/* Right: Talent Recruitment Card, full height of 2 rows */}
        <div className={`${glass} ${animateCard} flex flex-col justify-stretch min-h-full xl:ml-0 xl:w-[460px] w-full gap-2`}>
          {/* Talent Recruitment Card */}
          <div className="bg-[#F8FAFB] rounded-2xl shadow-sm p-8 flex flex-col border border-[#F2F2F2] h-full max-h-[680px]">
            <div className="mb-2 text-sm font-semibold text-[#222]">Hiring statistics</div>
            <div className="text-2xl font-bold text-[#181C32] mb-6">Talent recruitment</div>
            <div className="flex items-center gap-6 mb-6">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-xl bg-[#F3F4F6] flex items-center justify-center overflow-hidden">
                  <img src="/images/People_2.png" alt="Talent 1" className="w-14 h-14 object-cover rounded-xl" />
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-xl bg-[#F3F4F6] flex items-center justify-center overflow-hidden">
                  <img src="/images/People_3.png" alt="Talent 2" className="w-14 h-14 object-cover rounded-xl" />
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-xl bg-[#0066FF] flex items-center justify-center">
                  <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                    <rect width="24" height="24" rx="8" fill="#0066FF" />
                    <g>
                      <rect x="6" y="6" width="12" height="12" rx="6" fill="#fff" />
                      <path d="M12 9v3m0 0v3m0-3h3m-3 0H9" stroke="#0066FF" strokeWidth="1.5" strokeLinecap="round" />
                    </g>
                  </svg>
                </div>
                <span className="text-xs text-[#0066FF] mt-1">ongoing</span>
              </div>
            </div>
            <div className="flex items-center gap-8 mb-2">
              <div className="text-center">
                <div className="text-lg font-semibold text-[#222]">120</div>
                <div className="text-xs text-[#A0AEC0]">Total Talent</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-[#222]">80</div>
                <div className="text-xs text-[#A0AEC0]">screened</div>
              </div>
            </div>
            {/* Matched/Not match bar */}
            <div className="flex items-center gap-1 mb-2">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="w-3 h-6 rounded bg-[#3FC98B]" />
              ))}
              {[...Array(6)].map((_, i) => (
                <div key={i} className="w-3 h-6 rounded bg-[#E5E7EB]" />
              ))}
            </div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#3FC98B] inline-block" />
                <span className="text-xs text-[#A0AEC0]">Matched</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#E5E7EB] inline-block" />
                <span className="text-xs text-[#A0AEC0]">Not match</span>
              </div>
            </div>
            {/* Average Time Chart */}
            <div className="flex items-center justify-between mb-2">
              <div>
                <div className="font-bold text-base text-[#181C32]">Average Time</div>
                <div className="text-lg font-bold text-[#222]">50<span className="text-sm font-normal">sec/per screening</span></div>
              </div>
              <div className="flex-1 flex justify-end">
                {/* Simple chart mockup */}
                <svg width="120" height="60" viewBox="0 0 120 60" fill="none">
                  <defs>
                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="60" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#B3D1FF" stopOpacity="0.7" />
                      <stop offset="1" stopColor="#fff" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                  <rect x="0" y="0" width="120" height="60" fill="url(#chartGradient)" />
                  <polyline
                    points="0,40 15,35 30,38 45,30 60,35 75,32 90,45 105,40 120,50"
                    fill="none"
                    stroke="#0066FF"
                    strokeWidth="2"
                  />
                  <rect x="70" y="15" width="20" height="30" rx="4" fill="#fff" opacity="0.7" />
                  <text x="80" y="35" textAnchor="middle" fontSize="14" fill="#0066FF" fontWeight="bold">40</text>
                </svg>
              </div>
            </div>
            {/* Set Daily Reminder */}
            <div className="flex items-center justify-between mt-2 mb-6">
              <div>
                <div className="font-semibold text-sm text-[#181C32]">Set Daily Reminder</div>
                <div className="text-xs text-[#A0AEC0]">Reminder after you reached daily limit</div>
              </div>
              <div>
                {/* Toggle Switch */}
                <label className="inline-flex relative items-center cursor-pointer">
                  <input type="checkbox" checked readOnly className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-[#3FC98B] transition-colors"></div>
                  <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-5"></div>
                </label>
              </div>
            </div>
            {/* Recruitment Budget & Task */}
            <div className="grid grid-cols-2 gap-4 mt-auto">
              {/* Recruitment Budget */}
              <div className="bg-white rounded-xl p-4 shadow border border-[#F2F2F2]">
                <div className="text-sm font-semibold text-[#181C32] mb-2">Recruitment Budget</div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center gap-1 text-xs text-[#A0AEC0]">
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M12 3v18M6 9l6-6 6 6" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    Available
                  </span>
                  <span className="ml-auto font-bold text-[#181C32]">$80 K</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center gap-1 text-xs text-[#A0AEC0]">
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M12 21V3M6 15l6 6 6-6" stroke="#FFA14A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    Used
                  </span>
                  <span className="ml-auto font-bold text-[#FFA14A]">$20 K</span>
                </div>
                {/* Budget chart mockup */}
                <svg width="100" height="28" viewBox="0 0 100 28" fill="none">
                  <polyline points="0,20 20,15 40,18 60,10 80,15 100,8" fill="none" stroke="#0066FF" strokeWidth="2" />
                  <polyline points="0,25 20,22 40,24 60,18 80,22 100,16" fill="none" stroke="#FFA14A" strokeWidth="2" />
                </svg>
              </div>
              {/* Task */}
              <div className="bg-white rounded-xl p-4 shadow border border-[#F2F2F2] flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm font-semibold text-[#181C32]">Task</div>
                  <span className="text-xs text-[#FFA14A]">Updated 22/03</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-3xl font-bold text-[#181C32]">232</span>
                  <svg width="20" height="20" fill="none" viewBox="0 0 32 32">
                    <circle cx="16" cy="16" r="14" stroke="#E5E7EB" strokeWidth="4" />
                    <path d="M16 2 a14 14 0 0 1 0 28" stroke="#3FC98B" strokeWidth="4" fill="none" />
                    <path d="M16 2 a14 14 0 0 1 10 24" stroke="#0066FF" strokeWidth="4" fill="none" />
                    <path d="M16 2 a14 14 0 0 1 6 26" stroke="#FFA14A" strokeWidth="4" fill="none" />
                  </svg>
                </div>
                <div className="flex flex-wrap gap-2 text-xs mt-2">
                  <span className="inline-flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#3FC98B] inline-block" />Completed
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#0066FF] inline-block" />In progress
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#FFA14A] inline-block" />Pending
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#E5E7EB] inline-block" />Overdue
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Jobs Applicants Card */}
          <div className={`${glass} ${animateCard} rounded-2xl shadow-sm p-6 border border-[#F2F2F2] mt-8`}>
            <div className="flex items-center justify-between mb-4">
              <div className="text-2xl font-bold text-[#181C32]">Jobs Applicants</div>
              <button className="bg-[#F3F4F6] text-[#6B7280] rounded-lg px-4 py-1 font-semibold text-lg">View All</button>
            </div>
            <div className="flex mb-6">
              <button className="flex-1 py-2 rounded-l-lg bg-[#F3F4F6] text-[#181C32] text-xl font-semibold">Job Openings</button>
              <button className="flex-1 py-2 rounded-r-lg bg-gradient-to-r from-[#FFA14A] to-[#FF8C3E] text-white text-xl font-semibold">Applicants</button>
            </div>
            <div className="space-y-6">
              {/* Applicant 1 */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img src="/images/People_4.png" alt="User" className="w-12 h-12 rounded-full" />
                  <div>
                    <div className="text-lg font-semibold text-[#181C32]">Brian Ehrman</div>
                    <div className="text-[#A0AEC0] text-base">Exp : 5+ Years</div>
                  </div>
                </div>
                <span className="bg-[#CFE1FF] text-[#181C32] px-4 py-1 rounded-lg text-lg font-medium">UI/UX Designer</span>
              </div>
              {/* Applicant 2 */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img src="/images/People_5.png" alt="User" className="w-12 h-12 rounded-full" />
                  <div>
                    <div className="text-lg font-semibold text-[#181C32]">Jone Willis</div>
                    <div className="text-[#A0AEC0] text-base">Exp : 4+ Years</div>
                  </div>
                </div>
                <span className="bg-[#FFD9B3] text-[#181C32] px-4 py-1 rounded-lg text-lg font-medium">Python Developer</span>
              </div>
              {/* Applicant 3 */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img src="/images/People_6.png" alt="User" className="w-12 h-12 rounded-full" />
                  <div>
                    <div className="text-lg font-semibold text-[#181C32]">Joe Goldberg</div>
                    <div className="text-[#A0AEC0] text-base">Exp : 6+ Years</div>
                  </div>
                </div>
                <span className="bg-[#FFD6DB] text-[#181C32] px-4 py-1 rounded-lg text-lg font-medium">Android Developer</span>
              </div>
              {/* Applicant 4 */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img src="/images/People_1.png" alt="User" className="w-12 h-12 rounded-full" />
                  <div>
                    <div className="text-lg font-semibold text-[#181C32]">Stanis</div>
                    <div className="text-[#A0AEC0] text-base">Exp : 2+ Years</div>
                  </div>
                </div>
                <span className="bg-[#B6F5E7] text-[#181C32] px-4 py-1 rounded-lg text-lg font-medium">React Developer</span>
              </div>
            </div>
          </div>
          {/* Meetings Card */}
          <div className={`${glass} ${animateCard} rounded-2xl shadow-sm p-8 border border-[#F2F2F2] mt-8`}>
            <div className="text-4xl font-bold text-[#181C32] mb-8">Meetings</div>
            {/* Calendar Row */}
            <div className="flex items-center gap-2 mb-4">
              <button className="w-14 h-14 rounded-full bg-[#F3F4F6] text-xl text-[#A0AEC0] flex items-center justify-center">&lt;</button>
              {[15, 16, 17, 18, 19].map((day, idx) => (
                <div key={day} className="flex flex-col items-center justify-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-semibold
                    ${day === 17 ? "bg-[#FFA14A] text-white" : "bg-[#F3F4F6] text-[#A0AEC0]"}`}>
                    {day}
                  </div>
                  <div className={`text-lg mt-2 ${day === 17 ? "text-[#FFA14A] font-semibold" : "text-[#A0AEC0]"}`}>
                    {["Mon", "Tue", "Wed", "Thu", "Fri"][idx]}
                  </div>
                </div>
              ))}
              <button className="w-14 h-14 rounded-full bg-[#F3F4F6] text-xl text-[#A0AEC0] flex items-center justify-center">&gt;</button>
            </div>
            {/* Meeting Card */}
            <div className="bg-[#4A90E2] rounded-2xl p-4 flex flex-col gap-2">
              <div>
                <div className="text-white text-xl font-medium mb-1">Hedhog Branding</div>
                <div className="text-white text-3xl font-bold mb-4">Kick-off Meeting</div>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" stroke="#fff" strokeWidth="2"/>
                  <path d="M12 6v6l4 2" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span className="text-white text-xl font-medium ">09:30–10:30AM</span>
                <div className="flex items-center ml-auto">
                  {/*
                  <div className="flex -space-x-3">
                    <img src="/avatar1.png" alt="A" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                    <img src="/avatar2.png" alt="B" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-[#181C32] flex items-center justify-center text-white text-lg font-semibold">2</div>
                  </div>
                  */}
                  <span className="ml-4 text-white text-lg">4 participants</span>
                </div>
              </div>
              <div className="bg-white rounded-xl flex items-center gap-3 px-6 py-2">
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                  <rect x="3" y="5" width="18" height="14" rx="3" stroke="#4A90E2" strokeWidth="2"/>
                  <path d="M16 10l4 2-4 2v-4z" fill="#4A90E2"/>
                </svg>
                <span className="text-[#181C32] text-xl font-medium ml-12">Go to 200m link</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-8">
              <BonusesAndIncentivesCard />
              <SalaryBreakdownCard />
            </div>
        </div>
        
      </div>
      
    </div>
  );
}

// Dummy DownloadIcon for header
function DownloadIcon() {
  return <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 3v12m0 0l-4-4m4 4l4-4m-9 9h14" /></svg>
}