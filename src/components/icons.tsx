import type { SVGProps } from 'react';
import { cn } from '@/lib/utils';

export function GPWayLogo({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 20"
      className={cn('h-auto', className)}
      {...props}
    >
      <text
        x="0"
        y="15"
        fontFamily="var(--font-headline), sans-serif"
        fontSize="16"
        fontWeight="bold"
        className="fill-foreground"
      >
        GP
        <tspan className="fill-primary">Way</tspan>
      </text>
    </svg>
  );
}
