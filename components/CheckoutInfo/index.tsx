import Input from "components/Input";
import { CheckoutInfoS } from "./styled";
import { FC } from "react";
import useTranslation from "next-translate/useTranslation";

interface ICheckoutInfo {
  prefix: string;
  state: any;
  handle: (name: string, value: string) => void;
}

const CheckoutInfo: FC<ICheckoutInfo> = ({ prefix, state, handle }) => {
  const { t } = useTranslation('common')
  return (
    <CheckoutInfoS>
      <div>
        <Input
          name={prefix + "_name"}
          label={t`name`}
          value={state.name}
          onChange={(e) => handle("name", e.target.value)}
        />
      </div>
      <div>
        <Input
          name={prefix + "_email"}
          label="E-mail"
          value={state.email}
          onChange={(e) => handle("email", e.target.value)}
        />
      </div>
      <div>
        <Input
          name={prefix + "_phone"}
          label={t`phone`}
          value={state.phone}
          onChange={(e) => handle("phone", e.target.value)}
        />
      </div>
      <div>
        <Input
          name={prefix + "_company"}
          label={t`company`}
          value={state.company}
          onChange={(e) => handle("company", e.target.value)}
        />
      </div>
      <div>
        <Input
          name={prefix + "_zip"}
          label={t`zip`}
          value={state.zip}
          onChange={(e) => handle("zip", e.target.value)}
        />
      </div>
      <div>
        <Input
          name={prefix + "_city"}
          label={t`city`}
          value={state.city}
          onChange={(e) => handle("city", e.target.value)}
        />
      </div>
      <div>
        <Input
          name={prefix + "_address"}
          label={t`address`}
          value={state.address}
          onChange={(e) => handle("address", e.target.value)}
        />
      </div>
      <div>
        <Input
          name={prefix + "_state"}
          disabled
          label={t`state`}
          value={state.state}
          onChange={(e) => handle("state", e.target.value)}
          defaultValue="Italia"
        />
      </div>
    </CheckoutInfoS>
  );
};

export default CheckoutInfo;
