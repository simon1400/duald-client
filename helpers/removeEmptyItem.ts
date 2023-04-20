export const removeEmpryItem = (basket: BasketItem[]) => {
  let filteredBasket = basket.map((item: BasketItem) => {
    if(item.count !== 0) {
      return item
    }
  })
  filteredBasket = filteredBasket.filter((item: any) => item)
  return {filteredBasket}
}