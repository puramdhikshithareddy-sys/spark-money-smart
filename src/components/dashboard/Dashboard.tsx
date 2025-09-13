import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Target, 
  AlertTriangle,
  CreditCard,
  PieChart,
  Calendar
} from "lucide-react";
import { ExpenseChart } from "./ExpenseChart";
import { SpendingPrediction } from "./SpendingPrediction";
import { BudgetProgress } from "./BudgetProgress";
import { ExpenseCategories } from "./ExpenseCategories";
import { GoalTracker } from "./GoalTracker";
import { RecentTransactions } from "./RecentTransactions";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            Financial AI Dashboard
          </h1>
          <p className="text-muted-foreground mt-2">
            Smart insights to help you achieve your financial goals
          </p>
        </div>
        <Button className="btn-gradient-primary">
          <Calendar className="w-4 h-4 mr-2" />
          This Month
        </Button>
      </div>

      {/* Key Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="card-gradient hover-lift">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Balance</p>
                <p className="text-2xl font-bold text-primary">$12,584.50</p>
                <div className="flex items-center mt-2 text-sm">
                  <TrendingUp className="w-4 h-4 mr-1 text-success" />
                  <span className="text-success font-medium">+12.5%</span>
                  <span className="text-muted-foreground ml-1">from last month</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-primary-foreground" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-gradient hover-lift">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Monthly Spending</p>
                <p className="text-2xl font-bold text-warning">$3,247.80</p>
                <div className="flex items-center mt-2 text-sm">
                  <TrendingDown className="w-4 h-4 mr-1 text-destructive" />
                  <span className="text-destructive font-medium">+8.2%</span>
                  <span className="text-muted-foreground ml-1">vs budget</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-full bg-gradient-accent flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-accent-foreground" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-gradient hover-lift">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Savings Goal</p>
                <p className="text-2xl font-bold text-secondary">$8,500.00</p>
                <div className="flex items-center mt-2">
                  <Progress value={68} className="flex-1 mr-2" />
                  <span className="text-sm font-medium text-secondary">68%</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-full bg-gradient-secondary flex items-center justify-center">
                <Target className="w-6 h-6 text-secondary-foreground" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-gradient hover-lift">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Budget Alerts</p>
                <p className="text-2xl font-bold text-destructive">3</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Categories over budget
                </p>
              </div>
              <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-destructive" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Spending Chart */}
        <div className="lg:col-span-2">
          <ExpenseChart />
        </div>

        {/* Spending Prediction */}
        <div>
          <SpendingPrediction />
        </div>
      </div>

      {/* Secondary Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Budget Progress */}
        <BudgetProgress />

        {/* Expense Categories */}
        <ExpenseCategories />
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Goal Tracker */}
        <GoalTracker />

        {/* Recent Transactions */}
        <RecentTransactions />
      </div>
    </div>
  );
};

export default Dashboard;