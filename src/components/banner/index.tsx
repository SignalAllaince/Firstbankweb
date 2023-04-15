import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import shoeImg from "../../../public/images/shoe.svg";
import Button from "../button";
import Heading from "../heading";
import Icon from "../icon";

function Banner() {
  return (
    <div className="space-y-3">
      <Heading size="h4" className="text-lg">
        Hi Emeka, what items would you like to buy today?
      </Heading>
      <div className="bg-brand-blue px-8 py-3 text-brand-lightest">
        <div className="flex items-center justify-between">
          <div>
            <div className="space-y-1">
              <Heading size="h2">Live in style</Heading>
              <p className="text-sm">
                with the newly added customized converse shoes.
              </p>
            </div>

            <div className="pt-5">
              <Button
                size="small"
                rightIcon={<Icon IconComp={ArrowRightIcon} boxSize={4} />}
                className="bg-brand-accent font-extrabold text-[#142633] hover:bg-brand-accent focus:bg-brand-accent focus:ring-amber-500"
              >
                View product
              </Button>
            </div>
          </div>
          <div className="max-w-[300px]">
            <Image src={shoeImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
