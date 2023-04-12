import { CartItem } from "@/types/service.types";
import { getItem, setItem } from "./storage.service";

export class CartService {
  public setupCart(uniqueId: string) {
    const cart = getItem(uniqueId);

    if (!cart) {
      setItem(uniqueId, JSON.stringify([]));
    }
  }

  public addItemsToCart(key: string, item: CartItem[]) {
    setItem(key, JSON.stringify(item));
  }

  public getCartItems(key: string): CartItem[] {
    const cart = getItem(key);

    if (!cart) {
      return [];
    }

    return JSON.parse(cart);
  }
}
