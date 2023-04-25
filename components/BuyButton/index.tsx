import Button from "components/Button"
import { FC, useEffect, useState } from "react";
import ButtonCount from "components/ButtonCount";
import { useDispatch, useSelector } from "react-redux";
import { changeBasket, selectBasket } from "stores/slices/basket";
import { changeCountProduct } from "helpers/changeCountProduct";
// import { removeEmpryItem } from "helpers/removeEmptyItem";
import useTranslation from "next-translate/useTranslation";
import { VariantType, useSnackbar } from 'notistack';

interface IBuyButton {
  big?: boolean
  product: any
}

const BuyButton: FC<IBuyButton> = ({product, big = false}) => {

  const basket: BasketItem[] = useSelector(selectBasket)
  const { t } = useTranslation('common')

  const [count, setCount] = useState<number>(0)

  useEffect(() => {
    const newBasket = [...basket]
    const basketItem = newBasket.find(item => {
      if(item.id === product.id && item.idVariant === product.idVariant) {
        return item
      }
    })
    if(basketItem){
      setCount(basketItem.count)
    }else{
      setCount(0)
    }
  }, [product, basket])

  const dispatch = useDispatch()

  const handleChange = (type: string) => {
    const {newCount, newBasket} = changeCountProduct(product, type, count, basket)
    setCount(newCount)
    dispatch(changeBasket(newBasket))
    if(type === '-') {
      enqueueSnackbar(`-1 ${product.title} - ${product.variantTitle}`, { variant: 'error' });
    }else{
      enqueueSnackbar(`+1 ${product.title} - ${product.variantTitle}`, { variant: 'info' });
    }
  }

  const { enqueueSnackbar } = useSnackbar();

  const buyFirst = () => {    
    let oldBasket: BasketItem[] = [...basket]
    setCount(1)
    oldBasket.push({
      id: product.id,
      idVariant: product.idVariant,
      variantTitle: product.variantTitle,
      count: 1
    })
    dispatch(changeBasket(oldBasket))
    enqueueSnackbar(`${product.title} - ${product.variantTitle} ha aggiunto`, { variant: 'success' });
  }

  return (
    <>
      {!!count && <ButtonCount handleChange={handleChange} count={count} big={big} />}
      {count === 0 && <Button size={big ? "large" : "small"} onClick={() => buyFirst()}>{t('buy')}</Button>}
    </>
  )
}

export default BuyButton