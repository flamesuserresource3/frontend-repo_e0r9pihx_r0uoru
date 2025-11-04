import React from 'react';
import { CheckCircle, Calendar, Star, User } from 'lucide-react';

const StatCard = ({ icon: Icon, label, value, accent }) => (
  <div className="rounded-xl border border-white/10 bg-white/5 p-4 flex items-center gap-4">
    <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${accent}`}>
      <Icon size={18} className="text-white" />
    </div>
    <div>
      <p className="text-white/60 text-sm">{label}</p>
      <p className="text-white text-xl font-semibold">{value}</p>
    </div>
  </div>
);

export default function Dashboard() {
  const activities = [
    { id: 1, title: 'Fix sign-in redirect', tag: 'Bug', person: 'Alex', time: '2h ago' },
    { id: 2, title: 'Polish onboarding flow', tag: 'Design', person: 'Marina', time: '5h ago' },
    { id: 3, title: 'Implement analytics events', tag: 'Task', person: 'Diego', time: 'Yesterday' },
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={CheckCircle} label="Completed" value="128" accent="bg-gradient-to-br from-emerald-500/80 to-teal-500/80" />
        <StatCard icon={Calendar} label="This week" value="24" accent="bg-gradient-to-br from-violet-500/80 to-fuchsia-500/80" />
        <StatCard icon={Star} label="Priority" value="8" accent="bg-gradient-to-br from-amber-500/80 to-rose-500/80" />
        <StatCard icon={User} label="Assignees" value="12" accent="bg-gradient-to-br from-sky-500/80 to-indigo-500/80" />
      </div>

      <div className="rounded-xl border border-white/10 overflow-hidden">
        <div className="px-4 py-3 bg-white/5 border-b border-white/10 text-white/80 text-sm">Recent activity</div>
        <ul className="divide-y divide-white/10 bg-white/5">
          {activities.map((a) => (
            <li key={a.id} className="px-4 py-3 flex items-center gap-4">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-slate-500 to-slate-700" />
              <div className="min-w-0 flex-1">
                <p className="text-white truncate">
                  <span className="text-white/70">{a.person}</span>
                  <span className="text-white/40"> • </span>
                  {a.title}
                </p>
                <p className="text-white/50 text-xs">{a.time}</p>
              </div>
              <span className="inline-flex items-center text-xs px-2 py-1 rounded-md border border-white/20 text-white/70">
                {a.tag}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
