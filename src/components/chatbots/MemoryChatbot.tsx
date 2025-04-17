
import { useState, useRef, useEffect } from "react";
import { Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Demo chatbot responses
const demoResponses = [
  "Based on your memories, I recall you enjoyed watching sunsets at the beach. That experience brought you a sense of peace.",
  "From what I remember, you once mentioned that patience was an important lesson you learned. It seems like waiting for results paid off for you.",
  "Your memories indicate that you value spending time in nature, especially in the mountains with friends.",
  "I remember you recording thoughts about your childhood at the beach. Those memories appear to be significant to you.",
  "According to your memories, you were setting goals for personal growth this year. Are you making progress on those?",
  "Your memories suggest that quiet reflection time is important for your wellbeing.",
];

interface ChatMessage {
  role: "user" | "bot";
  content: string;
}

const MemoryChatbot = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "bot",
      content: "Hello! I'm your Memory Assistant. I can help you explore your past memories. What would you like to talk about?"
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
      const randomResponse = demoResponses[Math.floor(Math.random() * demoResponses.length)];
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
                <Avatar className={message.role === 'user' ? 'bg-memo-peach' : 'bg-memo-pink'}>
                  <AvatarFallback>{message.role === 'user' ? 'You' : 'M'}</AvatarFallback>
                </Avatar>
                
                <div 
                  className={`rounded-2xl px-4 py-2 ${
                    message.role === 'user' 
                      ? 'bg-memo-peach text-memo-text rounded-tr-none' 
                      : 'bg-memo-pink text-memo-text rounded-tl-none'
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
                <Avatar className="bg-memo-pink">
                  <AvatarFallback>M</AvatarFallback>
                </Avatar>
                
                <div className="rounded-2xl rounded-tl-none px-4 py-2 bg-memo-pink text-memo-text">
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
            placeholder="Ask about your memories..."
            className="pr-10 border-memo-gray/40 focus-visible:ring-memo-rosegold/20"
          />
          <Sparkles size={18} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-memo-rosegold/40" />
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

export default MemoryChatbot;
