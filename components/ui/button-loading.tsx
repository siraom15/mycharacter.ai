import { Button } from "@/components/ui/button";
import { ArrowPathIcon } from "@heroicons/react/24/outline";

interface ButtonLoadingProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isLoading: boolean;
  [key: string]: any;
}

export function ButtonLoading({
  children,
  isLoading,
  ...props
}: ButtonLoadingProps) {
  return (
    <Button disabled={isLoading} {...props}>
      {isLoading && <ArrowPathIcon className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </Button>
  );
}
