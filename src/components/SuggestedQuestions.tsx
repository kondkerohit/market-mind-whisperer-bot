
import React from 'react';
import { Button } from '@/components/ui/button';

interface SuggestedQuestionsProps {
  onSelectQuestion: (question: string) => void;
}

const SuggestedQuestions: React.FC<SuggestedQuestionsProps> = ({ onSelectQuestion }) => {
  const questions = [
    "What is a stock?",
    "How's the market today?",
    "What is an ETF?",
    "Explain dividends",
    "Latest market news"
  ];

  return (
    <div className="p-4 flex flex-wrap gap-2 justify-center">
      {questions.map((question, index) => (
        <Button 
          key={index} 
          variant="outline" 
          size="sm" 
          onClick={() => onSelectQuestion(question)}
          className="border-finance-secondary text-finance-secondary hover:bg-finance-light"
        >
          {question}
        </Button>
      ))}
    </div>
  );
};

export default SuggestedQuestions;
