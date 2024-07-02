import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import React, { ForwardedRef, ReactNode, forwardRef } from "react";

export const CVA_container = cva("", {
  variants: {
    intent: {
      primary: ["py-24"],
      secondary: ["bg-gray-50 py-24"],
      dark: ["bg-zinc-900 py-24"],
    },
    size: {
      xs: ["xs:container"],
      sm: ["sm:container"],
      md: ["md:container"],
      lg: ["lg:container"],
      full: [""],
      default: ["container"],
    },
  },
});

export type VariantSectionProps = VariantProps<typeof CVA_container>;

export type SectionProps = {
  classNameContent?: string;
  children: React.ReactNode;
  ref?: ForwardedRef<HTMLDivElement>;
  overflowHidden?: boolean;
  asChild?: boolean;
  middleElement?: ReactNode;
} & React.HTMLAttributes<HTMLElement> &
  VariantSectionProps;

export const Section = forwardRef<HTMLDivElement, SectionProps>(
  (
    {
      className,
      classNameContent = "",
      intent = "primary",
      size = "default",
      children,
      overflowHidden,
      asChild = false,
      middleElement,
      ...props
    },
    forwardedRef,
  ) => {
    const Comp = asChild ? Slot : "div";
    return (
      <div
        ref={forwardedRef}
        className={cn(CVA_container({ intent }), overflowHidden && "overflow-hidden", className)}
        {...props}
      >
        {middleElement}
        <Comp className={cn(CVA_container({ size }), classNameContent)}>{children}</Comp>
      </div>
    );
  },
);

Section.displayName = "Section";
