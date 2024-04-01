export const formatAddress = (address: string) => {
  let trimmedAddress =
    address.substring(0, 4) +
    "..." +
    address.substring(address.length - 7, address.length);
  return trimmedAddress;
};
