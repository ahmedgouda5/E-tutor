import * as React from "react";
import { cn } from "@/lib/utils";

function PageHeader({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between", className)}
      {...props}
    >
      {children}
    </div>
  );
}

function PageTitle({
  className,
  children,
  ...props
}: React.ComponentProps<"h1">) {
  return (
    <h1
      className={cn("text-xl font-semibold tracking-tight sm:text-2xl", className)}
      {...props}
    >
      {children}
    </h1>
  );
}

function PageDescription({
  className,
  children,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
}

function PageActions({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("flex flex-wrap items-center gap-2", className)}
      {...props}
    />
  );
}

function SectionHeader({
  className,
  title,
  description,
  action,
  ...props
}: {
  title: string;
  description?: string;
  action?: React.ReactNode;
} & React.ComponentProps<"div">) {
  return (
    <div
      className={cn("flex items-center justify-between gap-4 mb-4", className)}
      {...props}
    >
      <div className="space-y-1">
        <h3 className="text-base font-semibold tracking-tight">{title}</h3>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>
      {action}
    </div>
  );
}

export { PageHeader, PageTitle, PageDescription, PageActions, SectionHeader };