import React from "react";
import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg" | "xl";
  href?: string;
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-sans font-bold transition-all duration-200 rounded-full shrink-0 group";
  
  const variants = {
    primary: "bg-brand-coral text-white hover:opacity-90 shadow-none",
    secondary: "bg-brand-dark text-white hover:opacity-90 shadow-none",
    outline: "border-2 border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white",
    ghost: "bg-transparent text-brand-dark hover:bg-brand-dark/5",
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-7 py-3 text-base rounded-[40px]",
    lg: "px-7 py-3.5 text-lg rounded-[40px]",
    xl: "px-9 py-4 text-xl rounded-[40px]",
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    // If it's an external link
    if (href.startsWith("http") || href.startsWith("mailto") || href.startsWith("tel")) {
      return (
        <a href={href} className={classes} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>
          {children}
        </a>
      );
    }
    return (
      <Link to={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
