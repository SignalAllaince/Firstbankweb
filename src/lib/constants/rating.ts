import { CategoryTypes } from "@/types/service.types";
import sadEmoji from "../../../public/images/emoji/sad.svg";
import smileEmoji from "../../../public/images/emoji/smile.svg";
import staleEmoji from "../../../public/images/emoji/stale.svg";

type OptionsType = {
  name: string;
  value: string;
};

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

export const popularity = {
  name: "By popularity",
  value: "12GB",
};

export const priceList = [
  {
    name: "Low to High",
    value: "12GB",
  },
  {
    name: "High to Low",
    value: "16GB",
  },
];

const getUniformList = [
  {
    name: "T-shirt",
    value: "12GB",
  },
];

const getOthersList = [
  {
    name: "Water Bottles",
    value: "16GB",
  },
  {
    name: "Umbrellas",
    value: "11GB",
  },
  {
    name: "Travelling Bag",
    value: "12GB",
  },
];

const getHomeAppList: OptionsType[] = [];

const getOfficeEqipList: OptionsType[] = [];

const getStationeryList = [
  {
    name: "Commemorative Notebook",
    value: "notobook",
  },
  {
    name: "Grey Notebook",
    value: "grey",
  },
  {
    name: "Spiral Notebook",
    value: "spiral",
  },
  {
    name: "Pen",
    value: "pen",
  },
];

const getBranchList = [
  {
    name: "Corporate Flag",
    value: "notobook",
  },
  {
    name: "National Flag",
    value: "grey",
  },
  {
    name: "A2 Snapper Frame",
    value: "spiral",
  },
  {
    name: "A3 Snapper Frame",
    value: "pensaass",
  },
  {
    name: "A4 Snapper Frame",
    value: "frame",
  },
  {
    name: "A3 Snapper Frame",
    value: "penod",
  },
];

export const getCategoryList = (category: CategoryTypes) => {
  const categories = {
    branch: getBranchList,
    stationery: getStationeryList,
    uniform: getUniformList,
    others: getOthersList,
    "office-equipment": getOfficeEqipList,
    "home-appliance": getHomeAppList,
  };

  return categories[category];
};
