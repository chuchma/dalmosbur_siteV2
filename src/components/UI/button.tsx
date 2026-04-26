import clsx from "clsx"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  accent?: boolean
  className?: string
}

export default function Button({ children, accent, className,  ...rest }: ButtonProps) {
  return <button {...rest} className={clsx(
    accent ? "bg-[var(--secondary-accent)] hover:bg-[var(--secondary-accent-hover)]" : "bg-[var(--primary-accent)] hover:bg-[var(--primary-accent-hover)]",

    " text-body-small gap-fluid-large py-fluid-medium px-fluid-large rounded-fluid-xsm cursor-pointer duration-500 ease-in-out text-[var(--primary-white)]", className
  )}>{children}</button>
} 