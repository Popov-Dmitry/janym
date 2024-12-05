export const joinClassNames = (...classNames) => {
  return classNames.filter(Boolean).join(" ");
};