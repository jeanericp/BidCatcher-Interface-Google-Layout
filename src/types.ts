export interface Bid {
  id: string;
  title: string;
  client: string;
  date: string;
  closingDate?: string;
  value: number;
  score: number;
  status: 'Pending' | 'Yes' | 'Maybe' | 'No';
  isGoldNugget: boolean;
  reason?: string;
}

export interface DashboardMetrics {
  jobsTriaged: number;
  valueAccepted: number; // Maybe and Yes
  hoursSaved: number;
  goldNuggets: number;
}
