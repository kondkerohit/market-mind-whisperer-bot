
import React from 'react';

export interface ChatMessageProps {
  message: string;
  isBot: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, isBot }) => {
  return (
    <div className={`chat-bubble ${isBot ? 'bot-bubble' : 'user-bubble'}`}>
      <p>{message}</p>
    </div>
  );
};

export default ChatMessage;
