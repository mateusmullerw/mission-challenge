export const formatPrice = (price: string) => {
  let newPrice = price;
  newPrice = newPrice.replace(/([0-9]{2})$/g, ",$1");
  if (newPrice.length > 6)
    newPrice = newPrice.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
  if (newPrice.length > 10)
    newPrice = newPrice.replace(
      /([0-9]{3}).([0-9]{3}),([0-9]{2}$)/g,
      ".$1.$2,$3"
    );
  return newPrice;
};
