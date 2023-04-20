import { gql } from "@apollo/client";

export const getAllCategories = gql`
  query getAllCategories($locale: I18NLocaleCode!) {
    categories(locale: $locale) {
      data {
        attributes {
          title
          slug
          icon {
            data{
              attributes{
                url
              }
            }
          }
        }
      }
    }
  }
`;
