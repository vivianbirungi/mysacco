export interface Member {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  gender?: 'male' | 'female' | 'other';
  date_of_birth?: string;
  joined_date: string;
  membership_number: string;
  photo_url?: string;
  savings_balance: number;
  shares_owned: number;
  total_contributions: number;
  status: 'active' | 'inactive' | 'suspended';
}

export type ContributionReport = {
  id: number;
  memberId: string;
  memberName: string;
  date: string;
  amount: number;
  method: string;
  reference: string;
};
