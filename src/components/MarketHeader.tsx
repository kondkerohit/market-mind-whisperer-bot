
import React from 'react';
import { LineChart, TrendingUp, AlertCircle } from 'lucide-react';

const MarketHeader = () => {
  return (
    <div className="bg-finance-primary text-white p-4 rounded-t-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <LineChart className="h-6 w-6" />
          <h1 className="text-xl font-bold">Market Mind Whisperer</h1>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1">
            <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse-subtle"></div>
            <span className="text-xs">Market Open</span>
          </div>
        </div>
      </div>
      <div className="mt-2 flex items-center space-x-4 text-sm">
        <div className="flex items-center space-x-1">
          <TrendingUp className="h-4 w-4 text-green-400" />
          <span>S&P 500: 5,234.18</span>
        </div>
        <div className="flex items-center space-x-1">
          <TrendingUp className="h-4 w-4 text-green-400" />
          <span>NASDAQ: 16,498.91</span>
        </div>
        <div className="flex items-center space-x-1">
          <AlertCircle className="h-4 w-4 text-amber-400" />
          <span>Market Volatility: Moderate</span>
        </div>
      </div>
    </div>
  );
};

export default MarketHeader;
