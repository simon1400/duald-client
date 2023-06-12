import { gql } from "@apollo/client";

export const getContact = gql`
  query getContact($locale: I18NLocaleCode!) {
    contact(locale: $locale) {
      data {
        attributes {
          phone{
            text
            link
          }
          email {
            text
            link
          }
        }
      }
    }
  }
`;
