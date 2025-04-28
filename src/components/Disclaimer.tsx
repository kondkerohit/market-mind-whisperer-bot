
import React from 'react';
import { AlertTriangle } from 'lucide-react';

const Disclaimer: React.FC = () => {
  return (
    <div className="bg-amber-50 border-l-4 border-amber-400 p-4 text-sm text-amber-700">
      <div className="flex">
        <div className="flex-shrink-0">
          <AlertTriangle className="h-5 w-5 text-amber-400" />
        </div>
        <div className="ml-3">
          <p className="font-medium">Disclaimer</p>
          <p className="mt-1">
            This bot provides general information only and is not a substitute for professional financial advice. 
            Stock data shown may not be real-time. Always conduct your own research or consult a financial advisor 
            before making investment decisions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
