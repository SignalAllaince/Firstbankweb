function ProductCardSkeleton() {
  return (
    <div className="mx-auto h-[350px] w-full max-w-sm animate-pulse">
      <div className="flex animate-pulse space-x-4">
        <div className="flex-1 space-y-10 py-1">
          <div className="h-[200px] rounded bg-slate-300"></div>
          <div className="space-y-5">
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2 h-2 rounded bg-slate-300"></div>
            </div>
            <div className="w-full space-y-2">
              <div className="h-2 rounded bg-slate-300"></div>
              <div className="h-2 rounded bg-slate-300"></div>
              <div className="h-2 rounded bg-slate-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCardSkeleton;
