import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import shoeImg from "../../../public/images/shoe.svg";
import Button from "../button";
import Heading from "../heading";
import Icon from "../icon";

function Banner() {
  return (
    <div className="space-y-3">
      <Heading size="h4" className="text-lg font-medium">
        Hi Emeka, what items would you like to buy today?
      </Heading>
      <div className="relative overflow-hidden rounded-[4px] bg-brand-blue px-8 py-4 text-brand-lightest">
        <div className="flex items-center justify-between">
          <div>
            <div className="space-y-2">
              <Heading size="h2">Live in style</Heading>
              <p className="text-sm font-light">
                with the newly added customized converse shoes.
              </p>
            </div>

            <div className="pt-5">
              <Button
                size="small"
                rightIcon={<Icon IconComp={ArrowRightIcon} boxSize={4} />}
                variant="warning"
              >
                View product
              </Button>
            </div>
            <div className="flex items-center gap-1 pt-10">
              {[1, 2, 3, 4].map((item) => (
                <div
                  className={`h-2 w-2 rounded-full ${
                    item < 2 ? "bg-brand-accent" : "bg-white"
                  }`}
                  key={item}
                ></div>
              ))}
            </div>
          </div>
          <div className="max-w-[300px]">
            <Image src={shoeImg} alt="" className="relative z-20" />
          </div>
          <div className="absolute -right-80 -top-20 z-10 h-[600px] w-[600px] -rotate-[30deg] rounded-[40px] bg-brand-accent" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
