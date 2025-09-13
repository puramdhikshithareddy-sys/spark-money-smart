import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Target, Plus, Calendar, TrendingUp } from "lucide-react";

const goals = [
  {
    id: 1,
    name: "Emergency Fund",
    current: 5800,
    target: 10000,
    deadline: "Dec 2024",
    category: "Safety Net",
    color: "secondary",
    progress: 58
  },
  {
    id: 2,
    name: "Vacation to Japan",
    current: 2300,
    target: 4500,
    deadline: "Jun 2025",
    category: "Travel",
    color: "accent",
    progress: 51
  },
  {
    id: 3,
    name: "New MacBook Pro",
    current: 1400,
    target: 2500,
    deadline: "Mar 2024",
    category: "Tech",
    color: "primary",
    progress: 56
  }
];

export const GoalTracker = () => {
  return (
    <Card className="card-gradient animate-slide-up">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2">
          <Target className="w-5 h-5 text-secondary" />
          Financial Goals
        </CardTitle>
        <Button variant="outline" size="sm">
          <Plus className="w-4 h-4 mr-2" />
          Add Goal
        </Button>
      </CardHeader>
      <CardContent className="space-y-6">
        {goals.map((goal, index) => (
          <div key={goal.id} className="space-y-3" style={{ animationDelay: `${index * 150}ms` }}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-${goal.color} flex items-center justify-center`}>
                  <Target className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold">{goal.name}</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant="secondary" className="text-xs">
                      {goal.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      {goal.deadline}
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-lg">${goal.current.toLocaleString()}</p>
                <p className="text-xs text-muted-foreground">of ${goal.target.toLocaleString()}</p>
              </div>
            </div>

            <div className="space-y-2">
              <Progress value={goal.progress} className="h-3" />
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-secondary">
                  {goal.progress}% complete
                </span>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <TrendingUp className="w-3 h-3" />
                  $250/month needed
                </div>
              </div>
            </div>

            {index < goals.length - 1 && <div className="border-b border-border" />}
          </div>
        ))}

        <div className="pt-4 border-t border-border">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Total Goals Progress</span>
            <span className="text-lg font-bold text-primary">55%</span>
          </div>
          <Progress value={55} className="mt-2 h-2" />
          <p className="text-xs text-muted-foreground mt-2 text-center">
            $9,500 saved toward $17,000 in goals
          </p>
        </div>
      </CardContent>
    </Card>
  );
};