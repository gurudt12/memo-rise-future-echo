
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-memo-offwhite border-t border-memo-gray/20 py-6 mt-10">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 text-memo-rosegold mb-3">
          <Heart size={16} className="fill-memo-rosegold" />
          <p className="font-handwriting text-xl">MemoRise</p>
          <Heart size={16} className="fill-memo-rosegold" />
        </div>
        <p className="text-memo-text/70 text-sm">
          Preserving memories that help you rise - for now and forever
        </p>
        <p className="text-memo-text/50 text-xs mt-2">
          © {new Date().getFullYear()} MemoRise. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
