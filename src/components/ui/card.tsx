import * as React from "react"

import { cn } from "@/lib/utils"

// Custom Code
const customClasses = {
  card: "shadow-none p-4 gap-4 flex flex-col",
  childImgs: "[&_img]:rounded-lg",
  childText: "[&_p]:text-sm [&_li]:text-sm [&_span]:text-sm",
  header: "p-0 gap-2",
  content: "p-0",
  footer: "p-0"
}

// Custom Code
const HorizontalCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-col md:flex-row items-start gap-4 rounded-lg border bg-card text-card-foreground shadow-sm p-4 items-center",
      customClasses.childImgs,
      customClasses.childText,
      className
    )}
    {...props}
  >
    {children}
  </div>
))
HorizontalCard.displayName = "HorizontalCard"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      customClasses.card,
      customClasses.childImgs,
      customClasses.childText,
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", customClasses.header, className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0",customClasses.content, className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", customClasses.footer, className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, HorizontalCard }

