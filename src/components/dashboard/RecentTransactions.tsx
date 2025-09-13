import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  MoreHorizontal, 
  ArrowUpRight, 
  ArrowDownLeft,
  Coffee,
  Car,
  ShoppingBag,
  Gamepad2,
  Utensils
} from "lucide-react";

const transactions = [
  {
    id: 1,
    description: "Starbucks Coffee",
    amount: -8.45,
    category: "Food & Dining",
    date: "Today",
    time: "2:30 PM",
    icon: Coffee,
    color: "destructive",
    aiCategory: true
  },
  {
    id: 2,
    description: "Salary Deposit",
    amount: 3500.00,
    category: "Income",
    date: "Today",
    time: "9:00 AM",
    icon: ArrowDownLeft,
    color: "secondary",
    aiCategory: false
  },
  {
    id: 3,
    description: "Gas Station",
    amount: -45.80,
    category: "Transportation",
    date: "Yesterday",
    time: "6:15 PM",
    icon: Car,
    color: "warning",
    aiCategory: true
  },
  {
    id: 4,
    description: "Amazon Purchase",
    amount: -89.99,
    category: "Shopping",
    date: "Yesterday",
    time: "3:22 PM",
    icon: ShoppingBag,
    color: "primary",
    aiCategory: true
  },
  {
    id: 5,
    description: "Steam Game",
    amount: -29.99,
    category: "Entertainment",
    date: "2 days ago",
    time: "8:45 PM",
    icon: Gamepad2,
    color: "accent",
    aiCategory: true
  },
  {
    id: 6,
    description: "Restaurant Dinner",
    amount: -65.40,
    category: "Food & Dining",
    date: "2 days ago",
    time: "7:30 PM",
    icon: Utensils,
    color: "destructive",
    aiCategory: true
  }
];

export const RecentTransactions = () => {
  return (
    <Card className="card-gradient animate-fade-in">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Recent Transactions</CardTitle>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {transactions.map((transaction, index) => (
          <div 
            key={transaction.id} 
            className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors animate-slide-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full bg-${transaction.color}/10 flex items-center justify-center`}>
                <transaction.icon className={`w-5 h-5 text-${transaction.color}`} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="font-medium">{transaction.description}</p>
                  {transaction.aiCategory && (
                    <Badge variant="secondary" className="text-xs bg-primary/10 text-primary">
                      AI
                    </Badge>
                  )}
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs text-muted-foreground">{transaction.category}</span>
                  <span className="text-xs text-muted-foreground">•</span>
                  <span className="text-xs text-muted-foreground">{transaction.date}</span>
                  <span className="text-xs text-muted-foreground">•</span>
                  <span className="text-xs text-muted-foreground">{transaction.time}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="text-right">
                <p className={`font-bold ${
                  transaction.amount > 0 ? 'text-secondary' : 'text-foreground'
                }`}>
                  {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
                </p>
                {transaction.amount > 0 && (
                  <ArrowDownLeft className="w-3 h-3 text-secondary inline ml-1" />
                )}
                {transaction.amount < 0 && (
                  <ArrowUpRight className="w-3 h-3 text-muted-foreground inline ml-1" />
                )}
              </div>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </div>
          </div>
        ))}

        <div className="pt-4 border-t border-border">
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <span className="text-xs text-muted-foreground">
              AI automatically categorized 5 of 6 transactions
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};