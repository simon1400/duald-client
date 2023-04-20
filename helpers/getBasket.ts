import { getUniqueArr } from "./getUniqueArr";

// @ts-ignore
export const getBasket = async (basket, basketItems, getBasketItems, locale) => {
  const oldBasket = [...basketItems];
  const filteredBasketLocal: any[] = []
  for(let i = 0; i < basket.length; i++) {
    for(let a = 0; a < oldBasket.length; a++) {
      if(basket[i].id === oldBasket[a].id && basket[i].idVariant === oldBasket[a].idVariant) {
        filteredBasketLocal.push(oldBasket[a])
      }
    }
  }
  
  const unique = getUniqueArr(basket, filteredBasketLocal)
  
  basket.map((stateItem: any) => {
    filteredBasketLocal.map((danwerItem: any) => {
      if(stateItem.id === danwerItem.id && stateItem.idVariant === danwerItem.idVariant){
        danwerItem.count = stateItem.count
      }
    })
  })

  console.log(unique)

  for (let i = 0; i < unique.length; i++) {
    const newBasketItems = await getBasketItems({
      variables: {
        locale: locale,
        productId: unique[i].id,
        variantTitle: unique[i].variantTitle,
      },
    });

    console.log({newBasketItems})

    // @ts-ignore
    filteredBasketLocal.push({ 
      id: newBasketItems.data.products.data[0].id,
      idVariant: newBasketItems.data.products.data[0].attributes.variants[0].id,
      variantTitle: newBasketItems.data.products.data[0].attributes.variants[0].title,
      count: unique[i].count,
      ...newBasketItems.data.products.data[0].attributes 
    });
  }

  return filteredBasketLocal
  
};