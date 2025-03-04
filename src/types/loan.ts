export interface LoanProduct {
  id: string;
  logo: string;
  name: string;
  tags: string[];
  amountRange: {
    min: number;
    max: number;
  };
  loanTerm: {
    min: number;
    max: number;
  };
  annualInterestRate: number;
  applyUrl: string;
} 