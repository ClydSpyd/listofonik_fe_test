import { IconType } from "react-icons/lib/esm/iconBase";

declare type CardData = {
  cardTitle: string;
  cardText: string;
  btnText: string;
  Icon:IconType;
  route: string;
  motionVariant: any; // 1 = from left, 0 = from right
}