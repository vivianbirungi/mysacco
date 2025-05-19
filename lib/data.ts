export const memberData = 
{
  "savings":{
  "total_savings": 1250000,
  "last_contribution_date": "2025-05-10",
  "savings_balance": 1250000,
  "monthly_target": 100000,
  "status": "active"
  },

  "contributions": [
    {
      "id": 1,
      "date": "2025-05-10",
      "amount": 100000,
      "method": "Mobile Money",
      "reference": "MTN202505100001"
    },
    {
      "id": 2,
      "date": "2025-04-10",
      "amount": 500000,
      "method": "Bank Transfer",
      "reference": "DFCU23456789"
    },
    {
      "id": 3,
      "date": "2025-03-10",
      "amount": 300000,
      "method": "Mobile Money",
      "reference": "AIRTEL202503100004"
    }
  ],
  
  "transactions": [
    {
      "id": 101,
      "$id": "101",
      "type": "savings",
      "amount": 100000,
      "date": "2025-05-10",
      "description": "Monthly savings",
      "name": "VIVIAN BIRUNGI",
      "paymentChannel": "MTN",
      "accountId": "1236784",
      "pending": false,
      "category": "no idea",
      "$createdAt": "2025-05-10",
      "channel": "string",
      "senderBankId": "string",
      "receiverBankId": "string",
      "Transaction": "123456789", 
      "image":"image"
    },
    {
      "id": 102,
      "$id": "102",
      "type": "loan repayment",
      "amount": 250000,
      "date": "2025-05-05",
      "description": "Loan repayment installment #2",
      "name": "VIVIAN BIRUNGI",
      "paymentChannel": "MTN",
      "accountId": "1236784",
      "pending": false,
      "category": "no idea",
    "$createdAt": "2025-05-10",
      "channel": "string",
      "senderBankId": "string",
      "receiverBankId": "string",
      "Transaction": "123456789", 
      "image":"image"
    },
    {
      "id": 103,
      "$id": "103",
      "type": "share purchase",
      "amount": 500000,
      "date": "2025-04-20",
      "description": "Monthly savings",
      "name": "VIVIAN BIRUNGI",
      "paymentChannel": "MTN",
      "accountId": "1236784",
      "pending": false,
      "category": "no idea",
      "$createdAt": "2025-05-10",
      "channel": "string",
      "senderBankId": "string",
      "receiverBankId": "string",
      "Transaction": "123456789", 
      "image":"image"
    }
  ],
  
  "total_shares": 15,
  "share_value": 50000,
  "total_investment": 750000,
  "dividends_received": 90000,
  "shares": [
    {
      "id": 1,
      "date_purchased": "2025-04-01",
      "quantity": 10,
      "value": 500000
    },
    {
      "id": 2,
      "date_purchased": "2025-05-01",
      "quantity": 5,
      "value": 250000
    }
  ]
}
// app/member/savings/savingsData.ts
export const savingsData = {
  total_savings: 1250000,
  last_contribution_date: "2025-05-10",
  savings_balance: 1250000,
  monthly_target: 100000,
  status: "active",
  contributions: [
    {
      id: 1,
      date: "2025-05-10",
      amount: 100000,
      method: "Mobile Money",
      reference: "MTN202505100001"
    },
    {
      id: 2,
      date: "2025-04-10",
      amount: 500000,
      method: "Bank Transfer",
      reference: "DFCU23456789"
    },
    {
      id: 3,
      date: "2025-03-10",
      amount: 600000,
      method: "Mobile Money",
      reference: "AIRTEL202503100004"
    }
  ]
  
};
// sharesData.js

export const sharesData = {
  total_shares: 15,
  share_value: 50000,
  total_investment: 750000,
  dividends_received: 90000,
  shares: [
    {
      id: 1,
      date_purchased: '2025-01-10',
      quantity: 3,
      value: 150000
    },
    {
      id: 2,
      date_purchased: '2025-02-12',
      quantity: 4,
      value: 200000
    },
    {
      id: 3,
      date_purchased: '2025-03-15',
      quantity: 2,
      value: 100000
    },
    {
      id: 4,
      date_purchased: '2025-04-20',
      quantity: 4,
      value: 200000
    }
  ]
};
// contributionsData.js

export const contributionsData = [
  {
    id: 1,
    date: '2025-05-10',
    amount: 100000,
    method: 'Mobile Money',
    reference: 'MTN202505100001'
  },
  {
    id: 2,
    date: '2025-04-10',
    amount: 100000,
    method: 'Bank Transfer',
    reference: 'DFCU23456789'
  },
  {
    id: 3,
    date: '2025-03-10',
    amount: 100000,
    method: 'Mobile Money',
    reference: 'AIRTEL202503100004'
  },
  {
    id: 4,
    date: '2025-02-10',
    amount: 100000,
    method: 'Cash Deposit',
    reference: 'STANBIC20250210X001'
  },
  {
    id: 5,
    date: '2025-01-10',
    amount: 100000,
    method: 'Mobile Money',
    reference: 'MTN202501100123'
  },
  {
    id: 6,
    date: '2024-12-10',
    amount: 80000,
    method: 'Bank Transfer',
    reference: 'DFCU998877'
  }
];
export const transactions = [
  {
    id: 101,
    user: { name: 'Alex Cooper', avatar: '/icons/avatar1.png' },
    date: '2025-05-10',
    time: '10:12',
    code: 'TRX20250510A1',
    amount: 100000,
    status: 'Completed',
  },
  {
    id: 102,
    user: { name: 'Carson Williamson', avatar: '/icons/avatar2.png' },
    date: '2025-05-05',
    time: '08:45',
    code: 'TRX20250505C1',
    amount: 250000,
    status: 'Pending',
  },
  {
    id: 103,
    user: { name: 'Jack Jones', avatar: '/icons/avatar1.png' },
    date: '2025-04-20',
    time: '14:30',
    code: 'TRX20250420J1',
    amount: 500000,
    status: 'Failed',
  },
  {
    id: 104,
    user: { name: 'Alex Cooper', avatar: '/icons/avatar1.png' },
    date: '2025-05-10',
    time: '10:12',
    code: 'TRX20250510A1',
    amount: 100000,
    status: 'Completed',
  },
  {
    id: 105,
    user: { name: 'Carson Williamson', avatar: '/icons/avatar2.png' },
    date: '2025-05-05',
    time: '08:45',
    code: 'TRX20250505C1',
    amount: 250000,
    status: 'Pending',
  },
  {
    id: 106,
    user: { name: 'Jack Jones', avatar: '/icons/avatar1.png' },
    date: '2025-04-20',
    time: '14:30',
    code: 'TRX20250420J1',
    amount: 500000,
    status: 'Failed',
  },
  {
    id: 107,
    user: { name: 'Alex Cooper', avatar: '/icons/avatar1.png' },
    date: '2025-05-10',
    time: '10:12',
    code: 'TRX20250510A1',
    amount: 100000,
    status: 'Completed',
  },
  {
    id: 108,
    user: { name: 'Carson Williamson', avatar: '/icons/avatar2.png' },
    date: '2025-05-05',
    time: '08:45',
    code: 'TRX20250505C1',
    amount: 250000,
    status: 'Pending',
  },
  {
    id: 109,
    user: { name: 'Jack Jones', avatar: '/icons/avatar1.png' },
    date: '2025-04-20',
    time: '14:30',
    code: 'TRX20250420J1',
    amount: 500000,
    status: 'Failed',
  },
  {
    id: 110,
    user: { name: 'Alex Cooper', avatar: '/icons/avatar1.png' },
    date: '2025-05-10',
    time: '10:12',
    code: 'TRX20250510A1',
    amount: 100000,
    status: 'Completed',
  },
  {
    id: 111,
    user: { name: 'Carson Williamson', avatar: '/icons/avatar2.png' },
    date: '2025-05-05',
    time: '08:45',
    code: 'TRX20250505C1',
    amount: 250000,
    status: 'Pending',
  },
  {
    id: 112,
    user: { name: 'Jack Jones', avatar: '/icons/avatar1.png' },
    date: '2025-04-20',
    time: '14:30',
    code: 'TRX20250420J1',
    amount: 999900,
    status: 'Failed',
  },
];
export const statusColors: Record<string, string> = {
  Completed: 'bg-green-100 text-green-800',
  Pending: 'bg-yellow-100 text-yellow-800',
  Failed: 'bg-red-100 text-red-800',
};


  










