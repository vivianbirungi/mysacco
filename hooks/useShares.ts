// hooks/useShares.ts
import axios from 'axios';

export interface Share {
  id: number;
  date_purchased: string;
  quantity: number;
  value: number;
}

export interface SharesData {
  total_shares: number;
  share_value: number;
  total_investment: number;
  dividends_received: number;
  shares: Share[];
}

export const getSharesData = async (): Promise<SharesData> => {
  const response = await axios.get<SharesData>('/api/shares');
  return response.data;
};
