import ProductCardSkeleton from "@/components/product-card/skeleton";
import Section from "@/components/section";

function CategoryLoading() {
  return (
    <div>
      <div className="w-full bg-white">
        <Section className="animate-pulse space-y-7 py-7">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-sm">
              <div className="h-2 w-10 rounded bg-slate-300"></div>
              <div className="h-2 w-10 rounded bg-slate-300"></div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="h-4 w-24 bg-slate-300"></div>
            <div className="h-5 w-28 rounded bg-slate-300"></div>
          </div>
        </Section>
      </div>

      {/* second section */}
      <section className="pb-24 pt-8">
        <Section className="grid grid-cols-12 gap-x-5">
          <div className="sticky top-0 col-span-3 h-fit animate-pulse space-y-3 font-light">
            <div className="h-40 w-full space-y-2">
              <div className="h-3 w-full space-y-4 bg-slate-300" />
              <div className="h-3 w-full space-y-4 bg-slate-300" />
              <div className="h-3 w-full space-y-4 bg-slate-300" />
              <div className="h-3 w-full space-y-4 bg-slate-300" />
              <div className="h-3 w-40 space-y-4 bg-slate-300" />
              <div className="h-3 w-20 space-y-4 bg-slate-300" />
            </div>
            <div className="h-40 w-full space-y-2">
              <div className="h-3 w-full space-y-4 bg-slate-300" />
              <div className="h-3 w-full space-y-4 bg-slate-300" />
              <div className="h-3 w-full space-y-4 bg-slate-300" />
              <div className="h-3 w-full space-y-4 bg-slate-300" />
              <div className="h-3 w-40 space-y-4 bg-slate-300" />
              <div className="h-3 w-20 space-y-4 bg-slate-300" />
            </div>
          </div>
          <div className="col-span-9">
            <div className="product-grid grid grid-cols-3 gap-x-4 gap-y-12">
              {[1, 2, 3].map((i) => (
                <ProductCardSkeleton key={i} />
              ))}
            </div>
          </div>
        </Section>
      </section>
    </div>
  );
}

export default CategoryLoading;
