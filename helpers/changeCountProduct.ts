export const changeCountProduct = (
  product: any,
  type: string,
  count: number,
  basket: BasketItem[]
) => {
  let newCount: number = count;
  let oldBasket: BasketItem[] | undefined = [...basket];
  if (type === "-") {
    newCount--;
    oldBasket = oldBasket.map((item: any) => {
      if (item.id === product.id && item.idVariant === product.idVariant) {
        let newItem = { ...item };
        newItem.count = newCount;
        return newItem;
      }
      return item;
    });
  } else if (type === "+") {
    newCount++;
    oldBasket = oldBasket.map((item) => {
      if (item.id === product.id && item.idVariant === product.idVariant) {
        let newItem = { ...item };
        newItem.count = newCount;
        return newItem;
      }
      return item;
    });
  }

  oldBasket = oldBasket.filter(item => {
    if(item.count !== 0) {
      return item
    }
  })

  return { newCount, newBasket: oldBasket };
};
