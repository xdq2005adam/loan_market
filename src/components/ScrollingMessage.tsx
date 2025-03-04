import { useEffect, useState } from 'react';

const messages = [
  '已有2,358人通过极速贷审批，累计放款5万元',
  '已有1,826人通过信用贷审批，累计放款30万元',
  '已有3,142人通过房抵贷审批，累计放款500万元',
  '已有1,567人通过经营贷审批，累计放款200万元',
  '已有2,891人通过薪金贷审批，累计放款10万元',
];

export const ScrollingMessage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-orange-50 text-orange-600 py-2.5 overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-orange-50 to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-orange-50 to-transparent z-10"></div>
      <div className="px-8">
        <div 
          className="text-sm transition-all duration-500 ease-in-out"
          style={{
            transform: `translateX(${100}%)`,
            animation: 'slideLeft 15s linear infinite'
          }}
        >
          {messages[currentIndex]}
        </div>
      </div>
      <style jsx>{`
        @keyframes slideLeft {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
}; 