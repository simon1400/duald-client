export const getPrice = (data: any) => {
  if(data.endPrice) {
    return data.endPrice.toFixed(2)
  }else if(data.margin) {
    return (data.price + (data.price * data.margin)).toFixed(2)
  }else{
    return data.price.toFixed(2)
  }
}