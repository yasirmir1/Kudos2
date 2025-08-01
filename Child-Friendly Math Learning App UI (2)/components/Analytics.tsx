import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { 
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer
} from 'recharts';
import { 
  BookOpen, 
  Trophy, 
  Target, 
  TrendingUp, 
  Award,
  Brain,
  Clock,
  BarChart3
} from 'lucide-react';

interface AnalyticsProps {
  onNavigateBack: () => void;
}

export function Analytics({ onNavigateBack }: AnalyticsProps) {
  // Sample data for charts
  const accuracyOverTimeData = [
    { date: '28/10/24', accuracy: 60 },
    { date: '29/10/24', accuracy: 25 },
    { date: '30/10/24', accuracy: 0 },
    { date: '31/10/24', accuracy: 65 },
    { date: '01/11/24', accuracy: 25 },
    { date: '02/11/24', accuracy: 25 },
    { date: '03/11/24', accuracy: 70 },
    { date: '04/11/24', accuracy: 25 },
    { date: '05/11/24', accuracy: 45 }
  ];

  const performanceByTopicData = [
    { topic: 'Statistics', accuracy: 100 },
    { topic: 'Geometry - Shape', accuracy: 67 },
    { topic: 'Number - Multiplication', accuracy: 64 },
    { topic: 'Measurement', accuracy: 60 },
    { topic: 'Number - Fractions', accuracy: 50 },
    { topic: 'Number - Numbers', accuracy: 45 },
    { topic: 'Ratio & Proportion', accuracy: 40 },
    { topic: 'Algebra', accuracy: 36 }
  ];

  const performanceByDifficultyData = [
    { difficulty: 'Easy', accuracy: 42 },
    { difficulty: 'Medium', accuracy: 50 },
    { difficulty: 'Hard', accuracy: 50 },
    { difficulty: 'Very Hard', accuracy: 48 }
  ];

  const responseTimeData = [
    { difficulty: 'Easy', time: 10 },
    { difficulty: 'Medium', time: 3 },
    { difficulty: 'Hard', time: 7 },
    { difficulty: 'Very Hard', time: 21 }
  ];

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
              <Button 
                variant="ghost" 
                onClick={onNavigateBack}
                className="text-gray-600 hover:bg-gray-50 px-3 py-2 text-sm font-medium leading-normal"
              >
                <TrendingUp className="w-4 h-4 mr-2" />
                Dashboard
              </Button>
              <Button variant="ghost" className="text-gray-600 hover:bg-gray-50 px-3 py-2 text-sm font-medium leading-normal">
                <BookOpen className="w-4 h-4 mr-2" />
                Curriculum
              </Button>
              <Button variant="ghost" className="bg-blue-50 text-blue-600 hover:bg-blue-100 px-3 py-2 text-sm font-medium leading-normal">
                <BarChart3 className="w-4 h-4 mr-2" />
                Analytics
              </Button>
              <Button variant="ghost" className="text-gray-600 hover:bg-gray-50 px-3 py-2 text-sm font-medium leading-normal">
                <Award className="w-4 h-4 mr-2" />
                Profile
              </Button>
              <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-100 ml-2 text-xs font-medium leading-normal">
                <Target className="w-3 h-3 mr-1" />
                11+ Preparation
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Page Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h2 className="text-3xl font-bold leading-tight text-gray-900">Performance Analytics</h2>
            <p className="text-base font-normal leading-normal text-gray-600">11+ • yakirmn@gmail.com</p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white border border-gray-200 hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium leading-normal text-gray-600 flex items-center gap-2">
                <Trophy className="w-4 h-4 text-blue-500" />
                Total Questions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold leading-tight text-gray-900 mb-1">120</div>
              <p className="text-sm font-normal leading-normal text-gray-500">Questions answered</p>
            </CardContent>
          </Card>

          <Card className="bg-white border border-gray-200 hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium leading-normal text-gray-600 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-green-500" />
                Overall Accuracy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold leading-tight text-gray-900 mb-1">49%</div>
              <p className="text-sm font-normal leading-normal text-gray-500">Correct answers</p>
            </CardContent>
          </Card>

          <Card className="bg-white border border-gray-200 hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium leading-normal text-gray-600 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-purple-500" />
                Topics Studied
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold leading-tight text-gray-900 mb-1">8</div>
              <p className="text-sm font-normal leading-normal text-gray-500">Different topics</p>
            </CardContent>
          </Card>

          <Card className="bg-white border border-gray-200 hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium leading-normal text-gray-600 flex items-center gap-2">
                <Clock className="w-4 h-4 text-orange-500" />
                Avg Response Time
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold leading-tight text-gray-900 mb-1">7s</div>
              <p className="text-sm font-normal leading-normal text-gray-500">Per question</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Accuracy Over Time */}
          <Card className="bg-white border border-gray-200">
            <CardHeader>
              <CardTitle className="text-xl font-semibold leading-snug text-gray-900">Accuracy Over Time</CardTitle>
              <p className="text-sm font-normal leading-relaxed text-gray-600">Daily accuracy percentage for the last 30 days</p>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={accuracyOverTimeData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f1f1" />
                    <XAxis 
                      dataKey="date" 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: '#6b7280', fontWeight: 400 }}
                    />
                    <YAxis 
                      domain={[0, 100]}
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: '#6b7280', fontWeight: 400 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="accuracy" 
                      stroke="#3b82f6" 
                      strokeWidth={2}
                      dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                      activeDot={{ r: 6, fill: '#3b82f6' }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Performance by Topic */}
          <Card className="bg-white border border-gray-200">
            <CardHeader>
              <CardTitle className="text-xl font-semibold leading-snug text-gray-900">Performance by Topic</CardTitle>
              <p className="text-sm font-normal leading-relaxed text-gray-600">Accuracy percentage for each topic studied</p>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={performanceByTopicData} layout="horizontal">
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f1f1" />
                    <XAxis 
                      type="number"
                      domain={[0, 100]}
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: '#6b7280', fontWeight: 400 }}
                    />
                    <YAxis 
                      type="category"
                      dataKey="topic"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: '#6b7280', fontWeight: 400 }}
                      width={120}
                    />
                    <Bar dataKey="accuracy" fill="#3b82f6" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Performance by Difficulty */}
          <Card className="bg-white border border-gray-200">
            <CardHeader>
              <CardTitle className="text-xl font-semibold leading-snug text-gray-900">Performance by Difficulty</CardTitle>
              <p className="text-sm font-normal leading-relaxed text-gray-600">How you perform across different difficulty levels</p>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={performanceByDifficultyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f1f1" />
                    <XAxis 
                      dataKey="difficulty"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: '#6b7280', fontWeight: 400 }}
                    />
                    <YAxis 
                      domain={[0, 100]}
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: '#6b7280', fontWeight: 400 }}
                    />
                    <Bar dataKey="accuracy" fill="#f59e0b" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Average Response Time */}
          <Card className="bg-white border border-gray-200">
            <CardHeader>
              <CardTitle className="text-xl font-semibold leading-snug text-gray-900">Average Response Time</CardTitle>
              <p className="text-sm font-normal leading-relaxed text-gray-600">Time taken per question by difficulty level</p>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={responseTimeData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f1f1" />
                    <XAxis 
                      dataKey="difficulty"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: '#6b7280', fontWeight: 400 }}
                    />
                    <YAxis 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: '#6b7280', fontWeight: 400 }}
                      label={{ value: 'Avg Time (seconds)', angle: -90, position: 'insideLeft', style: { fontSize: 12, fill: '#6b7280', fontWeight: 400 } }}
                    />
                    <Bar dataKey="time" fill="#ef4444" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}