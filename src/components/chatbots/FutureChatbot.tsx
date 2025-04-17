
import { useState, useRef, useEffect } from "react";
import { Send, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Demo future predictions
const demoPredictions = [
  "Based on your memories and personality, I predict you would approach this situation with careful consideration. You tend to weigh all options before making a decision.",
  "Your memories suggest you value personal connections highly. In this future scenario, you would likely prioritize maintaining relationships over short-term gains.",
  "Given your past experiences, you would probably be cautious about this technological change. You typically prefer to see proof before fully embracing new innovations.",
  "Your previous memories indicate a strong connection to nature. I believe you would support environmental conservation efforts in this future scenario.",
  "Based on your recorded personality traits, you would likely adapt well to this future challenge. You've shown resilience in similar situations in the past.",
  "Your memories reveal a pattern of creative problem-solving. In this future scenario, you would probably find an innovative approach that others might overlook.",
];

interface ChatMessage {
  role: "user" | "bot";
  content: string;
}

const FutureChatbot = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "bot",
      content: "Hello! I'm your Future Predictor. Ask me how you might respond to potential future scenarios, and I'll analyze your memories to predict your reactions."
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: ChatMessage = {
      role: "user",
      content: input
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);
    
    // Simulate AI response after a delay
    setTimeout(() => {
      const randomResponse = demoPredictions[Math.floor(Math.random() * demoPredictions.length)];
      const botMessage: ChatMessage = {
        role: "bot",
        content: randomResponse
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };
  
  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col h-[600px]">
      <div className="flex-1 overflow-y-auto mb-4 chatbot-container">
        <div className="space-y-4 p-2">
          {messages.map((message, index) => (
            <div 
              key={index} 
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex ${message.role === 'user' ? 'flex-row-reverse' : 'flex-row'} items-start gap-2 max-w-[80%]`}>
                <Avatar className={message.role === 'user' ? 'bg-memo-peach' : 'bg-memo-gray'}>
                  <AvatarFallback>{message.role === 'user' ? 'You' : 'F'}</AvatarFallback>
                </Avatar>
                
                <div 
                  className={`rounded-2xl px-4 py-2 ${
                    message.role === 'user' 
                      ? 'bg-memo-peach text-memo-text rounded-tr-none' 
                      : 'bg-memo-gray text-memo-text rounded-tl-none'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="flex items-start gap-2 max-w-[80%]">
                <Avatar className="bg-memo-gray">
                  <AvatarFallback>F</AvatarFallback>
                </Avatar>
                
                <div className="rounded-2xl rounded-tl-none px-4 py-2 bg-memo-gray text-memo-text">
                  <div className="flex space-x-1">
                    <div className="h-2 w-2 bg-memo-rosegold rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="h-2 w-2 bg-memo-rosegold rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="h-2 w-2 bg-memo-rosegold rounded-full animate-bounce"></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </div>
      
      <form onSubmit={handleSendMessage} className="flex gap-2">
        <div className="relative flex-1">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="How would I react to..."
            className="pr-10 border-memo-gray/40 focus-visible:ring-memo-rosegold/20"
          />
          <Clock size={18} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-memo-rosegold/40" />
        </div>
        
        <Button 
          type="submit" 
          disabled={!input.trim() || isTyping}
          className="bg-memo-rosegold hover:bg-memo-rosegold/90 text-white"
        >
          <Send size={18} />
        </Button>
      </form>
    </div>
  );
};

export default FutureChatbot;
