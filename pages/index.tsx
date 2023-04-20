import { Container, Grid } from "@mui/material";
import Card from "components/Card";
import Page from "layout/Page";
import { client } from "lib/api";
import { getAllCategories } from "queries/category";
import { getProducts } from "queries/products";
import { useSelector } from "react-redux";
import { wrapper } from "stores";
import { changeCategoryNav } from "stores/slices/categoryNav";
import { changeProducts, selectProducts } from "stores/slices/products";
// import useTranslation from 'next-translate/useTranslation';

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ locale }) => {
      const { data: categoryNavData } = await client.query({
        query: getAllCategories,
        variables: { locale },
      });

      const categoryNav = categoryNavData.categories.data.map(
        (item: any) => item.attributes
      );

      const { data: productsData } = await client.query({
        query: getProducts,
        variables: {
          locale,
          category: categoryNav[0].slug,
        },
      });

      const products = productsData.products.data.map(
        (item: any) => ({id: item.id, ...item.attributes})
      );

      // const localizations = [
      //   {
      //     locale: 'cs',
      //     slug: '/'
      //   },
      //   {
      //     locale: 'en',
      //     slug: '/'
      //   },
      // ]

      store.dispatch(changeCategoryNav(categoryNav));
      store.dispatch(changeProducts(products));

      return {
        props: {},
      };
    }
);

const Homepage = () => {
  const products = useSelector(selectProducts);
  // const { t } = useTranslation("common")

  return (
    <Page>
      <Container>
        <Grid container spacing={4.8}>
          {products.map((item: any, idx: number) => (
            <Grid key={idx} item xs={12} sm={4} md={3}>
              <Card data={item} />
              {/* {t("runVideo")} */}
            </Grid>
          ))}
        </Grid>
      </Container>
    </Page>
  );
};

export default Homepage;
