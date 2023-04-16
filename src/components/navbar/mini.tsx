import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Button, { ButtonProps } from "../button";
import Icon from "../icon";
import { Menu, MenuButton, MenuItem, MenuItems } from "../menu";
import Section from "../section";

function MiniNavbar() {
  const menuProps = {
    activeBg: "#142633",
    activeText: "#f0bd2d",
    variant: "minimenu" as ButtonProps["variant"],
  };

  return (
    <div className="w-full bg-brand-blue py-2 text-white">
      <Section className="item-center flex max-w-[900px] justify-between">
        <div className="flex w-full items-center justify-between space-x-10">
          <p className="text-sm text-brand-accent">All Category</p>
          <Menu>
            <MenuButton
              as={Button}
              variant="outline"
              size="small"
              rightIcon={<Icon IconComp={ChevronDownIcon} boxSize={4} />}
            >
              Branch
            </MenuButton>
            <MenuItems menuClasses="-right-24 bg-brand-blue mt-3">
              <MenuItem {...menuProps}>Corporate Flag</MenuItem>
              <MenuItem {...menuProps}>National Flag</MenuItem>
              <MenuItem {...menuProps}>A2 Snapper Frame</MenuItem>
              <MenuItem {...menuProps}>A3 Snapper Frame</MenuItem>
              <MenuItem {...menuProps}>CEO&apos;s Portrait</MenuItem>
            </MenuItems>
          </Menu>
          <>
            <Menu>
              <MenuButton
                as={Button}
                variant="outline"
                size="small"
                rightIcon={<Icon IconComp={ChevronDownIcon} boxSize={4} />}
              >
                Stationery
              </MenuButton>
              <MenuItems menuClasses="-right-24 bg-brand-blue mt-3">
                <MenuItem {...menuProps}>Commemorative Notebook</MenuItem>
                <MenuItem {...menuProps}>Gray Notebook</MenuItem>
                <MenuItem {...menuProps}>Spiral Notebook</MenuItem>
                <MenuItem {...menuProps}>Pen</MenuItem>
              </MenuItems>
            </Menu>
          </>
          <>
            <Menu>
              <MenuButton
                as={Button}
                variant="outline"
                size="small"
                rightIcon={<Icon IconComp={ChevronDownIcon} boxSize={4} />}
              >
                Uniform
              </MenuButton>
              <MenuItems menuClasses="-right-24 bg-brand-blue mt-3">
                <MenuItem {...menuProps}>Tshirst</MenuItem>
              </MenuItems>
            </Menu>
          </>

          <Button variant="outline" size="small">
            Office Equipment
          </Button>
          <Button variant="outline" size="small">
            Home Appliance
          </Button>

          <Menu>
            <MenuButton
              as={Button}
              variant="outline"
              size="small"
              rightIcon={<Icon IconComp={ChevronDownIcon} boxSize={4} />}
            >
              Others
            </MenuButton>
            <MenuItems menuClasses="-right-24 bg-brand-blue mt-3">
              <MenuItem {...menuProps}>Water Bottles</MenuItem>
              <MenuItem {...menuProps}>Umbrellas</MenuItem>
            </MenuItems>
          </Menu>
        </div>
      </Section>
    </div>
  );
}

export default MiniNavbar;
