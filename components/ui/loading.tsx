interface LoadingProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Loading({ ...props }: LoadingProps) {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-cyan-500"></div>
    </div>
  );
}
