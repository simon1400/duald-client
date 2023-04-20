import { CardS, ChipCardWrap, ContentCard, ControlCard } from "./styled";
import { Typography } from "@mui/material";
import Chip from "components/Chip";
import ControlButtonsCard from "./ControlButtonsCard";
import Price from "components/Price";
import BuyButton from "../BuyButton";
import Slider from "./Slider";
import { FC, useEffect, useState } from "react";
import { calculateSale } from "helpers/calculateSale";
import { useSelector } from "react-redux";
import { selectProducts } from "stores/slices/products";
import { useRouter } from "next/router";
import { selectActiveCategory } from "stores/slices/categoryNav";

interface ICard {
  data: any;
}

const Card: FC<ICard> = ({ data }) => {
  const [variant, setVariant] = useState(0);

  const activeCategory = useSelector(selectActiveCategory)

  const handleChangeVariant = (idx: number) => {
    setVariant(idx);
  };

  useEffect(() => {
    setVariant(0);
  }, [activeCategory])

  return (
    <CardS>
      {data.variants[variant].salePrice && (
        <ChipCardWrap>
          <Chip
            label={`- ${calculateSale(
              data.variants[variant].salePrice,
              data.variants[variant].endPrice
            )} %`}
          />
        </ChipCardWrap>
      )}
      <ControlButtonsCard
        data={{ idParent: data.id, titleParent: data.title, ...data.variants[variant] }}
      />
      <Slider
        variants={data.variants}
        handleChangeVariant={handleChangeVariant}
      />
      <ContentCard>
        <Typography variant="h3">
          {data.title} - {data.variants[variant].title}
        </Typography>
        <ControlCard>
          <Price data={data.variants[variant]} />
          <BuyButton
            product={{ id: data.id, idVariant: data.variants[variant].id, variantTitle: data.variants[variant].title }}
          />
        </ControlCard>
      </ContentCard>
    </CardS>
  );
};

export default Card;
