
import { useState, useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { Button } from "@/components/ui/button";
import { BarChart4, RefreshCw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Demo data for the memory analysis
const demoMemoryTypes = [
  { name: 'Happy Memories', value: 42, color: '#FFDEE2' },
  { name: 'Work/Study', value: 23, color: '#FDE1D3' },
  { name: 'Relationships', value: 18, color: '#F1F0FB' },
  { name: 'Travel', value: 12, color: '#B76E79' },
  { name: 'Personal Growth', value: 5, color: '#4A4A4A' },
];

const demoInsights = [
  "Your memories show a strong positive emotional pattern, with 42% being categorized as happy memories.",
  "Your work and study memories suggest a balanced approach to professional life.",
  "You value relationships highly, with 18% of your memories involving connections with others.",
  "Travel experiences form a significant part of your memory collection (12%).",
  "You've been documenting moments of personal growth, though these make up a smaller percentage (5%) of your total memories."
];

export const MemoryAnalysis = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [memoryData, setMemoryData] = useState<Array<{ name: string; value: number; color: string }>>([]);
  const [insights, setInsights] = useState<string[]>([]);
  const { toast } = useToast();

  const analyzeMemories = () => {
    setIsLoading(true);
    
    // Simulate API call for memory analysis
    setTimeout(() => {
      setMemoryData(demoMemoryTypes);
      setInsights(demoInsights);
      setIsLoading(false);
      
      toast({
        title: "Analysis Complete",
        description: "Your memories have been analyzed successfully.",
      });
    }, 1500);
  };
  
  useEffect(() => {
    analyzeMemories();
  }, []);
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BarChart4 className="h-5 w-5 text-memo-rosegold" />
          <h2 className="text-2xl font-handwriting font-semibold text-memo-rosegold">Memory Patterns</h2>
        </div>
        
        <Button 
          variant="outline" 
          size="sm"
          onClick={analyzeMemories}
          disabled={isLoading}
          className="border-memo-gray/40 text-memo-text"
        >
          <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
          Refresh Analysis
        </Button>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="h-[300px]">
          {isLoading ? (
            <div className="h-full flex items-center justify-center">
              <div className="text-center">
                <RefreshCw className="h-10 w-10 mx-auto animate-spin text-memo-rosegold mb-4" />
                <p className="text-memo-text/70">Analyzing your memories...</p>
              </div>
            </div>
          ) : (
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={memoryData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {memoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `${value} memories`} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          )}
        </div>
        
        <div className="notebook-panel">
          <h3 className="text-xl font-handwriting font-semibold mb-4 text-memo-rosegold">Memory Insights</h3>
          
          {isLoading ? (
            <div className="flex items-center justify-center h-[200px]">
              <p className="text-memo-text/70">Generating insights...</p>
            </div>
          ) : (
            <ul className="space-y-3">
              {insights.map((insight, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="inline-block h-4 w-4 rounded-full bg-memo-pink mt-1"></span>
                  <p className="text-memo-text">{insight}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      
      <div className="notebook-panel mt-6">
        <h3 className="text-xl font-handwriting font-semibold mb-4 text-memo-rosegold">
          Memory Summary
        </h3>
        
        {isLoading ? (
          <div className="h-24 flex items-center justify-center">
            <p className="text-memo-text/70">Generating summary...</p>
          </div>
        ) : (
          <div className="p-4 rounded-lg bg-memo-peach/20 border border-memo-peach/40">
            <p className="text-memo-text italic">
              "Based on your memory patterns, you appear to be a positive person who values happiness, professional balance, and meaningful relationships. 
              You enjoy traveling and have been documenting your personal growth journey. Your memories suggest you're emotionally intelligent and 
              introspective, with a tendency to focus on the positive aspects of life. Consider recording more memories related to personal growth 
              to create a more balanced memory archive."
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
