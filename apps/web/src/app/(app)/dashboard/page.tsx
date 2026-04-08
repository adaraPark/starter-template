import type { Metadata } from "next";
import { Activity, Users, Package, TrendingUp } from "lucide-react";
import { StatCard, MiniProgressBar } from "@starter/ui/composed";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Overview of your application metrics and activity.",
};

export default function DashboardPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Overview of your application metrics and activity.
        </p>
      </div>

      {/* Stat cards grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Users"
          value="1,234"
          subtitle="Active accounts"
          icon={Users}
          trend="up"
          trendValue="+12%"
        />
        <StatCard
          title="Active Items"
          value="567"
          subtitle="Published items"
          icon={Package}
          trend="up"
          trendValue="+8%"
        />
        <StatCard
          title="Activity"
          value="89%"
          subtitle="Engagement rate"
          icon={Activity}
          trend="neutral"
          trendValue="0%"
        />
        <StatCard
          title="Growth"
          value="+23%"
          subtitle="Month over month"
          icon={TrendingUp}
          trend="up"
          trendValue="+5%"
          variant="success"
        />
      </div>

      {/* Progress section */}
      <div className="mt-8 rounded-xl border border-border bg-card p-6">
        <h2 className="mb-4 text-lg font-semibold text-card-foreground">Progress Overview</h2>
        <div className="space-y-4">
          <div>
            <div className="mb-1 flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Setup Complete</span>
              <span className="font-medium text-foreground">75%</span>
            </div>
            <MiniProgressBar value={75} color="primary" />
          </div>
          <div>
            <div className="mb-1 flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Database Connected</span>
              <span className="font-medium text-foreground">100%</span>
            </div>
            <MiniProgressBar value={100} color="success" />
          </div>
          <div>
            <div className="mb-1 flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Auth Configured</span>
              <span className="font-medium text-foreground">0%</span>
            </div>
            <MiniProgressBar value={0} color="warning" />
          </div>
        </div>
      </div>
    </div>
  );
}
