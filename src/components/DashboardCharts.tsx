import { Area, AreaChart, CartesianGrid, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { outcomeData, weeklyChartData } from '../data';
import { formatCurrency } from '../lib/utils';

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-3 rounded-lg shadow-xl">
        {label && <p className="text-zinc-900 dark:text-zinc-100 font-medium mb-1">{label}</p>}
        {payload.map((p: any, i: number) => (
          <p key={i} className="text-sm font-medium" style={{ color: p.color || p.payload?.color }}>
            {p.name}: {p.value}%
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export function VolumeChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={weeklyChartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="colorVolume" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="currentColor" className="text-zinc-200 dark:text-zinc-800/50" />
          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#71717a', fontSize: 12 }} dy={10} />
          <YAxis axisLine={false} tickLine={false} tick={{ fill: '#71717a', fontSize: 12 }} />
          <Tooltip content={<CustomTooltip />} />
          <Area type="monotone" dataKey="volume" name="Jobs" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorVolume)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export function OutcomeChart() {
  return (
    <div className="h-[300px] w-full flex flex-col items-center">
      <div className="h-[180px] w-full relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={outcomeData}
              cx="50%"
              cy="50%"
              innerRadius={55}
              outerRadius={80}
              paddingAngle={4}
              dataKey="value"
              stroke="none"
            >
              {outcomeData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="flex flex-col w-full gap-2 mt-4 px-2">
        {outcomeData.map((entry) => (
          <div key={entry.name} className="flex items-center justify-between text-sm border-t border-zinc-100 dark:border-zinc-800/50 pt-2 first:border-0 first:pt-0">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: entry.color }} />
              <span className="font-medium text-zinc-700 dark:text-zinc-300 min-w-10">{entry.name}</span>
              <span className="text-zinc-400 dark:text-zinc-500 text-xs">({entry.value}%)</span>
            </div>
            <div className="text-right flex items-center gap-3">
              <span className="font-medium text-zinc-600 dark:text-zinc-400 text-xs w-10">{entry.count} jobs</span>
              <span className="font-semibold text-zinc-900 dark:text-zinc-100 w-16">{formatCurrency(entry.totalValue)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
