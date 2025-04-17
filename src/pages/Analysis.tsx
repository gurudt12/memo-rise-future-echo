
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { MemoryAnalysis } from "@/components/analysis/MemoryAnalysis";

const Analysis = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-handwriting font-bold text-memo-rosegold mb-6">
          Memory Analysis
        </h1>
        
        <div className="notebook-page">
          <MemoryAnalysis />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Analysis;
