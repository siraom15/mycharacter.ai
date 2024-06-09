import { cn } from "@/lib/utils";
import { Skeleton } from "./skeleton";

interface LoadingProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "content" | "card" | "dot";
}

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const SkeletonCard = ({ className, ...props }: SkeletonProps) => (
  <div className={cn(className, "flex flex-col space-y-3")} {...props}>
    <Skeleton className="h-[125px] w-[250px] rounded-xl" />
    <div className="space-y-2">
      <Skeleton className="h-4 w-[250px]" />
      <Skeleton className="h-4 w-[200px]" />
    </div>
  </div>
);

const SkeletonContent = ({ className, ...props }: SkeletonProps) => (
  <div className={cn("flex items-center space-x-4")} {...props}>
    <Skeleton className="h-12 w-12 rounded-full" />
    <div className="space-y-2">
      <Skeleton className="h-4 w-[250px]" />
      <Skeleton className="h-4 w-[200px]" />
    </div>
  </div>
);

const SkeletonDot = ({ className, ...props }: SkeletonProps) => (
  <div className={cn("flex items-center justify-center min-h-screen p-5 min-w-screen")} {...props}>
    <div className="flex space-x-2 animate-pulse">
      {[...Array(3)].map((_, index) => (
        <div key={index} className="w-3 h-3 bg-teal-400 rounded-full"></div>
      ))}
    </div>
  </div>
);

export function Loading({ type = "dot", ...props }: LoadingProps) {
  switch (type) {
    case "content":
      return <SkeletonContent {...props} />;
    case "card":
      return <SkeletonCard {...props} />;
    case "dot":
    default:
      return <SkeletonDot {...props} />;
  }
}
