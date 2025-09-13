import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Settings, AlertTriangle, CheckCircle } from "lucide-react";

const budgetCategories = [
  { 
    name: "Food & Dining", 
    spent: 70550, 
    budget: 66400, 
    percentage: 106,
    color: "destructive",
    trend: "over"
  },
  { 
    name: "Transportation", 
    spent: 26560, 
    budget: 33200, 
    percentage: 80,
    color: "secondary",
    trend: "good"
  },
  { 
    name: "Shopping", 
    spent: 37350, 
    budget: 49800, 
    percentage: 75,
    color: "primary",
    trend: "good"
  },
  { 
    name: "Entertainment", 
    spent: 23240, 
    budget: 20750, 
    percentage: 112,
    color: "warning",
    trend: "over"
  },
  { 
    name: "Bills & Utilities", 
    spent: 44820, 
    budget: 49800, 
    percentage: 90,
    color: "accent",
    trend: "good"
  }
];

export const BudgetProgress = () => {
  return (
    <Card className="card-gradient animate-scale-in">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Budget Tracking</CardTitle>
        <Button variant="outline" size="sm">
          <Settings className="w-4 h-4 mr-2" />
          Adjust
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {budgetCategories.map((category, index) => (
          <div key={category.name} className="space-y-2" style={{ animationDelay: `${index * 100}ms` }}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-medium text-sm">{category.name}</span>
                {category.trend === "over" ? (
                  <AlertTriangle className="w-4 h-4 text-destructive" />
                ) : (
                  <CheckCircle className="w-4 h-4 text-success" />
                )}
              </div>
              <div className="text-right">
                <span className={`text-sm font-semibold ${
                  category.percentage > 100 ? 'text-destructive' : 'text-foreground'
                }`}>
                  ₹{category.spent.toLocaleString('en-IN')}
                </span>
                <span className="text-xs text-muted-foreground"> / ₹{category.budget.toLocaleString('en-IN')}</span>
              </div>
            </div>
            
            <div className="space-y-1">
              <Progress 
                value={Math.min(category.percentage, 100)} 
                className="h-2"
                style={{
                  background: category.percentage > 100 
                    ? 'linear-gradient(90deg, hsl(var(--destructive)) 0%, hsl(var(--destructive)/.8) 100%)'
                    : undefined
                }}
              />
              <div className="flex justify-between items-center">
                <span className={`text-xs font-medium ${
                  category.percentage > 100 ? 'text-destructive' : 
                  category.percentage > 90 ? 'text-warning' : 'text-success'
                }`}>
                  {category.percentage}% used
                </span>
                {category.percentage > 100 && (
                  <span className="text-xs text-destructive font-medium">
                    ₹{(category.spent - category.budget).toLocaleString('en-IN')} over
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
        
        <div className="pt-4 border-t border-border">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Total Budget Usage</span>
            <span className="text-lg font-bold text-primary">87%</span>
          </div>
          <Progress value={87} className="mt-2 h-3" />
          <p className="text-xs text-muted-foreground mt-2 text-center">
            ₹2,02,520 of ₹2,32,400 monthly budget used
          </p>
        </div>
      </CardContent>
    </Card>
  );
};