import { cn } from '@/lib/utils';
import { Eyebrow } from './Eyebrow';

interface SectionHeaderProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
  dark?: boolean;
  centered?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
  dark = false,
  centered = false,
}: SectionHeaderProps) {
  return (
    <div className={cn(centered && 'text-center', className)}>
      {eyebrow && (
        <Eyebrow className="mb-4" dark={dark}>
          {eyebrow}
        </Eyebrow>
      )}
      <h2
        className={cn(
          'font-sans font-bold text-[48px] leading-[1.1] tracking-[-0.025em]',
          dark ? 'text-white' : 'text-navy-900'
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-6 text-base leading-relaxed',
            dark ? 'text-white/72' : 'text-slate-600'
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
