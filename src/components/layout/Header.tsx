import { BookOpen, Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "@/contexts/UserContext";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { userId } = useUser();

  return (
    <header className="bg-memo-offwhite border-b border-memo-gray/20 px-4 py-3 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-memo-rosegold">
          <BookOpen className="h-6 w-6" />
          <h1 className="text-2xl font-handwriting font-bold">MemoRise</h1>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-memo-text hover:text-memo-rosegold transition-colors">
            Home
          </Link>
          <Link to="/memories" className="text-memo-text hover:text-memo-rosegold transition-colors">
            Memories
          </Link>
          <Link to="/chatbots" className="text-memo-text hover:text-memo-rosegold transition-colors">
            Chatbots
          </Link>
          <Link to="/analysis" className="text-memo-text hover:text-memo-rosegold transition-colors">
            Analysis
          </Link>
          {userId && (
            <div className="ml-4 px-3 py-1 bg-memo-peach/20 rounded-full text-sm text-memo-rosegold">
              User ID: {userId}
            </div>
          )}
        </div>

        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
          className="md:hidden text-memo-text"
        >
          <Menu size={24} />
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute w-full bg-white shadow-md py-2 animate-fade-in">
          <div className="flex flex-col">
            <Link 
              to="/" 
              className="px-4 py-2 hover:bg-memo-pink/20"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/memories" 
              className="px-4 py-2 hover:bg-memo-pink/20"
              onClick={() => setMobileMenuOpen(false)}
            >
              Memories
            </Link>
            <Link 
              to="/chatbots" 
              className="px-4 py-2 hover:bg-memo-pink/20"
              onClick={() => setMobileMenuOpen(false)}
            >
              Chatbots
            </Link>
            <Link 
              to="/analysis" 
              className="px-4 py-2 hover:bg-memo-pink/20"
              onClick={() => setMobileMenuOpen(false)}
            >
              Analysis
            </Link>
            {userId && (
              <div className="px-4 py-2 bg-memo-peach/10 text-sm text-memo-rosegold">
                User ID: {userId}
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
