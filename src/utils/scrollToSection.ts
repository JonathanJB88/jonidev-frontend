export const scrollTo = (top = 0) => {
  window?.scrollTo({
    top: top + 32, // 32px of padding
    behavior: 'smooth',
  });
};
