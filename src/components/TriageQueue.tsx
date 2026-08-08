import { ArrowRight, Sparkles } from 'lucide-react';
import { initialBids } from '../data';
import { cn, formatCurrency } from '../lib/utils';

export function TriageQueue() {
  return (
    <div className="w-full">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse whitespace-nowrap">
          <thead>
            <tr className="border-b border-zinc-200 dark:border-zinc-800 text-sm text-zinc-500 dark:text-zinc-400">
              <th className="pb-4 font-medium pl-4">Job Title</th>
              <th className="pb-4 font-medium hidden md:table-cell">Client</th>
              <th className="pb-4 font-medium text-right pr-6">Value</th>
              <th className="pb-4 font-medium text-right pr-6">Closing Date</th>
              <th className="pb-4 font-medium text-center">AI Score</th>
              <th className="pb-4 font-medium text-center">Status</th>
              <th className="pb-4 font-medium"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800/50">
            {initialBids.map((bid) => (
              <tr key={bid.id} className="group hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                <td className="py-4 pl-4">
                  <div className="flex items-center gap-2">
                    <p className="font-medium text-zinc-900 dark:text-zinc-100">{bid.title}</p>
                    {bid.isGoldNugget && (
                      <div title="Gold Nugget Opportunity">
                        <Sparkles className="w-4 h-4 text-amber-500 fill-amber-500" />
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 md:hidden mt-1">{bid.client}</p>
                  <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-1 font-mono">{bid.id}</p>
                </td>
                <td className="py-4 hidden md:table-cell">
                  <span className="text-sm text-zinc-600 dark:text-zinc-300">{bid.client}</span>
                </td>
                <td className="py-4 text-right pr-6">
                  <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{formatCurrency(bid.value)}</span>
                </td>
                <td className="py-4 text-right pr-6">
                  <span className="text-sm text-zinc-600 dark:text-zinc-300">{bid.closingDate}</span>
                </td>
                <td className="py-4 text-center">
                  <span className={cn(
                    "inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-xs font-semibold",
                    bid.score >= 80 ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400" :
                    bid.score >= 50 ? "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-400" :
                    "bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-400"
                  )}>
                    {bid.score}
                  </span>
                </td>
                <td className="py-4 text-center">
                  <span className={cn(
                    "inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-medium border",
                    bid.status === 'Yes' ? "bg-emerald-50 border-emerald-200 text-emerald-700 dark:bg-emerald-900/20 dark:border-emerald-800 dark:text-emerald-400" :
                    bid.status === 'Maybe' ? "bg-amber-50 border-amber-200 text-amber-700 dark:bg-amber-900/20 dark:border-amber-800 dark:text-amber-400" :
                    "bg-zinc-50 border-zinc-200 text-zinc-600 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-400"
                  )}>
                    {bid.status}
                  </span>
                </td>
                <td className="py-4 text-right pr-4">
                  <button className="p-2 text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
