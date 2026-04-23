import { cn } from '@/lib/utils';
import { forwardRef } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'navy';
  size?: 'sm' | 'md';
  loading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = 'primary', size = 'md', loading = false, className, children, disabled, ...props },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          'inline-flex items-center gap-[10px] font-sans font-medium rounded-md transition-all duration-micro ease-brand',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/15 focus-visible:border-navy-900',
          size === 'md' && 'text-[15px] px-[22px] py-[14px]',
          size === 'sm' && 'text-[13px] px-4 py-[10px]',
          variant === 'primary' &&
            'bg-amber-500 text-navy-900 hover:bg-amber-600 disabled:opacity-60 disabled:cursor-not-allowed',
          variant === 'ghost' &&
            'bg-transparent text-navy-900 border border-slate-200 hover:border-navy-900 disabled:opacity-60',
          variant === 'navy' && 'bg-navy-900 text-white hover:bg-navy-800 disabled:opacity-60',
          className
        )}
        {...props}
      >
        {loading ? (
          <>
            <svg
              className="animate-spin h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            <span>Submitting…</span>
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
