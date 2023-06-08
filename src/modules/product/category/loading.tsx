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
            <div className="h-4 w-14 rounded bg-slate-300"></div>
            <div className="h-4 w-10"></div>
          </div>
        </Section>
      </div>

      {/* second section */}
      <section className="pb-24 pt-6">
        <Section className="grid grid-cols-12 gap-x-5">
          <div className="sticky top-0 col-span-3 h-fit animate-pulse space-y-3 border-t border-brand-darkest font-light">
            <div className="h-20 w-full bg-slate-300"></div>
            <div className="h-20 w-full bg-slate-300"></div>
            <div className="h-30 w-full bg-slate-300"></div>
          </div>
          <div className="col-span-9">
            <div className="grid grid-cols-3 gap-x-4 gap-y-12">
              {[1, 2, 3, 4].map((i) => (
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
