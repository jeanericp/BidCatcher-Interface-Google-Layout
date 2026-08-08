import { Bid } from './types';

export const initialBids: Bid[] = [
  { id: 'RFP-2049', title: 'Downtown Hospital Expansion', client: 'Provincial Health', date: '2026-08-08', closingDate: '2026-08-25', value: 12500000, score: 92, status: 'Yes', isGoldNugget: true },
  { id: 'RFP-2048', title: 'City Metro Station Reno', client: 'Transit Corp', date: '2026-08-07', closingDate: '2026-08-20', value: 4200000, score: 78, status: 'Maybe', isGoldNugget: false },
  { id: 'RFP-2047', title: 'Suburban Office Park', client: 'Apex Dev', date: '2026-08-07', closingDate: '2026-08-22', value: 1100000, score: 45, status: 'No', isGoldNugget: false, reason: 'Lacks required specialized LEED certification' },
  { id: 'RFP-2046', title: 'University Lab Upgrade', client: 'State Tech', date: '2026-08-06', closingDate: '2026-08-15', value: 8500000, score: 88, status: 'Yes', isGoldNugget: true },
  { id: 'RFP-2045', title: 'Community Rec Center', client: 'City Parks', date: '2026-08-05', closingDate: '2026-08-18', value: 3200000, score: 65, status: 'Maybe', isGoldNugget: false },
  { id: 'RFP-2044', title: 'Highway 99 Overpass', client: 'Dept of Transpo', date: '2026-08-04', closingDate: '2026-08-30', value: 24000000, score: 95, status: 'Yes', isGoldNugget: true },
  { id: 'RFP-2043', title: 'Riverside Condos Phase 1', client: 'BlueWater Homes', date: '2026-08-04', closingDate: '2026-08-12', value: 1800000, score: 32, status: 'No', isGoldNugget: false, reason: 'Timeline too aggressive for current capacity' },
  { id: 'RFP-2042', title: 'Tech Hub Server Farm', client: 'CloudNet Inc', date: '2026-08-03', closingDate: '2026-08-28', value: 15600000, score: 84, status: 'Yes', isGoldNugget: false },
];

export const weeklyChartData = [
  { name: 'Mon', volume: 12, value: 4.2 },
  { name: 'Tue', volume: 18, value: 7.5 },
  { name: 'Wed', volume: 15, value: 5.1 },
  { name: 'Thu', volume: 22, value: 9.8 },
  { name: 'Fri', volume: 25, value: 12.5 },
  { name: 'Sat', volume: 8, value: 2.1 },
  { name: 'Sun', volume: 10, value: 3.4 },
];

export const outcomeData = [
  { name: 'Yes', value: 15, count: 18, totalValue: 45200000, color: '#10b981' },
  { name: 'Maybe', value: 35, count: 43, totalValue: 72500000, color: '#f59e0b' },
  { name: 'No', value: 50, count: 63, totalValue: 135400000, color: '#ef4444' },
];
