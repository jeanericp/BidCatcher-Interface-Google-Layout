import { LucideIcon } from 'lucide-react';
import { cn } from '../lib/utils';
import { ReactNode } from 'react';

interface MetricCardProps {
  title: string;
  value: string | ReactNode;
  icon: LucideIcon;
  trend?: string;
  trendUp?: boolean;
  highlight?: boolean;
}

export function MetricCard({ title, value, icon: Icon, trend, trendUp, highlight }: MetricCardProps) {
  return (
    <div className={cn(
      "p-6 rounded-2xl border bg-white dark:bg-zinc-900 transition-colors shadow-sm",
      highlight ? "border-amber-500/50 dark:border-amber-500/30 bg-amber-50/30 dark:bg-amber-950/20" : "border-zinc-200 dark:border-zinc-800"
    )}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">{title}</p>
          <div className="mt-2 text-3xl font-semibold text-zinc-900 dark:text-white tracking-tight">{value}</div>
        </div>
        <div className={cn(
          "p-3 rounded-xl shrink-0",
          highlight ? "bg-amber-100 dark:bg-amber-900/50 text-amber-600 dark:text-amber-400" : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300"
        )}>
          <Icon className="w-5 h-5" />
        </div>
      </div>
      {trend && (
        <div className="mt-4 flex items-center text-sm">
          <span className={cn(
            "font-medium",
            trendUp ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"
          )}>
            {trend}
          </span>
          <span className="ml-2 text-zinc-500 dark:text-zinc-400">vs last month</span>
        </div>
      )}
    </div>
  );
}
