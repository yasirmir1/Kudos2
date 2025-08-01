import React, { useState } from 'react';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { Star, ArrowLeft, Trophy, Target } from 'lucide-react';

interface QuizInterfaceProps {
  onNavigateBack: () => void;
}

export function QuizInterface({ onNavigateBack }: QuizInterfaceProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const question = "A number increased by 7 equals 15. Which equation represents this?";
  const options = [
    "x - 7 = 15",
    "7x = 15", 
    "x + 7 = 15",
    "x + 15 = 7"
  ];
  const correctAnswer = "x + 7 = 15";

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
    setIsCorrect(answer === correctAnswer);
  };

  const handleSubmit = () => {
    if (selectedAnswer) {
      // Handle answer submission
      console.log("Answer submitted:", selectedAnswer);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Button 
            variant="ghost" 
            onClick={onNavigateBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 text-sm font-medium leading-normal"
          >
            <ArrowLeft className="w-4 h-4" />
            Dashboard
          </Button>
          
          <div className="flex items-center gap-6">
            <div className="text-center">
              <div className="text-sm font-normal leading-normal text-gray-600 mb-1">Question 1 of 20</div>
              <Progress value={5} className="w-32 h-2" />
            </div>
            
            <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-100 text-xs font-medium leading-normal">
              <Target className="w-3 h-3 mr-1" />
              11+ Prep
            </Badge>
            
            <div className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-full border">
              <Trophy className="w-4 h-4 text-gray-600" />
              <span className="text-gray-700 text-sm font-normal leading-normal">0/0</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-6 py-8">
        {/* Subject Badges */}
        <div className="flex items-center gap-3 mb-8">
          <Badge className="bg-blue-50 text-blue-700 border-blue-100 text-sm font-medium leading-normal">Algebra</Badge>
          <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50 text-sm font-medium leading-normal">Easy</Badge>
          <div className="ml-auto flex items-center gap-2 text-gray-600 text-sm font-normal leading-normal">
            <Star className="w-4 h-4 text-blue-500 fill-current" />
            Express missing number problems algebraically
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
          <h2 className="text-xl font-semibold leading-relaxed text-gray-900 mb-8">
            {question}
          </h2>

          {/* Answer Options */}
          <div className="space-y-3">
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(option)}
                className={`w-full p-4 text-left rounded-lg border transition-all duration-200 ${
                  selectedAnswer === option
                    ? isCorrect === true
                      ? 'border-green-500 bg-green-50 text-green-800'
                      : isCorrect === false
                      ? 'border-red-500 bg-red-50 text-red-800'
                      : 'border-blue-500 bg-blue-50 text-blue-800'
                    : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50 text-gray-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-6 h-6 rounded-full border flex items-center justify-center text-sm font-medium leading-normal ${
                    selectedAnswer === option
                      ? isCorrect === true
                        ? 'border-green-500 bg-green-500 text-white'
                        : isCorrect === false
                        ? 'border-red-500 bg-red-500 text-white'
                        : 'border-blue-500 bg-blue-500 text-white'
                      : 'border-gray-300 text-gray-600'
                  }`}>
                    {selectedAnswer === option && isCorrect === true && '✓'}
                    {selectedAnswer === option && isCorrect === false && '✗'}
                    {selectedAnswer !== option && String.fromCharCode(65 + index)}
                  </div>
                  <span className="font-mono text-lg font-normal leading-normal">{option}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <Button 
            onClick={handleSubmit}
            disabled={!selectedAnswer}
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg shadow-sm disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-500 text-base font-medium leading-normal"
          >
            Submit Answer
          </Button>
        </div>
      </div>
    </div>
  );
}