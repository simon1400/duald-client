import { Box, Container, Tab, Tabs } from "@mui/material";
import { CategoryNavS, ContainerWrap } from "./styled";
import { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeActiveCategory, selectCategory } from "stores/slices/categoryNav";
import { useLazyQuery } from "@apollo/client";
import { getProducts } from "queries/products";
import { useRouter } from "next/router";
import { changeProducts } from "stores/slices/products";
import { useScroll } from "react-spring";

const CategoryNav = () => {
  const [value, setValue] = useState(0);

  const categoryNav = useSelector(selectCategory);

  const router = useRouter()
  const ref = useRef<HTMLDivElement>(null!);
  const [scrollYState, setScrollYState] = useState<number>(0);
  const [updateProducts] = useLazyQuery(getProducts);
  const [sticky, setSticky] = useState(false)
  const dispatch = useDispatch()

  const handleChange = async (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    dispatch(changeActiveCategory(newValue))
    const newProducts = await updateProducts({variables: {category: categoryNav[newValue].slug, locale: router.locale}})
    dispatch(changeProducts(newProducts.data.products.data.map((item: any) => ({id: item.id, ...item.attributes}))))
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const posElTop = useMemo(
    () => ref?.current?.offsetTop,
    [ref.current?.offsetTop]
  );

  useScroll({
    onChange: ({ value: { scrollY } }) => setScrollYState(scrollY)
  });

  useEffect(() => {
    if(posElTop) {
      if (!sticky && scrollYState >= posElTop) {
        setSticky(true)
      }else if(sticky && scrollYState <= posElTop){
        setSticky(false)
      }
    }
  }, [scrollYState])
  
  return (
    <section style={{height: "49px"}} ref={ref}>
      <ContainerWrap sticky={sticky}>
        <Container>
          <CategoryNavS>
            <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                allowScrollButtonsMobile
                aria-label="scrollable prevent tabs example"
              >
                {categoryNav.map((item: any, idx: number) => (
                  <Tab key={idx} label={item.title} />
                ))}
              </Tabs>
            </Box>
          </CategoryNavS>
        </Container>
      </ContainerWrap>
    </section>
  );
};

export default CategoryNav;
