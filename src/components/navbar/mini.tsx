import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Button from "../button";
import Icon from "../icon";
import Section from "../section";

function MiniNavbar() {
  return (
    <div className="w-full bg-brand-blue py-2 text-white">
      <Section className="item-center flex max-w-[900px] justify-between">
        <div className="flex w-full items-center justify-between space-x-10">
          <p className="text-sm text-brand-accent">All Category</p>
          <Button
            variant="outline"
            size="small"
            rightIcon={<Icon IconComp={ChevronDownIcon} boxSize={4} />}
          >
            Branch
          </Button>
          <Button
            variant="outline"
            size="small"
            rightIcon={<Icon IconComp={ChevronDownIcon} boxSize={4} />}
          >
            Stationery
          </Button>
          <Button
            variant="outline"
            size="small"
            rightIcon={<Icon IconComp={ChevronDownIcon} boxSize={4} />}
          >
            Uniform
          </Button>
          <Button variant="outline" size="small">
            Office Equipment
          </Button>
          <Button variant="outline" size="small">
            Home Appliance
          </Button>
          <Button
            variant="outline"
            size="small"
            rightIcon={<Icon IconComp={ChevronDownIcon} boxSize={4} />}
          >
            Others
          </Button>
        </div>
      </Section>
    </div>
  );
}

export default MiniNavbar;
