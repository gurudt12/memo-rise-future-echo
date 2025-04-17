
import { BookOpen } from "lucide-react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-memo-offwhite p-4">
      <div className="notebook-page max-w-md text-center p-8">
        <BookOpen className="h-16 w-16 mx-auto text-memo-rosegold mb-4" />
        <h1 className="text-4xl font-handwriting font-bold mb-2 text-memo-rosegold">Oops!</h1>
        <h2 className="text-2xl font-handwriting mb-4 text-memo-text">Page not found</h2>
        <p className="mb-6 text-memo-text/80">
          This page seems to be missing from your memories. Let's go back to a page you know.
        </p>
        <Button 
          className="bg-memo-rosegold hover:bg-memo-rosegold/90 text-white"
          onClick={() => navigate('/')}
        >
          Return Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
