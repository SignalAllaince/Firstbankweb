import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import Icon from "../icon";

function CartProductBtn() {
  return (
    <div className="flex h-10 w-fit items-center gap-0 divide-x divide-brand-light border border-brand-light">
      <button className="grid h-10 w-10 place-items-center">
        <Icon IconComp={MinusIcon} />
      </button>
      <div className="grid h-10 w-10 place-items-center">1</div>
      <button className="grid h-10 w-10 place-items-center">
        <Icon IconComp={PlusIcon} />
      </button>
    </div>
  );
}

export default CartProductBtn;
