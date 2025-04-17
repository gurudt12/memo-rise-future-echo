
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { MemoryAnalysis } from "@/components/analysis/MemoryAnalysis";
import { useUser } from "@/contexts/UserContext";

const Analysis = () => {
  const { userId } = useUser();
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-handwriting font-bold text-memo-rosegold mb-6">
          Memory Analysis for User: {userId}
        </h1>
        
        <div className="notebook-page">
          <MemoryAnalysis userId={userId} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Analysis;
