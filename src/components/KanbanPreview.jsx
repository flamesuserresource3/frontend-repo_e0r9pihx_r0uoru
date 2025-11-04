import React from 'react';
import { Tag, User } from 'lucide-react';

const Column = ({ title, count, children }) => (
  <div className="rounded-xl border border-white/10 bg-white/5 p-3 flex flex-col gap-3 min-w-[260px]">
    <div className="flex items-center justify-between">
      <p className="text-white/80 text-sm font-medium">{title}</p>
      <span className="text-white/60 text-xs">{count}</span>
    </div>
    {children}
  </div>
);

const Card = ({ title, tag, assignee, accent = 'from-violet-500 to-fuchsia-500' }) => (
  <div className="rounded-lg border border-white/10 bg-[#0D131A] p-3 hover:border-white/20 transition-colors">
    <p className="text-white text-sm mb-2 line-clamp-2">{title}</p>
    <div className="flex items-center justify-between text-xs text-white/60">
      <span className="inline-flex items-center gap-1"><Tag size={14} /> {tag}</span>
      <span className={`h-6 w-6 rounded-full bg-gradient-to-br ${accent} flex items-center justify-center text-[10px] text-white`}>
        <User size={12} />
      </span>
    </div>
  </div>
);

export default function KanbanPreview() {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-white text-lg font-semibold">Board</h2>
        <p className="text-white/60 text-sm">Lightweight preview of your workflow</p>
      </div>
      <div className="overflow-x-auto">
        <div className="grid grid-flow-col auto-cols-[minmax(260px,1fr)] gap-4 min-w-full">
          <Column title="Backlog" count={8}>
            <Card title="Audit spacing scale and apply to marketing pages" tag="Design" accent="from-amber-500 to-rose-500" />
            <Card title="Instrument signup funnel with analytics events" tag="Task" accent="from-sky-500 to-indigo-500" />
            <Card title="Migrate components to new theming API" tag="Chore" />
          </Column>
          <Column title="In Progress" count={5}>
            <Card title="Fix OAuth redirect loop on mobile" tag="Bug" accent="from-emerald-500 to-teal-500" />
            <Card title="Implement command palette providers" tag="Feature" />
          </Column>
          <Column title="Review" count={3}>
            <Card title="Refactor grid for virtualized list" tag="Tech" accent="from-sky-500 to-cyan-500" />
            <Card title="Polish empty states for board" tag="Design" accent="from-amber-500 to-rose-500" />
          </Column>
          <Column title="Done" count={12}>
            <Card title="Ship onboarding checklist and tips" tag="Feature" accent="from-emerald-500 to-lime-500" />
          </Column>
        </div>
      </div>
    </section>
  );
}
