import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-button hover:shadow-button-hover hover:translate-y-[-2px] hover:bg-primary/95",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-button hover:shadow-button-hover hover:translate-y-[-2px]",
        outline: "border-2 border-primary/20 bg-transparent text-foreground hover:border-primary hover:bg-primary/5 hover:text-primary",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/70 shadow-sm hover:shadow-md",
        ghost: "hover:bg-muted hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline decoration-primary/40 hover:decoration-primary",
        gold: "bg-gradient-to-r from-[hsl(38,92%,50%)] to-[hsl(42,96%,56%)] text-white shadow-gold hover:shadow-lg hover:translate-y-[-2px] font-semibold",
        hero: "bg-white text-primary hover:bg-white/95 shadow-lg hover:shadow-xl hover:translate-y-[-2px]",
        "hero-outline": "border-2 border-white/30 bg-white/5 backdrop-blur-sm text-white hover:bg-white/15 hover:border-white/50",
        whatsapp: "bg-gradient-to-r from-[hsl(142,70%,45%)] to-[hsl(142,70%,40%)] text-white shadow-button hover:shadow-button-hover hover:translate-y-[-2px]",
        premium: "bg-gradient-to-r from-primary via-primary/90 to-[hsl(38,92%,50%)] text-white shadow-lg hover:shadow-xl hover:translate-y-[-2px]",
      },
      size: {
        default: "h-11 px-6 py-2.5",
        sm: "h-9 rounded-lg px-4 text-xs",
        lg: "h-14 rounded-xl px-8 text-base font-semibold",
        xl: "h-16 rounded-2xl px-10 text-lg font-semibold",
        icon: "h-10 w-10 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
