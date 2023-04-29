import { FC } from "react"
import { PriceS } from "./styled"
import { getPrice } from "helpers/getPrice"
import useTranslation from 'next-translate/useTranslation'

interface IPrice {
  big?: boolean
  unit?: string;
  data: {
    endPrice?: number
    salePrice?: number
    margin?: number
    price: number
    amount: number
    countInPack: number
  }
}

const Price: FC<IPrice> = ({data, big = false}) => {
  const { t } = useTranslation('common')
  return (
    <PriceS big={big}>
      <div className="dph-incl">
        <span>{t('price', { price: data.salePrice ? data.salePrice.toFixed(2) : getPrice(data) })}</span>
        {/* <span>IVA incl.</span> */}
      </div>
      {/* <div>
        <span>{t('price', { price: data.salePrice ? (data.salePrice - (data.salePrice * 0.21)).toFixed(2) : (getPrice(data) - (getPrice(data) * 0.21)).toFixed(2) })} <span>senza IVA</span></span>
        {data.salePrice && <del>{t('price', { price: getPrice(data) })}</del>}
      </div> */}
      <div>
        <small>x {t('countInPack', { count: data.countInPack })} | {data.amount} l</small>
      </div>
    </PriceS>
  )
}

export default Price