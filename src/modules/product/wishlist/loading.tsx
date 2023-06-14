import Section from "@/components/section";

const WishListSkeleton = () => {
  return (
    <>
      <div className="animate-pulse bg-white pb-10">
        <Section className="gap-x-4 pt-5">
          <div className="mb-8 space-y-6 overflow-hidden rounded bg-white pb-2">
            <div className="flex flex-col overflow-x-auto lg:overflow-x-hidden">
              <div className="sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                  <div className="overflow-x-auto lg:overflow-x-hidden">
                    <table className="min-w-[640px] text-left text-sm font-light sm:min-w-full">
                      <tbody>
                        {[1, 2, 3].map((item) => (
                          <div
                            key={item}
                            className="flex items-center justify-between border-b"
                          >
                            <div className="max-w-[400px] py-4 text-slate-700">
                              <div className="item-start flex gap-3">
                                <div className="flex h-[110px] w-[110px] flex-shrink-0 overflow-hidden  rounded-[4px] bg-brand-light">
                                  <div className="h-full w-full bg-slate-200 object-cover object-center" />
                                </div>
                                <div className="flex h-[110px] flex-col justify-between">
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

                            <div className="flex w-[200px] flex-col items-end space-y-4 py-4 text-center">
                              <div className="h-2 w-16 bg-slate-200 px-2" />
                              <div className="h-2 w-20 bg-slate-200 px-2" />
                            </div>
                          </div>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </>
  );
};

export default WishListSkeleton;
