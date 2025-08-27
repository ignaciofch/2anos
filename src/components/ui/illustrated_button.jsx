import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"
import { ChevronRight, LinkIcon } from "lucide-react"
import { cn } from "@/lib/utils"

const illustratedButtonVariants = cva(
  "group relative overflow-hidden inline-flex items-center justify-start w-full p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary",
  {
    variants: {
      variant: {
        default: "bg-white border-gray-200 hover:border-gray-300 text-primary",
        outline: "border-primary bg-transparent hover:bg-primary/5",
        ghost: "border-transparent bg-transparent hover:bg-gray-100",
        primary: "bg-primary border-primary text-white hover:bg-primary/90",
        secondary: "bg-secondary border-secondary text-secondary-foreground hover:bg-secondary/80",
      },
      size: {
        sm: "p-4 rounded-xl",
        default: "p-6 rounded-2xl",
        lg: "p-8 rounded-3xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

const illustrationContainerVariants = cva(
  "relative flex items-center justify-center rounded-xl overflow-hidden flex-shrink-0",
  {
    variants: {
      size: {
        sm: "w-12 h-12",
        default: "w-16 h-16",
        lg: "w-20 h-20",
        xl: "w-24 h-24",
      },
      type: {
        icon: "",
        image: "shadow-md",
      },
    },
    defaultVariants: {
      size: "default",
      type: "icon",
    },
  },
)

const iconVariants = cva("", {
  variants: {
    size: {
      sm: "w-6 h-6",
      default: "w-8 h-8",
      lg: "w-10 h-10",
      xl: "w-12 h-12",
    },
  },
  defaultVariants: {
    size: "default",
  },
})


const IllustratedButton = React.forwardRef(
  (
    {
      className,
      variant,
      size,
      title,
      description,
      Icon,
      image,
      imageAlt = "",
      badge,
      showChevron = true,
      illustrationSize = "default",
      illustrationClassName,
      iconClassName,
      ...props
    },
    ref,
  ) => {
    const hasIllustration = Icon || image
    const Comp = "button"

    return (
      <Comp className={cn(illustratedButtonVariants({ variant, size }), className)} ref={ref} {...props}>
        <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-center z-10" />

        <div className="relative flex items-center w-full z-20">
          {/* Illustration */}
          {hasIllustration && (
            <div
              className={cn(
                illustrationContainerVariants({
                  size: illustrationSize,
                  type: image ? "image" : "icon",
                }),
                variant === "default" || variant === "outline" || variant === "ghost" ? "" : "bg-white",
                illustrationClassName,
                "mr-4", // Add consistent margin
              )}
            >
              {/* Background glow for icons */}
              {Icon && <div className={cn("absolute inset-0 rounded-xl transition-opacity duration-300")} />}

              {/* Image */}
              {image && (
                <img
                  src={image || "/placeholder.svg"}
                  alt={imageAlt}
                  className="w-full h-full object-cover rounded-xl shadow-lg"
                  loading="lazy"
                />
              )}

              {/* Icon */}
              {Icon && (
                <Icon
                  className={cn(
                    iconVariants({ size: illustrationSize }),
                    variant === "default" || variant === "outline" || variant === "ghost"
                      ? "text-primary group-hover:text-primary transition-colors duration-500"
                      : "text-primary group-hover:text-primary transition-colors duration-500",
                    iconClassName,
                  )}
                />
              )}
            </div>
          )}

          {/* Content - takes up remaining space */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3
                className={cn(
                  "text-base font-bold md:text-lg lg:text-2xl leading-tight truncate transition-colors duration-500",
                  variant === "default" || variant === "outline" || variant === "ghost"
                    ? "text-primary group-hover:text-primary"
                    : "text-white group-hover:text-primary",
                )}
              >
                {title}
              </h3>
              {badge && (
                <span
                  className={cn(
                    "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium transition-colors duration-500",
                    variant === "default" || variant === "outline" || variant === "ghost"
                      ? "bg-blue-100 text-blue-800 group-hover:bg-blue-100 group-hover:text-blue-800"
                      : "bg-white/20 text-white group-hover:bg-blue-100 group-hover:text-blue-800",
                  )}
                >
                  {badge}
                </span>
              )}
            </div>
            {description && (
              <p
                className={cn(
                  "text-base leading-relaxed transition-colors duration-500",
                  variant === "default" || variant === "outline" || variant === "ghost"
                    ? "text-gray-600 group-hover:text-gray-600"
                    : "text-white/90 group-hover:text-gray-600",
                )}
              >
                {description}
              </p>
            )}
          </div>

          {showChevron && (
            <div className="flex-shrink-0 ml-4">
              <div
                className={cn(
                  "flex items-center justify-center w-8 h-8 rounded-full transition-all duration-500 group-hover:scale-110",
                  variant === "default" || variant === "outline" || variant === "ghost"
                    ? "bg-gray-100 group-hover:bg-gray-200"
                    : "bg-white/20 group-hover:bg-gray-200",
                )}
              >
                <ChevronRight
                  className={cn(
                    "w-4 h-4 transition-all duration-500 group-hover:translate-x-0.5",
                    variant === "default" || variant === "outline" || variant === "ghost"
                      ? "text-gray-600 group-hover:text-gray-600"
                      : "text-white group-hover:text-gray-600",
                  )}
                />
              </div>
            </div>
          )}
        </div>
      </Comp>
    )
  },
)
IllustratedButton.displayName = "IllustratedButton"


export { IllustratedButton, illustratedButtonVariants }
