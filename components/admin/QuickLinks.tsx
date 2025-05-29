'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { icons, Plus, PlusCircle } from 'lucide-react';

type QuickLink = {
  title: string;
  icon: keyof typeof icons;
  onClick?: () => void;
};

const links: QuickLink[] = [
  { title: 'Add Member', icon: 'UserPlus' },
  { title: 'Post Announcement', icon: 'Megaphone' },
  { title: 'New Loan', icon: 'CreditCard' },
  { title: 'Contributions', icon: 'PiggyBank' },
  { title: 'Shares', icon: 'CircleDollarSign' },
];

const QuickLinks = () => {
  return (
    <div className="w-full bg-none">
        <span>Quick Links</span>
      <div className="flex flex-wrap gap-4 mt-2">
        {links.map((link, index) => {
          const Icon = icons[link.icon];
          return (
            <Button
              key={index}
              variant="outline"
              className="flex items-center gap-2 rounded-2xl bg-gray-300"
              onClick={link.onClick}
            >
              <Icon className="w-4 h-4" />
              {link.title}
              <PlusCircle/>
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default QuickLinks;
