import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { Circle } from "lucide-react"

import { cn } from "@/lib/utils"

const RadioGroupIllustrated = React.forwardRef(({ className, ...props }, ref) => {
  return (<RadioGroupPrimitive.Root className={cn("grid gap-2", className)} {...props} ref={ref} />);
})
RadioGroupIllustrated.displayName = RadioGroupPrimitive.Root.displayName

const RadioGroupItemIllustrated = React.forwardRef(
  ({ className, children, illustration, ...props }, ref) => {
    return (
      <RadioGroupPrimitive.Item
        ref={ref}
        className={cn(
          "inline-flex w-full items-center justify-between gap-4 rounded-xl border border-primary shadow-sm bg-primary-foreground text-primary px-4 py-5 text-sm font-medium transition-colors hover:bg-primary/90 hover:text-primary-foreground hover:translate-x-1 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          "data-[state=checked]:bg-primary/20 data-[state=checked]:text-primary data-[state=checked]:border-2 data-[state=checked]:shadow-lg group",
          className
        )}
        {...props}
      >
        <div className="flex items-center gap-4">
          {/* Radio circle */}
          <span className="h-4 w-4 rounded-full border-2 border-primary bg-white flex items-center justify-center">
            <RadioGroupPrimitive.Indicator>
              <Circle className="h-2.5 w-2.5 fill-primary" />
            </RadioGroupPrimitive.Indicator>
          </span>
          <span className="text-lg font-normal text-card-foreground">{children}</span>
        </div>
        {/* Ilustración (puede ser un ícono o una imagen) */}
        {illustration && <div className='flex items-center justify-center w-12 h-12 group-data-[state=checked]:w-16 group-data-[state=checked]:h-16 transition-all'>{illustration}</div>}
      </RadioGroupPrimitive.Item>
    );
  }
);
RadioGroupItemIllustrated.displayName = RadioGroupPrimitive.Item.displayName;


export { RadioGroupIllustrated, RadioGroupItemIllustrated }
