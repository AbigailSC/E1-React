export const changeDate = (date) => {
  return date.split("-").reverse().join("/");
}