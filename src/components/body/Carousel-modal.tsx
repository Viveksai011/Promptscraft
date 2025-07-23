"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Copy, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

interface Prompt {
  id: string;
  title: string;
  prompt: string;
}

interface PromptCarouselModalProps {
  isOpen: boolean;
  onClose: () => void;
  category: string;
  prompts: Prompt[];
}

export function Carouselmodal({
  isOpen,
  onClose,
  category,
  prompts,
}: PromptCarouselModalProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const { toast } = useToast();

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);

    toast({
      title: "Copied to clipboard",
      description: "The prompt has been copied to your clipboard.",
    });

    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % prompts.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + prompts.length) % prompts.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  if (!prompts.length) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl w-full p-0 gap-0">
        <DialogHeader className="p-6 pb-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                {category}
              </DialogTitle>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {prompts.length} expert prompts for {category.toLowerCase()}
              </p>
            </div>
          </div>
        </DialogHeader>

        <div className="relative flex-1 overflow-hidden">
         

          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {prompts.map((prompt, index) => (
              <div key={prompt.id} className="w-full flex-shrink-0 h-fit p-6">
                <Card className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-2 border-gray-200 dark:border-gray-700">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Badge
                          variant="secondary"
                          className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300"
                        >
                          {index + 1} of {prompts.length}
                        </Badge>
                        <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                          {prompt.title}
                        </CardTitle>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleCopy(prompt.prompt, prompt.id)}
                        className="flex items-center space-x-2"
                      >
                        {copiedId === prompt.id ? (
                          <>
                            <Check className="h-4 w-4 text-green-500" />
                            <span>Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-4 w-4" />
                            <span>Copy</span>
                          </>
                        )}
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
                      <pre className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap font-mono leading-relaxed overflow-auto max-h-[300px]">
                        {prompt.prompt}
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

        
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform p-1 rounded-full -translate-y-1/2 bg-white dark:bg-gray-500 shadow-lg hover:shadow-xl"
            onClick={prevSlide}
            disabled={currentSlide === 0}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform p-0 rounded-full -translate-y-1/2 bg-white dark:bg-gray-500 shadow-lg hover:shadow-xl"
            onClick={nextSlide}
            disabled={currentSlide === prompts.length - 1}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

      

        <div className="flex justify-center space-x-2 p-6 pt-4 border-t border-gray-200 dark:border-gray-700">
          {prompts.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentSlide
                  ? "bg-purple-600 dark:bg-purple-400"
                  : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
              }`}
            />
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
