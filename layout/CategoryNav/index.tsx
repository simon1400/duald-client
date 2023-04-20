import { Box, Tab, Tabs } from "@mui/material";
import { CategoryNavS } from "./styled";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeActiveCategory, selectCategory } from "stores/slices/categoryNav";
import { useLazyQuery } from "@apollo/client";
import { getProducts } from "queries/products";
import { useRouter } from "next/router";
import { changeProducts } from "stores/slices/products";
// import Image from "next/image";
// import dynamic from "next/dynamic";

// const APP_API = process.env.APP_API;

const CategoryNav = () => {
  const [value, setValue] = useState(0);

  const categoryNav = useSelector(selectCategory);

  const router = useRouter()

  const [updateProducts] = useLazyQuery(getProducts);

  const dispatch = useDispatch()

  const handleChange = async (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    dispatch(changeActiveCategory(newValue))
    const newProducts = await updateProducts({variables: {category: categoryNav[newValue].slug, locale: router.locale}})
    dispatch(changeProducts(newProducts.data.products.data.map((item: any) => ({id: item.id, ...item.attributes}))))
  };

  return (
    <CategoryNavS>
      <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          // variant="scrollable"
          // scrollButtons={false}
          centered={true}
          aria-label="scrollable prevent tabs example"
        >
          {categoryNav.map((item: any, idx: number) => (
            <Tab key={idx} label={item.title} />
          ))}
        </Tabs>
      </Box>
    </CategoryNavS>
  );
};

export default CategoryNav;
