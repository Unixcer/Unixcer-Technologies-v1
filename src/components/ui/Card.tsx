import * as React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export function Card({
  children,
  className = '',
  hoverEffect = true,
  ...props
}: CardProps) {
  return (
    <div
      className={`relative rounded-3xl bg-white/80 dark:bg-[#0e1420]/80 border border-slate-200/80 dark:border-white/10 backdrop-blur-md p-6 sm:p-8 transition-all duration-300 ${
        hoverEffect
          ? 'hover:shadow-2xl hover:border-blue-500/30 hover:-translate-y-1'
          : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

