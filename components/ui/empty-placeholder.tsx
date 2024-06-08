import { cn } from "@/lib/utils";
import {
  CubeTransparentIcon,
} from "@heroicons/react/24/outline";

interface EmptyPlaceholderProp extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  title: string;
  description: string;
}

export function EmptyPlaceholder({
  className,
  title,
  description,
  ...props
}: EmptyPlaceholderProp) {
  return (
    <div
      {...props}
      className={cn(
        className,
        "flex h-[450px] shrink-0 items-center justify-center rounded-md border border-dashed",
      )}
    >
      <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
        <CubeTransparentIcon className="w-12 h-12 text-gray-400" />

        <h3 className="mt-4 text-lg font-semibold">{title}</h3>
        <p className="mb-4 mt-2 text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
