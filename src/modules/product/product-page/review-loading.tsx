import Section from "@/components/section";

function ReviewLoading() {
  return (
    <Section className="grid grid-cols-2 gap-4">
      {/* second section */}
      <section className="animate-pulse space-y-7 border-b pb-4 pt-7">
        <div className="flex flex-col gap-2">
          <div className="h-8 w-20 rounded bg-slate-300"></div>
          <div className="flex h-32 w-32 items-center justify-between rounded bg-slate-300"></div>
        </div>
      </section>
      <section className="pb-24 pt-4">
        <div className="">
          <table className="min-w-[640px] text-left text-sm font-light sm:min-w-full">
            <tbody>
              {[1, 2].map((item) => (
                <div
                  key={item}
                  className="flex items-start justify-between border-b"
                >
                  <div className="max-w-[400px] py-4 text-slate-700">
                    <div className="item-start flex gap-3">
                      <div className="flex h-[70px] w-[70px] flex-shrink-0 overflow-hidden  rounded-[4px] bg-brand-light">
                        <div className="h-full w-full bg-slate-200 object-cover object-center" />
                      </div>
                      <div className="flex h-[70px] flex-col justify-between">
                        <div className="space-y-2">
                          <div className="h-2 w-40 max-w-[400px] bg-slate-200" />
                          <div className="h-2 w-28 max-w-[400px] bg-slate-200" />
                          <div className="h-2 w-20 max-w-[400px] bg-slate-200" />
                        </div>
                        <div className="h-2 w-14 bg-slate-200 px-2" />
                        <div className="h-5 w-14 bg-slate-200 px-2" />
                      </div>
                    </div>
                  </div>

                  <div className="flex h-full w-[200px] flex-col items-end space-y-4 py-2 text-center">
                    <div className="h-6 w-24 bg-slate-200 px-2" />
                  </div>
                </div>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </Section>
  );
}

export default ReviewLoading;