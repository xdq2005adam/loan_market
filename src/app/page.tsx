'use client';

import { LoanCard } from '@/components/LoanCard';
import { ScrollingMessage } from '@/components/ScrollingMessage';
import { mockLoans } from '@/data/mockLoans';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="mb-4 rounded-lg overflow-hidden shadow-sm">
          <ScrollingMessage />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mockLoans.map((loan) => (
            <LoanCard key={loan.id} loan={loan} />
          ))}
        </div>
      </div>
    </main>
  );
}
