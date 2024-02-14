export const getsCityAndCountry = (addres: string): string =>
  addres?.split(',').slice(1, 3).join(' | ');
