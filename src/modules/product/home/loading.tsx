import ProductCardSkeleton from "@/components/product-card/skeleton";

export default function HomeLoader() {
  return (
    <div className="space-y-6 py-10">
      <div className="h-12 animate-pulse bg-slate-300"></div>
      <div className="product-grid grid gap-x-3 gap-y-10">
        {[1, 2, 3, 4].map((i) => (
          <ProductCardSkeleton key={1} />
        ))}
      </div>
    </div>
  );
}
