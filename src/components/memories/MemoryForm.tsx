
import { useState } from "react";
import { Mic, MicOff, Image, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const MemoryForm = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [text, setText] = useState("");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const { toast } = useToast();

  const handleToggleRecording = () => {
    setIsRecording(!isRecording);
    
    if (!isRecording) {
      toast({
        title: "Recording started",
        description: "Your voice is being recorded. Click again to stop.",
      });
    } else {
      toast({
        title: "Recording saved",
        description: "Your voice recording has been saved as a memory.",
      });
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, we would save the memory to a database here
    console.log("Saving memory:", {
      text,
      hasImage: !!selectedImage,
      timestamp: new Date(),
    });
    
    toast({
      title: "Memory saved",
      description: "Your memory has been saved successfully.",
    });
    
    // Reset form
    setText("");
    setSelectedImage(null);
    setImagePreview(null);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <label className="block font-handwriting text-lg text-memo-rosegold">
          Capture your memory
        </label>
        <Textarea 
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What do you want to remember?"
          className="min-h-[120px] border-memo-gray/40 focus:border-memo-rosegold focus:ring-memo-rosegold/20"
        />
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <Button 
            type="button" 
            variant="outline" 
            className={`border-memo-gray/40 ${isRecording ? 'bg-memo-pink/20 text-memo-rosegold' : ''}`}
            onClick={handleToggleRecording}
          >
            {isRecording ? <MicOff size={18} /> : <Mic size={18} />}
            <span className="ml-2">{isRecording ? "Stop" : "Record"}</span>
          </Button>
          
          <Button 
            type="button" 
            variant="outline" 
            className="border-memo-gray/40"
            onClick={() => document.getElementById('image-upload')?.click()}
          >
            <Image size={18} />
            <span className="ml-2">Image</span>
          </Button>
          <input 
            id="image-upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
        </div>
        
        <Button 
          type="submit" 
          className="bg-memo-rosegold hover:bg-memo-rosegold/90 text-white"
          disabled={!text && !selectedImage && !isRecording}
        >
          <Send size={18} className="mr-2" />
          Save Memory
        </Button>
      </div>
      
      {imagePreview && (
        <div className="mt-2">
          <div className="relative">
            <img 
              src={imagePreview} 
              alt="Memory" 
              className="w-full h-40 object-cover rounded-md border border-memo-gray/40" 
            />
            <Button
              type="button"
              variant="destructive"
              size="sm"
              className="absolute top-2 right-2"
              onClick={() => {
                setSelectedImage(null);
                setImagePreview(null);
              }}
            >
              Remove
            </Button>
          </div>
        </div>
      )}
    </form>
  );
};

export default MemoryForm;
