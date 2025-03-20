export interface Campaign {
  id: string;
  name: string;
  metrics: {
    clicks: number;
    impressions: number;
    cost: number;
    conversionRate: number;
  };
  status: string;
  platforms: string[];
}