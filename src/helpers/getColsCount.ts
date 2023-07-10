export default (width: number): number => {
  if (width <= 655) return 1;
  else if (width < 800) return 2;
  else if (width < 1100) return 3;
  else if (width < 1300) return 4;
  else if (width < 1600) return 5;
  else if (width < 1900) return 6;
  else if (width < 2200) return 7;
  else if (width < 2500) return 8;
  else return 9;
};
