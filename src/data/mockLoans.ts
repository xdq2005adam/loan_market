import { LoanProduct } from '../types/loan';

export const mockLoans: LoanProduct[] = [
  {
    id: '1',
    logo: 'https://ui-avatars.com/api/?name=极速贷&background=2563eb&color=fff&size=100&bold=true',
    name: '极速贷',
    tags: ['秒批', '零门槛'],
    amountRange: {
      min: 1000,
      max: 50000
    },
    loanTerm: {
      min: 3,
      max: 12
    },
    annualInterestRate: 7.2,
    applyUrl: 'https://www.baidu.com'
  },
  {
    id: '2',
    logo: 'https://ui-avatars.com/api/?name=信用贷&background=16a34a&color=fff&size=100&bold=true',
    name: '信用贷',
    tags: ['免抵押', '放款快'],
    amountRange: {
      min: 5000,
      max: 300000
    },
    loanTerm: {
      min: 6,
      max: 36
    },
    annualInterestRate: 8.8,
    applyUrl: 'https://www.baidu.com'
  },
  {
    id: '3',
    logo: 'https://ui-avatars.com/api/?name=房抵贷&background=dc2626&color=fff&size=100&bold=true',
    name: '房抵贷',
    tags: ['利率低', '额度高'],
    amountRange: {
      min: 100000,
      max: 5000000
    },
    loanTerm: {
      min: 12,
      max: 360
    },
    annualInterestRate: 4.5,
    applyUrl: 'https://www.baidu.com'
  },
  {
    id: '4',
    logo: 'https://ui-avatars.com/api/?name=经营贷&background=7c3aed&color=fff&size=100&bold=true',
    name: '经营贷',
    tags: ['企业专享', '手续简单'],
    amountRange: {
      min: 50000,
      max: 2000000
    },
    loanTerm: {
      min: 12,
      max: 60
    },
    annualInterestRate: 6.8,
    applyUrl: 'https://www.baidu.com'
  },
  {
    id: '5',
    logo: 'https://ui-avatars.com/api/?name=薪金贷&background=ea580c&color=fff&size=100&bold=true',
    name: '薪金贷',
    tags: ['工资放大', '随借随还'],
    amountRange: {
      min: 3000,
      max: 100000
    },
    loanTerm: {
      min: 3,
      max: 24
    },
    annualInterestRate: 7.5,
    applyUrl: 'https://www.baidu.com'
  }
]; 