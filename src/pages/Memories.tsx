
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MemoryForm from "@/components/memories/MemoryForm";
import RecentMemoriesList from "@/components/memories/RecentMemoriesList";

const Memories = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-handwriting font-bold text-memo-rosegold mb-6">
          Your Memories
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-handwriting font-semibold mb-4 text-memo-text">
              Create New Memory
            </h2>
            <div className="notebook-panel">
              <MemoryForm />
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-handwriting font-semibold mb-4 text-memo-text">
              Recent Memories
            </h2>
            <div className="notebook-panel max-h-[500px] overflow-y-auto">
              <RecentMemoriesList showAll={true} />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Memories;
