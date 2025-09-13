import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Brain, AlertCircle } from "lucide-react";

export const SpendingPrediction = () => {
  return (
    <Card className="card-gradient animate-slide-up">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain className="w-5 h-5 text-accent" />
          AI Predictions
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Month-end prediction */}
        <div className="p-4 rounded-lg bg-gradient-accent/10 border border-accent/20">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-semibold text-accent">Month-end Forecast</h4>
            <Badge variant="secondary" className="bg-accent/20 text-accent">
              High Confidence
            </Badge>
          </div>
          <p className="text-2xl font-bold text-accent mb-2">$3,847</p>
          <p className="text-sm text-muted-foreground">
            Based on current spending patterns, you're likely to exceed your budget by $847
          </p>
        </div>

        {/* Spending insights */}
        <div className="space-y-3">
          <h4 className="font-semibold flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            Smart Insights
          </h4>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 rounded-lg bg-warning/10 border border-warning/20">
              <AlertCircle className="w-4 h-4 text-warning mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-warning">Dining Out Alert</p>
                <p className="text-xs text-muted-foreground mt-1">
                  You've spent 34% more on restaurants this month
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-lg bg-secondary/10 border border-secondary/20">
              <TrendingUp className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-secondary">Savings Opportunity</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Switch to cooking at home 2 more days could save $186/month
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-lg bg-primary/10 border border-primary/20">
              <Brain className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-primary">Pattern Detected</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Your spending typically increases 15% on weekends
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick action */}
        <div className="pt-2 border-t border-border">
          <p className="text-xs text-muted-foreground text-center">
            AI analysis updated 2 hours ago
          </p>
        </div>
      </CardContent>
    </Card>
  );
};