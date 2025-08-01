import React, { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { QuizInterface } from './components/QuizInterface';
import { Analytics } from './components/Analytics';

type View = 'dashboard' | 'quiz' | 'analytics';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('dashboard');

  const handleStartQuiz = () => {
    setCurrentView('quiz');
  };

  const handleNavigateBack = () => {
    setCurrentView('dashboard');
  };

  const handleNavigateToAnalytics = () => {
    setCurrentView('analytics');
  };

  return (
    <div className="size-full">
      {currentView === 'dashboard' && (
        <Dashboard 
          onStartQuiz={handleStartQuiz} 
          onNavigateToAnalytics={handleNavigateToAnalytics}
        />
      )}
      {currentView === 'quiz' && (
        <QuizInterface onNavigateBack={handleNavigateBack} />
      )}
      {currentView === 'analytics' && (
        <Analytics onNavigateBack={handleNavigateBack} />
      )}
    </div>
  );
}