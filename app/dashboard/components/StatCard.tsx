import { LucideIcon, TrendingUp } from "lucide-react";

type Props = {
  title: string;
  value: string;
  icon: LucideIcon;
  color: string;
};

export default function StatCard({
  title,
  value,
  icon: Icon,
  color,
}: Props) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      <div className="flex items-start justify-between">

        <div>

          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <h2 className="mt-2 text-4xl font-bold tracking-tight text-slate-800">
            {value}
          </h2>

          <div className="mt-4 flex items-center gap-2 text-sm text-emerald-600">
            <TrendingUp size={16} />
            <span>Updated today</span>
          </div>

        </div>

        <div
          className={`rounded-2xl p-4 ${color} transition-transform duration-300 group-hover:scale-110`}
        >
          <Icon size={30} className="text-white" />
        </div>

      </div>

    </div>
  );
}