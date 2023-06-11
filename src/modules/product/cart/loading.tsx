import Icon from "@/components/icon";
import PageHead from "@/components/page-head";
import Section from "@/components/section";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const CartLoadingPage = () => {
  return (
    <>
      <PageHead title="Cart" />
      <div className="animate-pulse bg-white pb-10">
        <div className="w-full border-b border-gray-200 ">
          <Section className="space-y-4 py-8">
            <div className="flex items-center gap-1 text-sm">
              <div className="h-2 w-10 rounded bg-slate-200"></div>
              <Icon IconComp={ChevronRightIcon} boxSize={4} />
              <div className="h-2 w-10 rounded bg-slate-200"></div>
            </div>
            <div className="flex items-center justify-between">
              <div className="h-8 w-20 bg-slate-200 px-2" />
              <div className="h-4 w-20 bg-slate-200 px-2" />
            </div>
            {/* <Button onClick={onOpen}>Open Modals</Button> */}
          </Section>
        </div>

        <Section className="gap-x-4 pt-5 lg:grid lg:grid-cols-12">
          <div className="mb-8 space-y-6 overflow-hidden rounded bg-white pb-2 lg:col-span-8">
            <div className="flex flex-col overflow-x-auto lg:overflow-x-hidden">
              <div className="sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                  <div className="overflow-x-auto lg:overflow-x-hidden">
                    <table className="min-w-[640px] text-left text-sm font-light sm:min-w-full">
                      <thead className="border-b font-medium">
                        <tr>
                          <th className="py-4 text-left font-medium text-brand-darkest">
                            <div className="h-2 w-20 max-w-[400px] bg-slate-200" />
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {[1, 2].map((item) => (
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

                            <div className="flex w-[200px] flex-col items-center space-y-4 py-4 text-center">
                              <div className="h-4 w-20 bg-slate-200 px-2" />
                              <div className="h-6 w-24 bg-slate-200 px-2" />
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
          <div className="mt-4 h-48 w-full rounded bg-slate-200 lg:col-span-4"></div>
        </Section>
      </div>
    </>
  );
};

export default CartLoadingPage;
