import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"
import { ChevronRight, LinkIcon } from "lucide-react"
import { cn } from "@/lib/utils"

const illustratedButtonVariants = cva(
  "group relative w-full max-w-2xl overflow-hidden rounded-2xl border transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-br from-white to-gray-50 border-gray-200 hover:border-gray-300 hover:shadow-md hover:shadow-gray-100/50",
        primary:
          "bg-primary text-white  hover:shadow-md hover:shadow-blue-500/25",
        secondary:
          "bg-gradient-to-br from-purple-500 to-purple-600 border-purple-500 text-white hover:from-purple-600 hover:to-purple-700 hover:shadow-md hover:shadow-purple-500/25",
        success:
          "bg-gradient-to-br from-green-500 to-green-600 border-green-500 text-white hover:from-green-600 hover:to-green-700 hover:shadow-md hover:shadow-green-500/25",
        outline: "bg-white border-2 border-primary hover:shadow-sm",
        ghost: "bg-transparent border-transparent hover:bg-gray-50 hover:border-gray-200",
      },
      size: {
        xs: "p-2",
        sm: "p-4",
        default: "p-6",
        lg: "p-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

const illustrationContainerVariants = cva(
  "relative flex-shrink-0 flex items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110",
  {
    variants: {
      size: {
        sm: "w-6 h-6 lg:w-12 lg:h-12",
        default: "w-12 h-12 lg:w-16 lg:h-16",
        lg: "w-16 h-16 lg:w-20 lg:h-20",
      },
      type: {
        image: "overflow-hidden",
        icon: "shadow-sm",
      },
    },
    defaultVariants: {
      size: "default",
      type: "image",
    },
  },
)

const iconVariants = cva("transition-transform duration-300", {
  variants: {
    size: {
      sm: "w-6 h-6",
      default: "w-8 h-8",
      lg: "w-10 h-10",
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
      asChild = false,
      image,
      imageAlt = "",
      icon: Icon,
      iconClassName,
      title,
      description,
      showChevron = true,
      badge,
      illustrationSize = "default",
      illustrationClassName,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button"
    const hasIllustration = image || Icon

    return (
      <Comp className={cn(illustratedButtonVariants({ variant, size }), className)} ref={ref} {...props}>


        <div className="relative flex items-center gap-4">
          {/* Illustration */}
          {hasIllustration && (
            <div
              className={cn(
                illustrationContainerVariants({
                  size: illustrationSize,
                  type: image ? "image" : "icon",
                }),
                variant === "default" || variant === "outline" || variant === "ghost"
                  ? ""
                  : "bg-white",
                illustrationClassName,
              )}
            >
              {/* Background glow for icons */}
              {Icon && (
                <div
                  className={cn(
                    "absolute inset-0 rounded-xl transition-opacity duration-300",

                  )}
                />
              )}

              

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
                      ? "text-primary group-hover:text-primary"
                      : "text-primary",
                    iconClassName,
                  )}
                />
              )}
            </div>
          )}

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3
                    className={cn(
                      "text-base font-bold md:text-lg lg:text-2xl leading-tight truncate transition-colors duration-200",
                      variant === "default" || variant === "outline" || variant === "ghost"
                        ? "text-primary"
                        : "text-white",
                    )}
                  >
                    {title}
                  </h3>
                  {badge && (
                    <span
                      className={cn(
                        "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium",
                        variant === "default" || variant === "outline" || variant === "ghost"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-white/20 text-white",
                      )}
                    >
                      {badge}
                    </span>
                  )}
                </div>
                {description && (
                  <p
                    className={cn(
                      "text-lg leading-relaxed transition-colors duration-200",
                      variant === "default" || variant === "outline" || variant === "ghost"
                        ? "text-gray-600 group-hover:text-gray-500"
                        : "text-white/90",
                    )}
                  >
                    {description}
                  </p>
                )}
              </div>

              {/* Chevron */}
              {showChevron && (
                <div className="flex-shrink-0 ml-2">
                  <div
                    className={cn(
                      "flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 group-hover:scale-110",
                      variant === "default" || variant === "outline" || variant === "ghost"
                        ? "bg-gray-100 group-hover:bg-gray-200"
                        : "bg-white/20 group-hover:bg-white/30",
                    )}
                  >
                    <ChevronRight
                      className={cn(
                        "w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5",
                        variant === "default" || variant === "outline" || variant === "ghost"
                          ? "text-gray-600"
                          : "text-white",
                      )}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

      </Comp>
    )
  },
)

IllustratedButton.displayName = "IllustratedButton"

export { IllustratedButton, illustratedButtonVariants }
