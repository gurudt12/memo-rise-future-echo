
import { useEffect, useState } from "react";
import { Image, Mic, Calendar, Clock, FileText } from "lucide-react";

// Demo memory data
const demoMemories = [
  {
    id: 1,
    type: "text",
    content: "I had a wonderful day today. The sunset was beautiful and I felt at peace with myself.",
    date: "2025-04-17",
    time: "18:32"
  },
  {
    id: 2,
    type: "audio",
    content: "Voice recording about my childhood memories at the beach",
    date: "2025-04-16",
    time: "10:15"
  },
  {
    id: 3,
    type: "image",
    content: "Trip to the mountains with friends",
    imageUrl: "/lovable-uploads/5f07b344-398f-4724-943c-0e7e9ed67e86.png", // Using the provided image as demo
    date: "2025-04-15",
    time: "14:20"
  },
  {
    id: 4,
    type: "text",
    content: "I learned something important today: patience truly is a virtue. Waiting for results was worth it.",
    date: "2025-04-14",
    time: "22:10"
  },
  {
    id: 5,
    type: "audio",
    content: "Reflections on my goals for this year",
    date: "2025-04-13",
    time: "09:45"
  }
];

type Memory = {
  id: number;
  type: string;
  content: string;
  imageUrl?: string;
  date: string;
  time: string;
};

interface RecentMemoriesListProps {
  showAll?: boolean;
}

const RecentMemoriesList = ({ showAll = false }: RecentMemoriesListProps) => {
  const [memories, setMemories] = useState<Memory[]>([]);
  
  useEffect(() => {
    // In a real app, we would fetch memories from an API here
    // For demo purposes, we'll just use our demo data with a slight delay
    const timer = setTimeout(() => {
      setMemories(demoMemories);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const memoriesToShow = showAll ? memories : memories.slice(0, 3);

  if (memories.length === 0) {
    return (
      <div className="py-10 text-center text-memo-text/60">
        <div className="animate-pulse mb-4">Loading memories...</div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {memoriesToShow.map((memory) => (
        <div key={memory.id} className="memory-card">
          <div className="flex justify-between items-start mb-2">
            <div className="flex items-center gap-2">
              {memory.type === 'text' && (
                <FileText size={18} className="text-memo-rosegold" />
              )}
              {memory.type === 'audio' && (
                <Mic size={18} className="text-memo-rosegold" />
              )}
              {memory.type === 'image' && (
                <Image size={18} className="text-memo-rosegold" />
              )}
              <span className="font-handwriting text-lg text-memo-rosegold capitalize">
                {memory.type} Memory
              </span>
            </div>
            <div className="flex items-center text-xs text-memo-text/60">
              <Calendar size={14} className="mr-1" />
              <span>{memory.date}</span>
              <Clock size={14} className="ml-2 mr-1" />
              <span>{memory.time}</span>
            </div>
          </div>
          
          <p className="text-memo-text mb-2">{memory.content}</p>
          
          {memory.imageUrl && (
            <div className="mt-2">
              <img 
                src={memory.imageUrl} 
                alt="Memory" 
                className="w-full h-32 object-cover rounded-md" 
              />
            </div>
          )}
        </div>
      ))}

      {!showAll && memories.length > 3 && (
        <div className="text-center pt-2">
          <span className="font-handwriting text-memo-rosegold">
            + {memories.length - 3} more memories
          </span>
        </div>
      )}
    </div>
  );
};

export default RecentMemoriesList;
