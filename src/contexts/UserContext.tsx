
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface UserContextType {
  userId: string;
  setUserId: (id: string) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [userId, setUserId] = useState<string>('');
  const [showDialog, setShowDialog] = useState(true);
  const [tempUserId, setTempUserId] = useState('');

  useEffect(() => {
    const savedUserId = localStorage.getItem('memorise-user-id');
    if (savedUserId) {
      setUserId(savedUserId);
      setShowDialog(false);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (tempUserId.trim()) {
      setUserId(tempUserId);
      localStorage.setItem('memorise-user-id', tempUserId);
      setShowDialog(false);
    }
  };

  return (
    <UserContext.Provider value={{ userId, setUserId }}>
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-handwriting text-memo-rosegold">Welcome to MemoRise</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-memo-text">
                Please enter your user ID to continue
              </label>
              <Input
                placeholder="Enter your user ID"
                value={tempUserId}
                onChange={(e) => setTempUserId(e.target.value)}
                required
                className="border-memo-gray/40 focus:border-memo-rosegold"
              />
            </div>
            <div className="flex justify-end">
              <Button 
                type="submit" 
                className="bg-memo-rosegold hover:bg-memo-rosegold/90 text-white"
              >
                Continue
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

