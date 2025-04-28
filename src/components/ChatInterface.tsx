
import React, { useState, useRef, useEffect } from 'react';
import ChatMessage, { ChatMessageProps } from './ChatMessage';
import ChatInput from './ChatInput';
import SuggestedQuestions from './SuggestedQuestions';
import { generateStockResponse } from '../services/stockMarketService';
import { ScrollArea } from '@/components/ui/scroll-area';

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessageProps[]>([
    { 
      message: "Hi there! I'm the Market Mind Whisperer, your friendly stock market assistant. I can help answer questions about stocks, market trends, and basic financial concepts. What would you like to know today?", 
      isBot: true 
    }
  ]);
  
  const chatEndRef = useRef<HTMLDivElement>(null);
  
  const handleSendMessage = (message: string) => {
    const newUserMessage = { message, isBot: false };
    setMessages([...messages, newUserMessage]);
    
    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse = generateStockResponse(message);
      setMessages(prev => [...prev, { message: botResponse, isBot: true }]);
    }, 1000);
  };
  
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  return (
    <div className="flex flex-col h-full">
      <ScrollArea className="flex-1 p-4">
        {messages.map((msg, index) => (
          <ChatMessage key={index} message={msg.message} isBot={msg.isBot} />
        ))}
        <div ref={chatEndRef} />
      </ScrollArea>
      <SuggestedQuestions onSelectQuestion={handleSendMessage} />
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatInterface;
