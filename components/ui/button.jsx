import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  // Base: focus ring, disabled state and active press feedback added for a11y/UX.
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-primary disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default: "bg-accent text-primary shadow-glow hover:bg-accent-hover",
        primary: "bg-white text-primary hover:bg-white/90",
        outline:
          "border border-accent/60 bg-transparent text-accent hover:border-accent hover:bg-accent hover:text-primary",
        // Previously used in markup but never defined (rendered unstyled):
        secondary:
          "border border-line bg-surface-2 text-white hover:border-accent/50 hover:bg-surface-3",
        ghost: "bg-transparent text-accent hover:bg-accent hover:text-primary",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        default: "h-11 px-6 text-sm",
        md: "h-11 px-6 text-sm",
        lg: "h-14 px-8 text-sm uppercase tracking-[0.12em]",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
