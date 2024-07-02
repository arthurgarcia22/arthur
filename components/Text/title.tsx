import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { HTMLAttributes, ReactNode, RefAttributes } from "react";

type TextProps = HTMLAttributes<HTMLHeadingElement> &
  Omit<VariantProps<typeof textVariants>, "size"> &
  Required<Pick<VariantProps<typeof textVariants>, "size">> & {
    children: ReactNode;
    span?: boolean;
  } & RefAttributes<HTMLHeadingElement>;

const textVariants = cva("", {
  variants: {
    variant: {
      none: "",
      transparent: "opacity-75 hover:opacity-95",
      highlighted: "bg-zinc-900/80 text-white hover:bg-zinc-900 px-1",
    },
    color: {
      white: "text-white",
      black: "text-zinc-900",
      primary: "text-primary-500",
    },
    size: {
      p: "text-md",
      h3: "text-xl md:text-2xl font-semibold",
      h2: "text-3xl md:text-3xl font-semibold",
      h1: "text-4xl md:text-5xl font-semibold",
    },
    underlined: {
      primary:
        "relative after:absolute after:left-0 after:w-8 after:h-1 after:bg-primary-500 after:-bottom-1 after:translate-y-full",
      white:
        "relative after:absolute after:left-0 after:w-8 after:h-1 after:bg-white after:-bottom-1 after:translate-y-full",
      black:
        "relative after:absolute after:left-0 after:w-8 after:h-1 after:bg-black after:-bottom-1 after:translate-y-full",
      false: null,
    },
  },
  compoundVariants: [
    {
      variant: "transparent",
      color: "black",
      class: "text-zinc-900/75 hover:text-zinc-900/95",
    },
    {
      variant: "highlighted",
      color: "white",
      class: "bg-primary-500 text-white hover:bg-primary-500/90 px-1",
    },
    {
      variant: "highlighted",
      color: "black",
      class: "bg-white/80 text-zinc-900 hover:bg-white",
    },
    {
      variant: "highlighted",
      color: "primary",
      class: "bg-white/80 text-primary-500 hover:bg-white",
    },
  ],
  defaultVariants: {
    color: "black",
    variant: "none",
  },
});

export const Text = ({
  size,
  variant,
  className,
  children,
  color,
  underlined,
  span = true,
  ...props
}: TextProps) => {
  const Comp = span ? "span" : size!;

  return (
    <Comp className={cn(textVariants({ variant, size, color, underlined, className }))} {...props}>
      {children}
    </Comp>
  );
};
