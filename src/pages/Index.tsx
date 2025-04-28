
import React from 'react';
import MarketHeader from '@/components/MarketHeader';
import ChatInterface from '@/components/ChatInterface';
import Disclaimer from '@/components/Disclaimer';
import { Card } from '@/components/ui/card';

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-finance-dark text-center">Market Mind Whisperer</h1>
        <p className="text-center mb-8 text-gray-600">
          Your friendly Stock Market Insights Bot
        </p>
        
        <Card className="overflow-hidden shadow-lg border-finance-primary border-t-4">
          <MarketHeader />
          <div className="h-[500px] flex flex-col bg-white">
            <ChatInterface />
          </div>
        </Card>
        
        <div className="mt-6">
          <Disclaimer />
        </div>
      </div>
    </div>
  );
};

export default Index;
