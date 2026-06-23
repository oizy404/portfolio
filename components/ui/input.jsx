import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    (<input
      type={type}
      className={cn(
        "flex h-12 w-full rounded-lg border border-line bg-surface-3 px-4 text-base text-white outline-none transition-colors placeholder:text-white/40 focus:border-accent focus-visible:ring-2 focus-visible:ring-accent/40",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }
