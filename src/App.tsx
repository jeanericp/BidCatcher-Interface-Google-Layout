/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Activity, Calendar, Clock, DollarSign, Filter, Sparkles } from 'lucide-react';
import { OutcomeChart, VolumeChart } from './components/DashboardCharts';
import { MetricCard } from './components/MetricCard';
import { ThemeToggle } from './components/ThemeToggle';
import { TriageQueue } from './components/TriageQueue';
import { formatCurrency, formatNumber } from './lib/utils';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans selection:bg-zinc-200 dark:selection:bg-zinc-800">
      {/* Topbar */}
      <header className="sticky top-0 z-10 border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-zinc-900 dark:bg-white flex items-center justify-center">
              <Filter className="w-4 h-4 text-white dark:text-zinc-900" />
            </div>
            <span className="font-semibold text-lg tracking-tight">BidCatcher</span>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <div className="h-8 w-8 rounded-full bg-zinc-200 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 flex items-center justify-center overflow-hidden">
              <span className="text-xs font-medium text-zinc-600 dark:text-zinc-300">JD</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">Command Center</h1>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">Your industrial bid refinery overview.</p>
          </div>
          <div className="flex gap-2">
            <select className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm rounded-lg px-3 py-2 text-zinc-700 dark:text-zinc-300 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-white">
              <option>This Week</option>
              <option>This Month</option>
              <option>This Year</option>
            </select>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <MetricCard
            title="Jobs Triaged"
            value={formatNumber(124)}
            icon={Activity}
            trend="+12%"
            trendUp={true}
          />
          <MetricCard
            title="Evaluated Value"
            value={
              <div>
                <div>{formatCurrency(253100000)}</div>
                <div className="mt-2 flex items-center text-sm font-normal">
                  <span className="text-zinc-500 dark:text-zinc-400">Accepted:</span>
                  <span className="ml-1.5 font-medium text-emerald-600 dark:text-emerald-400">{formatCurrency(45200000)}</span>
                </div>
              </div>
            }
            icon={DollarSign}
          />
          <MetricCard
            title="Bid Deadlines This Week"
            value="14"
            icon={Calendar}
          />
          <MetricCard
            title="Hours Saved"
            value={formatNumber(340) + 'h'}
            icon={Clock}
            trend="+24h"
            trendUp={true}
          />
          <MetricCard
            title="Gold Nuggets"
            value="3"
            icon={Sparkles}
            highlight={true}
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="lg:col-span-2 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm">
            <div className="mb-4">
              <h2 className="text-lg font-semibold tracking-tight">Volume Triage</h2>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">Total jobs processed per day</p>
            </div>
            <VolumeChart />
          </div>
          <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm">
            <div className="mb-4">
              <h2 className="text-lg font-semibold tracking-tight">AI Outcomes</h2>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">Distribution of extracted decisions</p>
            </div>
            <OutcomeChart />
          </div>
        </div>

        {/* Queue Section */}
        <div className="p-0 sm:p-6 rounded-2xl border-0 sm:border border-zinc-200 dark:border-zinc-800 bg-transparent sm:bg-white sm:dark:bg-zinc-900 shadow-none sm:shadow-sm">
          <div className="mb-6 px-2 sm:px-0 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold tracking-tight">Triage Queue</h2>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">Recent jobs requiring human-in-the-loop review</p>
            </div>
            <button className="text-sm font-medium text-zinc-900 dark:text-white hover:underline">
              View all
            </button>
          </div>
          <TriageQueue />
        </div>

      </main>
    </div>
  );
}
