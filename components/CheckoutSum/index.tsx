import { CheckoutSumS } from "./styled"
import Button from "components/Button"
import useTranslation from "next-translate/useTranslation";
import { FC } from "react";

interface ICheckoutSum {
  handle: () => void
  sum: number
}

const CheckoutSum: FC<ICheckoutSum> = ({sum, handle}) => {

  const { t } = useTranslation('common')
  
  return (
    <CheckoutSumS>
      <div><span>{t`subtotal`}:</span><b>{t("price", {price: (sum - (sum * 0.21)).toFixed(2)})}</b></div>
      <div><span>{t`tax`}:</span><b>{t("price", {price: (sum * 0.21).toFixed(2)})}</b></div>
      <hr />
      <p className="sum-total">{t("price", {price: sum})}</p>
      {/* <Input placeholder="Voucher" />
      <Button size="large" variant="outlined">Apply voucher</Button> */}
      <Button size="large" onClick={() => handle()}>{t`order`}</Button>
    </CheckoutSumS>
  )
}

export default CheckoutSum