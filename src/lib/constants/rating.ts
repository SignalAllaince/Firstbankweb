import { CategoryTypes } from "@/types/service.types";
import sadEmoji from "../../../public/images/emoji/sad.svg";
import smileEmoji from "../../../public/images/emoji/smile.svg";
import staleEmoji from "../../../public/images/emoji/stale.svg";

type OptionsType = {
  name: string;
  value: string;
};
export const ratingsList = [
  {
    value: 5,
    img: smileEmoji,
  },
  {
    value: 3,
    img: staleEmoji,
  },
  {
    value: 1,
    img: sadEmoji,
  },
];

export const priceList = [
  {
    name: "Under ₦5,000",
    value: "12GB",
  },
  {
    name: "₦5,000 - ₦9,999",
    value: "16GB",
  },
  {
    name: "₦10,000 - ₦19,999",
    value: "32GB",
  },
  {
    name: "₦20,000 - ₦39,999",
    value: "16GB",
  },
  {
    name: "₦40,000 Above",
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
