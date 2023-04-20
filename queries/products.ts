import { gql } from "@apollo/client";

export const getProducts = gql`
  query getProducts($category: String!, $locale: I18NLocaleCode!) {
    products(filters: {categories: {slug: {eq: $category}}}, locale: $locale) {
      data {
        id
        attributes {
          title
          slug
          unit
					variants{
            id
            title
            images {
              data{
                attributes{
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
  query getBasketProducts($productId: ID!, $variantTitle: String!, $locale: I18NLocaleCode!) {
    products(filters: {id: {eq: $productId}}, locale: $locale) {
      data {
        id
        attributes {
          title
					variants(filters: {title: {eq: $variantTitle}}){
            id
            title
            images {
              data{
                attributes{
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

// export const getPriceProduct = gql`
//   query getPriceProduct($productId: ID!, $variantTitle: String!, $locale: I18NLocaleCode!) {
//     product(id: {eq: $productId}, locale: $locale) {
//       data {
//         attributes {
//           title
// 					variants(filters: {title: {eq: $variantTitle}}){
//             price
//             salePrice
//             margin
//             amount
//             countInPack
//             endPrice
//           }
//         }
//       }
//     }
//   }
// `
