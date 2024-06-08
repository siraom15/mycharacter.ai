import { Skeleton } from "./skeleton";

interface LoadingProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "content" | "card" | "dot";
}

function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}

function SkeletonContent() {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}

function SkeletonDot() {
  return (
    <div className="flex items-center justify-center min-h-screen p-5 min-w-screen">
      <div className="flex space-x-2 animate-pulse">
        <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
      </div>
    </div>
  );
}
export function Loading({ type = "dot", ...props }: LoadingProps) {
  if (type === "content") {
    return <SkeletonContent />;
  }
  if (type === "card") {
    return <SkeletonCard />;
  }
  if (type === "dot") {
    return <SkeletonDot />;
  }
  
  // Default to dot
  return <SkeletonDot />;
}
