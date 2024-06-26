import { Button } from "@/components/ui/button";
import { ArrowPathIcon } from "@heroicons/react/24/outline";

interface ButtonLoadingProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isLoading?: boolean;
}

export function ButtonLoading({
  children,
  isLoading=false,
  ...props
}: ButtonLoadingProps) {
  return (
    <Button disabled={isLoading} {...props}>
      {isLoading && <ArrowPathIcon className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </Button>
  );
}
