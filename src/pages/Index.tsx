
import { ArrowRight, BookOpen, BrainCircuit, Upload, Volume2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import RecentMemoriesList from "@/components/memories/RecentMemoriesList";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-memo-pink/40 to-memo-peach/40 rounded-xl p-6 md:p-10 shadow-sm">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-handwriting font-bold text-memo-rosegold mb-4">
                Preserve your memories, enhance your future
              </h1>
              <p className="text-lg md:text-xl text-memo-text mb-6">
                MemoRise stores your thoughts, memories, and personality to be accessed now or centuries later.
                Create your personal time capsule and discover insights about yourself.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  className="bg-memo-rosegold hover:bg-memo-rosegold/90 text-white"
                  onClick={() => navigate('/memories')}
                >
                  Create Memory <ArrowRight size={16} className="ml-2" />
                </Button>
                <Button 
                  variant="outline" 
                  className="border-memo-rosegold text-memo-rosegold hover:bg-memo-rosegold/10"
                  onClick={() => navigate('/chatbots')}
                >
                  Talk to Your Memories
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-handwriting font-semibold mb-6 text-memo-text">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="notebook-panel">
              <div className="h-12 w-12 bg-memo-pink/30 rounded-full flex items-center justify-center mb-4">
                <Upload className="text-memo-rosegold h-6 w-6" />
              </div>
              <h3 className="font-handwriting text-xl font-semibold mb-2 text-memo-rosegold">
                Store Memories
              </h3>
              <p className="text-memo-text">
                Save your voice recordings, images, and text memories in your personal time capsule.
              </p>
            </div>

            <div className="notebook-panel">
              <div className="h-12 w-12 bg-memo-peach/40 rounded-full flex items-center justify-center mb-4">
                <Volume2 className="text-memo-rosegold h-6 w-6" />
              </div>
              <h3 className="font-handwriting text-xl font-semibold mb-2 text-memo-rosegold">
                Converse with Memories
              </h3>
              <p className="text-memo-text">
                Have meaningful conversations with an AI representation of your past self.
              </p>
            </div>

            <div className="notebook-panel">
              <div className="h-12 w-12 bg-memo-gray/30 rounded-full flex items-center justify-center mb-4">
                <BrainCircuit className="text-memo-rosegold h-6 w-6" />
              </div>
              <h3 className="font-handwriting text-xl font-semibold mb-2 text-memo-rosegold">
                Future Predictions
              </h3>
              <p className="text-memo-text">
                Gain insights about how you might respond to future events based on your memories.
              </p>
            </div>
          </div>
        </section>

        {/* Recent Memories */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-handwriting font-semibold text-memo-text">Recent Memories</h2>
            <Button 
              variant="ghost" 
              className="text-memo-rosegold hover:text-memo-rosegold/90 hover:bg-memo-pink/20"
              onClick={() => navigate('/memories')}
            >
              View All <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
          
          <RecentMemoriesList />
        </section>

        {/* CTA */}
        <section>
          <div className="notebook-page p-8 text-center">
            <BookOpen className="h-12 w-12 mx-auto text-memo-rosegold mb-4" />
            <h2 className="text-2xl md:text-3xl font-handwriting font-bold mb-4 text-memo-rosegold">
              Start preserving your memories today
            </h2>
            <p className="mb-6 max-w-2xl mx-auto text-memo-text">
              Your memories are precious. Whether for personal growth, future reference, or to leave a legacy,
              MemoRise helps you capture and interact with your memories in meaningful ways.
            </p>
            <Button 
              className="bg-memo-rosegold hover:bg-memo-rosegold/90 text-white"
              onClick={() => navigate('/memories')}
            >
              Create Your First Memory
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
