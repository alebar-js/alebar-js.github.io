export const toCapitalize = (s: string) => {
  let words = s.split(" ");
  let res = "";

  words.forEach((word) => (res += word[0].toUpperCase() + word.slice(1) + " "));
  return res.slice(0, -1);
};

export const getCirclePosition = (
  i: number,
  n: number,
  radius: number,
  variance?: number
): [y: number, x: number] => {
  const [y, x] = [
    Math.sin(((2 * Math.PI) / n) * i) * radius,
    Math.cos(((2 * Math.PI) / n) * i) * radius,
  ];

  // if (variance)
  //   return [
  //     Math.floor(
  //       y + Math.random() * variance * (Math.round(Math.random()) * 2 - 1)
  //     ),
  //     Math.floor(
  //       x + Math.random() * variance * (Math.round(Math.random()) * 2 - 1)
  //     ),
  //   ];

  return [Math.floor(y), Math.floor(x)];
};
