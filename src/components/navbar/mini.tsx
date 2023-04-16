import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Button from "../button";
import Icon from "../icon";
import { Menu, MenuButton, MenuItem, MenuItems } from "../menu";
import Section from "../section";

function MiniNavbar() {
  return (
    <div className="w-full bg-brand-blue py-2 text-white">
      <Section className="item-center flex max-w-[900px] justify-between">
        <div className="flex w-full items-center justify-between space-x-10">
          <p className="text-sm text-brand-accent">All Category</p>

          <>
            <Menu>
              <MenuButton
                as={Button}
                variant="outline"
                size="small"
                rightIcon={<Icon IconComp={ChevronDownIcon} boxSize={4} />}
              >
                Branch
              </MenuButton>
              <MenuItems position="-right-24 bg-brand-blue">
                <MenuItem variant="minimenu">Corporate Flag</MenuItem>
                <MenuItem variant="minimenu">National Flag</MenuItem>
                <MenuItem variant="minimenu">A2 Snapper Frame</MenuItem>
                <MenuItem variant="minimenu">A3 Snapper Frame</MenuItem>
                <MenuItem variant="minimenu">CEO&apos;s Portrait</MenuItem>
              </MenuItems>
            </Menu>
          </>
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
