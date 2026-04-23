import { cn } from '@/lib/utils';

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export function Eyebrow({ children, className, dark = false }: EyebrowProps) {
  return <p className={cn('eyebrow', dark && 'text-amber-500', className)}>{children}</p>;
}
