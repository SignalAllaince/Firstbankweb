import sadEmoji from "../../../public/images/emoji/sad.svg";
import smileEmoji from "../../../public/images/emoji/smile.svg";
import staleEmoji from "../../../public/images/emoji/stale.svg";

export type EmojiModel = {
  value: number;
  img: any;
  text: "satisfied" | "Indifferent" | "Disappointed";
};

export const renderEmoji = (text: EmojiModel["text"]) =>
  emojiRatingsList.find((item) => item.text === text)?.img;

export const emojiRatingsList: EmojiModel[] = [
  {
    value: 5,
    img: smileEmoji,
    text: "satisfied",
  },
  {
    value: 3,
    img: staleEmoji,
    text: "Indifferent",
  },
  {
    value: 1,
    img: sadEmoji,
    text: "Disappointed",
  },
];

export const ratingsList = [
  {
    value: 4,
  },
  {
    value: 3,
  },
  {
    value: 2,
  },
];

export const isCheckoutViable = (status: string) =>
  ["PendingPayment", "New"].includes(status);

export const orderStatus = [
  {
    id: "New",
    name: "New",
  },
  {
    id: "PendingCheckout",
    name: "PendingCheckout",
  },
  {
    id: "PendingPayment",
    name: "PendingPayment",
  },
  {
    id: "PaymentFailed",
    name: "PaymentFailed",
  },
  {
    id: "PaymentReceived",
    name: "PaymentReceived",
  },
  {
    id: "OutOfStock",
    name: "OutOfStock",
  },
  {
    id: "OnHold",
    name: "OnHold",
  },
  {
    id: "Cancelled",
    name: "Cancelled",
  },
  {
    id: "Refunded",
    name: "Refunded",
  },
  {
    id: "Shipping",
    name: "Shipping",
  },
  {
    id: "Shipped",
    name: "Shipped",
  },
  {
    id: "Closed",
    name: "Closed",
  },
  {
    id: "Complete",
    name: "Complete",
  },
  {
    id: "Deleted",
    name: "Deleted",
  },
  {
    id: "AdminCancelled",
    name: "AdminCancelled",
  },
  {
    id: "AdminDeleted",
    name: "AdminDeleted",
  },
  {
    id: "Invoiced",
    name: "Invoiced",
  },
];
