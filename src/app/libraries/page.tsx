"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Carouselmodal } from "@/components/body/Carousel-modal";
import { detailedPromptLibraries } from "@/lib/contant/Promptlibrarties";
import {promptCards} from "@/lib/librariesdata";
import { Input } from "@/components/ui/input";

export default function Libraries() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredCards = promptCards.filter(
    (card) =>
      card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.preview.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCardClick = (categoryId: string, categoryTitle: string) => {
    setSelectedCategory(categoryId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCategory(null);
  };

  const getSelectedCategoryData = () => {
    if (!selectedCategory) return { title: "", prompts: [] };

    const card = promptCards.find((card) => card.id === selectedCategory);
    const prompts =
      detailedPromptLibraries[
        selectedCategory as keyof typeof detailedPromptLibraries
      ] || [];

    return {
      title: card?.title || "",
      prompts: prompts,
    };
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container px-4 mx-auto">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800 dark:text-white">
            Prompt Libraries
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Browse our collection of expertly crafted prompts for various
            development tasks. Click any card to explore 10 specialized prompts
            for that category.
          </p>

          <div className="mb-8 max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search prompts..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {filteredCards.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCards.map((card) => (
                <Card
                  key={card.id}
                  className="cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-200 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                  onClick={() => handleCardClick(card.id, card.title)}
                >
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {card.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-gray-600 dark:text-gray-400">
                      {card.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded-md border border-gray-200 dark:border-gray-600">
                      <pre className="text-xs text-gray-700 dark:text-gray-300 whitespace-pre-wrap font-mono leading-relaxed overflow-hidden">
                        {card.preview.length > 150
                          ? `${card.preview.substring(0, 150)}...`
                          : card.preview}
                      </pre>
                    </div>
                    <div className="mt-3 text-center">
                      <span className="text-sm text-purple-600 dark:text-purple-400 font-medium">
                        Click to explore 10 prompts →
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400">
                No prompts found matching your search.
              </p>
            </div>
          )}

          <div className="mt-12 bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
              How to Use These Prompts
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-800 dark:text-white mb-2">
                  1. Click to Explore
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Click any card to open a carousel with 10 specialized prompts
                  for that category.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 dark:text-white mb-2">
                  2. Navigate & Copy
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Use arrows or dots to navigate through prompts, then copy the
                  ones you need.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 dark:text-white mb-2">
                  3. Customize
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Replace the bracketed placeholders with your specific content
                  and requirements.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 dark:text-white mb-2">
                  4. Use with AI
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Paste the customized prompt into your preferred AI model for
                  optimal results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Modal */}
      <Carouselmodal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        category={getSelectedCategoryData().title}
        prompts={getSelectedCategoryData().prompts}
      />
    </div>
  );
}
