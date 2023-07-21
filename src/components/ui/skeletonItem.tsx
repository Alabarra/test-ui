import { Skeleton } from "@/components/ui/skeleton"
 
export function SkeletonItem() {
  return (
    <div className="flex items-center space-x-4 m-5">
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-4 w-[300px]" />
      </div>
      <Skeleton className="h-16 w-16 rounded-lg" />
    </div>
  )
}