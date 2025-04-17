
import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MemoryChatbot from "@/components/chatbots/MemoryChatbot";
import FutureChatbot from "@/components/chatbots/FutureChatbot";

const Chatbots = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-handwriting font-bold text-memo-rosegold mb-6">
          Chatbots
        </h1>
        
        <Tabs defaultValue="memories" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-memo-peach/20 mb-6">
            <TabsTrigger 
              value="memories" 
              className="data-[state=active]:bg-memo-peach data-[state=active]:text-memo-rosegold font-handwriting text-lg"
            >
              Converse with Memories
            </TabsTrigger>
            <TabsTrigger 
              value="future" 
              className="data-[state=active]:bg-memo-peach data-[state=active]:text-memo-rosegold font-handwriting text-lg"
            >
              Future Predict
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="memories">
            <div className="notebook-page">
              <MemoryChatbot />
            </div>
          </TabsContent>
          
          <TabsContent value="future">
            <div className="notebook-page">
              <FutureChatbot />
            </div>
          </TabsContent>
        </Tabs>
      </main>
      
      <Footer />
    </div>
  );
};

export default Chatbots;
