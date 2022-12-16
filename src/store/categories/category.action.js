import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./category.types";

export const setCategoriesMap = (categoriesMap) => {
  return createAction(CART_ACTION_TYPES.SET_CATEGORIES_MAP, categoriesMap);
};
