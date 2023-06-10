import Section from "@/components/section";

function ProductPageLoader() {
  return (
    <div>
      <div className="w-full bg-white">
        <Section className="animate-pulse space-y-7 py-7">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-sm">
              <div className="h-2 w-10 rounded bg-slate-200"></div>
              <div className="h-2 w-10 rounded bg-slate-200"></div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="h-4 w-24 bg-slate-200"></div>
            <div className="h-5 w-28 rounded bg-slate-200"></div>
          </div>
        </Section>
      </div>

      {/* second section */}
      <section className="border-t pb-24 pt-8">
        <Section className="mx-auto mt-6 max-w-2xl  space-y-8 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-16 lg:space-y-0 lg:px-8">
          <div className="h-fit animate-pulse space-y-3 font-light">
            <div className="h-96 w-full space-y-2 bg-slate-200"></div>
            <div className="flex items-center justify-center gap-3 px-3 sm:px-0">
              {[1, 2, 3].map((card) => (
                <div
                  key={card}
                  className="h-[80px] w-[100px]  overflow-hidden rounded-[4px] bg-slate-200"
                />
              ))}
            </div>
          </div>
          <div className="animate-pulse space-y-3">
            <div className="h-3 w-2/3 bg-slate-200" />
            <div className="h-3 w-1/2 bg-slate-200" />
            <div className="h-3 w-1/3 bg-slate-200" />
            <div className="h-3 w-1/4 bg-slate-200" />
            <div className="h-40 w-full bg-slate-200" />
            <div className="h-3 w-1/3 bg-slate-200" />
            <div className="h-3 w-1/3 bg-slate-200" />
            <div className="h-3 w-1/4 bg-slate-200" />
            <div className="h-14 w-full bg-slate-200" />
          </div>
        </Section>
      </section>
    </div>
  );
}

export default ProductPageLoader;
