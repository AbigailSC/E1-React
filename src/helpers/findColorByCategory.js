import { categories } from "./categories"

export const findColorByCategory = (category) => {
  const { color } = categories.find((item) => item.name === category)
  return color;
}