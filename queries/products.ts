import { gql } from "@apollo/client";

export const getProducts = gql`
  query getProducts($category: String!, $locale: I18NLocaleCode!) {
    products(
      filters: { categories: { slug: { eq: $category } } }
      locale: $locale
      sort: ["priceFrom:asc"]
    ) {
      data {
        id
        attributes {
          title
          slug
          unit
          priceFrom
          variants {
            id
            title
            images {
              data {
                attributes {
                  url
                }
              }
            }
            price
            salePrice
            margin
            amount
            countInPack
            endPrice
          }
        }
      }
    }
  }
`;

export const getBasketProducts = gql`
  query getBasketProducts(
    $productId: ID!
    $variantTitle: String!
    $locale: I18NLocaleCode!
  ) {
    products(filters: { id: { eq: $productId } }, locale: $locale) {
      data {
        id
        attributes {
          title
          variants(filters: { title: { eq: $variantTitle } }) {
            id
            title
            images {
              data {
                attributes {
                  url
                }
              }
            }
            price
            salePrice
            margin
            amount
            countInPack
            endPrice
          }
        }
      }
    }
  }
`;
