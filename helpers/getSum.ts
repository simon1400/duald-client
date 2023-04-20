export const getSum = (basket: any) => {
  let sum = 0;
  basket.map((item: any) => {
    const variant = item.variants[0];
    if (variant.salePrice) {
      sum += variant.salePrice * variant.countInPack * item.count;
    } else if (variant.endPrice) {
      sum += variant.endPrice * variant.countInPack * item.count;
    } else if (variant.margin) {
      sum +=
        (variant.price * variant.margin + variant.price).toFixed(2) *
        variant.countInPack *
        item.count;
    } else {
      sum += variant.price * variant.countInPack * item.count;
    }
  });
  return sum.toFixed(2);
};
