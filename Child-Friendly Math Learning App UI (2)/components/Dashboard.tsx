import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { 
  BookOpen, 
  Trophy, 
  Target, 
  TrendingUp, 
  Star, 
  PlayCircle, 
  FileText,
  Calendar,
  Award,
  Zap,
  Brain,
  CheckCircle2
} from 'lucide-react';

interface DashboardProps {
  onStartQuiz: () => void;
  onNavigateToAnalytics: () => void;
}

export function Dashboard({ onStartQuiz, onNavigateToAnalytics }: DashboardProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-semibold leading-tight text-gray-900">KUDOS</h1>
            </div>
            
            <div className="flex items-center gap-2">
              <Button variant="ghost" className="text-gray-600 hover:bg-gray-50 px-3 py-2 text-sm font-medium leading-normal">
                <BookOpen className="w-4 h-4 mr-2" />
                Curriculum
              </Button>
              <Button 
                variant="ghost" 
                onClick={onNavigateToAnalytics}
                className="text-gray-600 hover:bg-gray-50 px-3 py-2 text-sm font-medium leading-normal"
              >
                <TrendingUp className="w-4 h-4 mr-2" />
                Analytics
              </Button>
              <Button variant="ghost" className="text-gray-600 hover:bg-gray-50 px-3 py-2 text-sm font-medium leading-normal">
                <Award className="w-4 h-4 mr-2" />
                Profile
              </Button>
              <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-100 ml-2 text-xs font-medium leading-normal">
                <Target className="w-3 h-3 mr-1" />
                11+ Prep
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 mb-4">Ready to learn?</h2>
          <p className="text-lg font-normal leading-relaxed text-gray-600 max-w-2xl mx-auto">
            Your personalized learning journey continues with questions tailored just for you
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-3 mb-12">
          <Button 
            onClick={onStartQuiz}
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg shadow-sm text-base font-medium leading-normal"
          >
            <PlayCircle className="w-5 h-5 mr-2" />
            Start Practice
          </Button>
          <Button variant="outline" className="border-gray-200 px-8 py-3 rounded-lg text-base font-medium leading-normal">
            <FileText className="w-5 h-5 mr-2" />
            Worksheets
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="bg-white border border-gray-200 hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium leading-normal text-gray-600 flex items-center gap-2">
                <Trophy className="w-4 h-4 text-blue-500" />
                Questions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold leading-tight text-gray-900 mb-1">120</div>
              <p className="text-sm font-normal leading-normal text-gray-500">completed</p>
            </CardContent>
          </Card>

          <Card className="bg-white border border-gray-200 hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium leading-normal text-gray-600 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-green-500" />
                Accuracy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold leading-tight text-gray-900 mb-2">57%</div>
              <Progress value={57} className="h-2" />
            </CardContent>
          </Card>

          <Card className="bg-white border border-gray-200 hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium leading-normal text-gray-600 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-purple-500" />
                Topics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold leading-tight text-gray-900 mb-1">8</div>
              <p className="text-sm font-normal leading-normal text-gray-500">studied</p>
            </CardContent>
          </Card>

          <Card className="bg-white border border-gray-200 hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium leading-normal text-gray-600 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-orange-500" />
                Sessions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold leading-tight text-gray-900 mb-1">59</div>
              <p className="text-sm font-normal leading-normal text-gray-500">practice sessions</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Your Strengths */}
          <Card className="bg-white border border-gray-200">
            <CardHeader>
              <CardTitle className="text-lg font-semibold leading-snug text-gray-900 flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                Your Strengths
              </CardTitle>
              <p className="text-sm font-normal leading-relaxed text-gray-600">Topics where you're doing great</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 text-white rounded-full text-xs font-medium leading-normal flex items-center justify-center">1</div>
                  <div>
                    <div className="text-base font-medium leading-normal text-gray-900">Statistics</div>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-100 text-xs font-medium leading-normal">100%</Badge>
              </div>
              
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 text-white rounded-full text-xs font-medium leading-normal flex items-center justify-center">2</div>
                  <div>
                    <div className="text-base font-medium leading-normal text-gray-900">Geometry</div>
                    <div className="text-sm font-normal leading-normal text-gray-500">3 attempts</div>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-100 text-xs font-medium leading-normal">67%</Badge>
              </div>

              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 text-white rounded-full text-xs font-medium leading-normal flex items-center justify-center">3</div>
                  <div>
                    <div className="text-base font-medium leading-normal text-gray-900">Number Operations</div>
                    <div className="text-sm font-normal leading-normal text-gray-500">25 attempts</div>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-100 text-xs font-medium leading-normal">64%</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Focus Areas */}
          <Card className="bg-white border border-gray-200">
            <CardHeader>
              <CardTitle className="text-lg font-semibold leading-snug text-gray-900 flex items-center gap-2">
                <Zap className="w-5 h-5 text-blue-500" />
                Focus Areas
              </CardTitle>
              <p className="text-sm font-normal leading-relaxed text-gray-600">Topics to work on next</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-red-500 text-white rounded-full text-xs font-medium leading-normal flex items-center justify-center">!</div>
                  <div>
                    <div className="text-base font-medium leading-normal text-gray-900">Ratio and Proportion</div>
                    <div className="text-sm font-normal leading-normal text-gray-500">15 attempts</div>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-red-50 text-red-700 border-red-100 text-xs font-medium leading-normal">40%</Badge>
              </div>
              
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-red-500 text-white rounded-full text-xs font-medium leading-normal flex items-center justify-center">!</div>
                  <div>
                    <div className="text-base font-medium leading-normal text-gray-900">Algebra</div>
                    <div className="text-sm font-normal leading-normal text-gray-500">19 attempts</div>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-red-50 text-red-700 border-red-100 text-xs font-medium leading-normal">36%</Badge>
              </div>

              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-red-500 text-white rounded-full text-xs font-medium leading-normal flex items-center justify-center">!</div>
                  <div>
                    <div className="text-base font-medium leading-normal text-gray-900">Place Value</div>
                    <div className="text-sm font-normal leading-normal text-gray-500">32 attempts</div>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-red-50 text-red-700 border-red-100 text-xs font-medium leading-normal">31%</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Learning Notes */}
          <Card className="bg-white border border-gray-200">
            <CardHeader>
              <CardTitle className="text-lg font-semibold leading-snug text-gray-900 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-orange-500" />
                Learning Notes
              </CardTitle>
              <p className="text-sm font-normal leading-relaxed text-gray-600">Things to remember</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-3 bg-gray-50 rounded-lg border">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-sm font-medium leading-normal text-gray-900">Ratio and Proportion</span>
                </div>
                <p className="text-sm font-normal leading-relaxed text-gray-600">Watch out for operation mix-ups</p>
              </div>

              <div className="p-3 bg-gray-50 rounded-lg border">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-sm font-medium leading-normal text-gray-900">Algebra</span>
                </div>
                <p className="text-sm font-normal leading-relaxed text-gray-600">Remember the order of operations</p>
              </div>

              <div className="p-3 bg-green-50 rounded-lg border border-green-100">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium leading-normal text-gray-900">Place Value</span>
                </div>
                <p className="text-sm font-normal leading-relaxed text-green-700">Great improvement!</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}