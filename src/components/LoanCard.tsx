import Image from 'next/image';
import { LoanProduct } from '@/types/loan';

interface LoanCardProps {
  loan: LoanProduct;
}

export const LoanCard = ({ loan }: LoanCardProps) => {
  const formatAmount = (amount: number) => {
    return amount >= 10000 
      ? `${amount / 10000}万` 
      : `${amount}`;
  };

  return (
    <a 
      href={loan.applyUrl}
      className="block bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex gap-3">
          <div className="relative w-12 h-12 flex-shrink-0">
            <Image
              src={loan.logo}
              alt={loan.name}
              fill
              className="rounded-lg object-contain"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-bold text-gray-800 -mt-1">{loan.name}</h3>
            <div className="flex gap-1">
              {loan.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block px-2 py-0.5 bg-red-50 text-red-600 text-xs rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <button
          className="min-w-[100px] bg-blue-600 text-white px-6 py-1.5 rounded-lg hover:bg-blue-700 transition-colors text-sm whitespace-nowrap"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = loan.applyUrl;
          }}
        >
          立即申请
        </button>
      </div>
      
      <div className="flex justify-between items-center text-sm">
        <div className="text-center">
          <div className="text-gray-500 mb-1">额度范围</div>
          <div className="text-gray-800 font-medium">
            {formatAmount(loan.amountRange.min)}-{formatAmount(loan.amountRange.max)}
          </div>
        </div>
        
        <div className="text-center">
          <div className="text-gray-500 mb-1">借款期限</div>
          <div className="text-gray-800 font-medium">
            {loan.loanTerm.min}-{loan.loanTerm.max}月
          </div>
        </div>
        
        <div className="text-center">
          <div className="text-gray-500 mb-1">年利率</div>
          <div className="text-gray-800 font-medium">
            {loan.annualInterestRate}%
          </div>
        </div>
      </div>
    </a>
  );
}; 