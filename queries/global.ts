import { gql } from "@apollo/client";

const globalQuery = gql`
  query Global($locale: I18NLocaleCode!) {
    global(locale: $locale) {
      data {
        attributes {
          footerInfo
        }
      }
    }
  }
`

export default globalQuery