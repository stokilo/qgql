import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { mergeRefs } from '@/lib/react-utils';
import { cn } from '@/lib/utils';
import StyledSpinner from "@/components/ui/StyledSpinner";


const buttonVariants = cva(
  'inline-flex relative items-center justify-center rounded-md text-sm gap-1 font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
    {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        outlineDestructive:
          'border border-destructive bg-background text-destructive hover:bg-destructive hover:text-primary-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        xs: 'h-8 px-2.5 tracking-tight',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md text-lg px-8',
        xl: 'h-14 rounded-lg text-xl px-8',
        icon: 'h-10 w-10',
        'icon-sm': 'h-9 w-9',
        'icon-xs': 'h-8 w-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, loading = false, onClick, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    const internalRef = React.useRef<HTMLButtonElement>(null);
    const allRefs = mergeRefs([ref, internalRef]);
    const baseSize = React.useMemo(() => {
      if (loading) {
        return {
          width: internalRef.current?.offsetWidth,
          height: internalRef.current?.offsetHeight,
        };
      }
    }, [loading]);
    const realChildren = loading ? (
      <span>
        <StyledSpinner size={16} />
      </span>
    ) : (
      children
    );
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={allRefs}
        {...props}
        type={props.type === 'submit' && loading ? 'button' : props.type || 'button'}
        onClick={loading || props.disabled ? null : onClick}
        style={!loading ? undefined : { width: baseSize?.width, height: baseSize?.height }}
      >
        {realChildren}
      </Comp>
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
