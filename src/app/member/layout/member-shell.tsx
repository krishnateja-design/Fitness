import type { ReactNode } from "react";
import { MemberHeader } from "./member-header";
import { MemberSidebar } from "./member-sidebar";

type MemberShellProps = {
  children: ReactNode;
  title?: string;
  subtitle?: string;
};

export const memberName = "Krishna";

export function MemberShell({
  children,
  title,
  subtitle,
}: MemberShellProps) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <MemberSidebar />
      <div className="min-h-screen lg:pl-64">
        <MemberHeader
          memberName={memberName}
          title={title}
          subtitle={subtitle}
        />
        <main className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
          {children}
        </main>
      </div>
    </div>
  );
}
